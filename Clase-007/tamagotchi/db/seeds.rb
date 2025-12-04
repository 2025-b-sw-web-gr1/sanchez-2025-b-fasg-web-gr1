# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Crear una mascota por defecto
Pet.create!(
  name: "Tamagotchi",
  hunger: 30,
  energy: 80,
  happiness: 70,
  status: "alive"
)

puts "Mascota virtual creada exitosamente!"
puts "Visita http://localhost:3000 para interactuar con ella"

