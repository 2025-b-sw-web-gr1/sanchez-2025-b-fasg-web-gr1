class Pet < ApplicationRecord
  validates :name, presence: true, length: { minimum: 1, maximum: 20 }
  validates :hunger, inclusion: { in: 0..100 }
  validates :energy, inclusion: { in: 0..100 }
  validates :happiness, inclusion: { in: 0..100 }

  before_save :update_status
  before_save :apply_time_decay

  # Método para alimentar la mascota
  def feed!
    self.hunger = [ hunger - 30, 0 ].max
    self.energy = [ energy + 10, 100 ].min
    self.happiness = [ happiness + 5, 100 ].min
    self.last_interaction_at = Time.current
    save!
  end

  # Método para jugar con la mascota
  def play!
    self.happiness = [ happiness + 25, 100 ].min
    self.energy = [ energy - 20, 0 ].max
    self.hunger = [ hunger + 15, 100 ].min
    self.last_interaction_at = Time.current
    save!
  end

  # Método para hacer dormir a la mascota
  def sleep!
    self.energy = [ energy + 40, 100 ].min
    self.hunger = [ hunger + 20, 100 ].min
    self.last_interaction_at = Time.current
    save!
  end

  # Determinar el estado de ánimo visual
  def mood
    return "dead" if status == "dead"
    return "hungry" if hunger > 80
    return "sleepy" if energy < 20
    return "bored" if happiness < 30
    return "happy" if happiness > 70
    "neutral"
  end

  # Aplicar el paso del tiempo
  def apply_time_decay
    return if last_interaction_at.nil? || status == "dead"

    time_elapsed = Time.current - last_interaction_at
    minutes_passed = (time_elapsed / 60).to_i

    return if minutes_passed == 0

    # Decay rates per minute
    hunger_rate = 0.5  # +0.5 hunger per minute
    energy_rate = 0.3  # -0.3 energy per minute
    happiness_rate = 0.2  # -0.2 happiness per minute

    self.hunger = [ hunger + (hunger_rate * minutes_passed), 100 ].min
    self.energy = [ energy - (energy_rate * minutes_passed), 0 ].max
    self.happiness = [ happiness - (happiness_rate * minutes_passed), 0 ].max
  end

  # Actualizar el estado de vida/muerte
  def update_status
    self.status = "dead" if hunger >= 100 || energy <= 0
    self.status = "alive" if hunger < 100 && energy > 0 && status != "dead"
  end

  # Método para crear una nueva mascota
  def self.create_default
    Pet.create!(
      name: generate_random_name,
      hunger: 30,
      energy: 80,
      happiness: 70,
      status: "alive"
    )
  end

  private

  def self.generate_random_name
    names = [ "Buddy", "Fluffy", "Shadow", "Luna", "Max", "Bella", "Charlie", "Lucy", "Cooper", "Daisy" ]
    "#{names.sample} #{rand(1..999)}"
  end
end
