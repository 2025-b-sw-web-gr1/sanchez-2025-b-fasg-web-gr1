// Mock Data
const mockProperties = [
  {
    id: 1,
    title: "Apartamento moderno en el centro",
    location: "Madrid, España",
    type: "apartamento",
    rating: 4.8,
    reviews: 128,
    price: 85,
    guests: 2,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=400&h=400&fit=crop"
    ],
    amenities: ["WiFi", "Cocina", "Aire acondicionado"],
    description: "Apartamento completamente renovado en el corazón de Madrid"
  },
  {
    id: 2,
    title: "Casa con vista al mar",
    location: "Barcelona, España",
    type: "casa",
    rating: 4.9,
    reviews: 89,
    price: 120,
    guests: 4,
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d94?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop"
    ],
    amenities: ["Vista al mar", "Terraza", "WiFi"],
    description: "Hermosa casa con vistas espectaculares al Mediterráneo"
  },
  {
    id: 3,
    title: "Villa de lujo con piscina",
    location: "Valencia, España",
    type: "villa",
    rating: 4.7,
    reviews: 156,
    price: 200,
    guests: 8,
    images: [
      "https://media.discordapp.net/attachments/976997461686116412/1414485323827908678/mandorle_Concept_unique_dun_Chef-duvre_epique_de_science_-_fic_a541f66c-9f45-46b9-9d03-8bc2713a8e4a.png?ex=693075dd&is=692f245d&hm=546205aab972513076a512a7aa8d446b5a2a20e833383b888365b32d5a1768bc&=&format=webp&quality=lossless&width=506&height=715",
      "https://images.unsplash.com/photo-1602344519314-6f1d15d2e9b4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop"
    ],
    amenities: ["Piscina", "Jardín", "Barbacoa"],
    description: "Villa exclusiva con piscina privada y amplias zonas de relax"
  },
  {
    id: 4,
    title: "Cabaña romántica en la montaña",
    location: "Pyrenees, España",
    type: "cabaña",
    rating: 4.6,
    reviews: 73,
    price: 75,
    guests: 2,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2001?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2002?w=400&h=400&fit=crop"
    ],
    amenities: ["Chimenea", "WiFi", "Cocina equipada"],
    description: "Refugio íntimo rodeado de naturaleza en las montañas"
  },
  {
    id: 5,
    title: "Loft industrial cerca del centro",
    location: "Sevilla, España",
    type: "apartamento",
    rating: 4.5,
    reviews: 92,
    price: 65,
    guests: 3,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=400&fit=crop"
    ],
    amenities: ["WiFi", "Cocina", "Aire acondicionado"],
    description: "Espacio único con diseño industrial y todas las comodidades"
  },
  {
    id: 6,
    title: "Casa tradicional rural",
    location: "Granada, España",
    type: "casa",
    rating: 4.8,
    reviews: 104,
    price: 95,
    guests: 6,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f6?w=400&h=400&fit=crop"
    ],
    amenities: ["Patio", "WiFi", "Cocina tradicional"],
    description: "Casa auténtica andaluza con encanto tradicional"
  },
  {
    id: 7,
    title: "Apartamento frente a la playa",
    location: "Benidorm, España",
    type: "apartamento",
    rating: 4.7,
    reviews: 167,
    price: 110,
    guests: 4,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c751?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c752?w=400&h=400&fit=crop"
    ],
    amenities: ["Vista al mar", "Terraza", "WiFi"],
    description: "Ubicación privilegiada directamente en la playa"
  },
  {
    id: 8,
    title: "Villa panorámica en la colina",
    location: "Mallorca, España",
    type: "villa",
    rating: 4.9,
    reviews: 45,
    price: 280,
    guests: 10,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0f?w=400&h=400&fit=crop"
    ],
    amenities: ["Vista panorámica", "Piscina infinita", "Jardín"],
    description: "Villa exclusiva con vistas panorámicas de toda la bahía"
  },
  {
    id: 9,
    title: "Cabaña con jacuzzi",
    location: "Asturias, España",
    type: "cabaña",
    rating: 4.6,
    reviews: 87,
    price: 90,
    guests: 4,
    images: [
      "https://media.discordapp.net/attachments/1225526730509389834/1445499887981433104/image.png?ex=6930922d&is=692f40ad&hm=713663b6b9200902c28572642e0a0b96a9dd00bdc3b0741ed57e340f305bacf9&=&format=webp&quality=lossless&width=896&height=631",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2003?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2004?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2005?w=400&h=400&fit=crop"
    ],
    amenities: ["Jacuzzi", "Chimenea", "WiFi"],
    description: "Refugio relajante con jacuzzi privado y entorno natural"
  },
  {
    id: 10,
    title: "Casa urbana moderna",
    location: "Bilbao, España",
    type: "casa",
    rating: 4.4,
    reviews: 78,
    price: 80,
    guests: 5,
    images: [
      "https://media.discordapp.net/attachments/1225526730509389834/1445617168455565475/nightnurse__a_group_of_houses_made_from_snow_illuminated_by_lig_7172f23c-7b96-4fc1-a825-58779da6001d.png?ex=6930ff67&is=692fade7&hm=a97e77a1074f81bf85490b257a11ff9069c0ee76e106b68a8373ec13379119ca&=&format=webp&quality=lossless&width=896&height=631",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98d6?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98d7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98d8?w=400&h=400&fit=crop"
    ],
    amenities: ["WiFi", "Cocina moderna", "Aire acondicionado"],
    description: "Casa contemporánea perfectamente ubicada para explorar la ciudad"
  },
  {
    id: 11,
    title: "Apartamento vintage",
    location: "Córdoba, España",
    type: "apartamento",
    rating: 4.3,
    reviews: 134,
    price: 55,
    guests: 2,
    images: [
      "https://media.discordapp.net/attachments/953413775149633536/1071981580358258698/MuriloSafira_An_apartament_small_minimalist_balcony_in_light_be_6efbde0a-09b0-4b4c-abab-9e6f9b87ddad.png?ex=6930f2a5&is=692fa125&hm=da38e0ad4149615d2e92650fe933b0343652290937fa3801b2c86a9001123896&=&format=webp&quality=lossless&width=917&height=611",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93689?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93690?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93691?w=400&h=400&fit=crop"
    ],
    amenities: ["WiFi", "Cocina", "Calefacción"],
    description: "Apartamento con encanto histórico en el centro peatonal"
  },
  {
    id: 12,
    title: "Villa familiar",
    location: "Costa Brava, España",
    type: "villa",
    rating: 4.8,
    reviews: 98,
    price: 180,
    guests: 8,
    images: [
      "https://media.discordapp.net/attachments/976997461686116412/1445254495281086698/fakhrisyarifudin_28452_quiet_1890s_village_street_covered_in_de_d28b593b-720e-481c-a78c-44f856e24fc5.png?ex=6930ff23&is=692fada3&hm=353a70218caa8de9645a681b02ecc7c7d5ea727d0282d9821e493373a4242340&=&format=webp&quality=lossless&width=917&height=611",
      "https://images.unsplash.com/photo-1615529328331-f89175977120?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f89175977121?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1615529328331-f89175977122?w=400&h=400&fit=crop"
    ],
    amenities: ["Piscina", "Jardín", "Barbacoa"],
    description: "Villa familiar perfecta para vacaciones largas"
  }
];

// App State
class AppState {
  constructor() {
    this.properties = [...mockProperties];
    this.filteredProperties = [...mockProperties];
    this.currentFilter = 'all';
    this.currentImageIndex = {};
    this.favorites = new Set();
    this.searchData = {
      destination: '',
      checkin: '',
      checkout: '',
      guests: 2
    };
  }

  filterProperties(type) {
    this.currentFilter = type;
    if (type === 'all') {
      this.filteredProperties = [...this.properties];
    } else {
      this.filteredProperties = this.properties.filter(property => property.type === type);
    }
    return this.filteredProperties;
  }

  searchProperties(searchData) {
    this.searchData = { ...searchData };
    let results = [...this.properties];

    // Filter by destination
    if (searchData.destination) {
      results = results.filter(property =>
        property.location.toLowerCase().includes(searchData.destination.toLowerCase()) ||
        property.title.toLowerCase().includes(searchData.destination.toLowerCase())
      );
    }

    // Filter by type if active filter is not 'all'
    if (this.currentFilter !== 'all') {
      results = results.filter(property => property.type === this.currentFilter);
    }

    // Filter by guests
    if (searchData.guests) {
      results = results.filter(property => property.guests >= searchData.guests);
    }

    this.filteredProperties = results;
    return this.filteredProperties;
  }

  getProperty(propertyId) {
    return this.properties.find(property => property.id === propertyId);
  }

  toggleFavorite(propertyId) {
    if (this.favorites.has(propertyId)) {
      this.favorites.delete(propertyId);
    } else {
      this.favorites.add(propertyId);
    }
  }
}

// Main App Class
class AirbnbCloneApp {
  constructor() {
    this.state = new AppState();
    this.currentView = 'home';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderProperties();
    this.updateActiveFilter();
  }

  setupEventListeners() {
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.handleFilterChange(e.target.dataset.filter);
      });
    });

    // Mobile search modal
    const openSearchBtn = document.getElementById('open-search');
    const closeSearchBtn = document.getElementById('close-search-modal');
    const searchModal = document.getElementById('search-modal');
    const modalSearchBtn = document.getElementById('modal-search-btn');

    if (openSearchBtn) {
      openSearchBtn.addEventListener('click', () => this.openSearchModal());
    }

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', () => this.closeSearchModal());
    }

    if (modalSearchBtn) {
      modalSearchBtn.addEventListener('click', () => this.handleSearch());
    }

    // Close modal when clicking outside
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
          this.closeSearchModal();
        }
      });
    }

    // Desktop search fields
    const searchFields = document.querySelectorAll('.search-field');
    searchFields.forEach(field => {
      field.addEventListener('click', () => this.openSearchModal());
    });

    // Favorite buttons and property cards (event delegation)
    document.addEventListener('click', (e) => {
      if (e.target.closest('.favorite-btn')) {
        const propertyId = parseInt(e.target.closest('.favorite-btn').dataset.propertyId);
        this.handleFavoriteToggle(propertyId);
      }

      if (e.target.closest('.property-card')) {
        const propertyCard = e.target.closest('.property-card');
        const propertyId = parseInt(propertyCard.dataset.propertyId);
        this.handlePropertyClick(propertyId);
      }
    });

    // Image carousel
    document.addEventListener('click', (e) => {
      const carouselBtn = e.target.closest('.carousel-btn');
      if (carouselBtn) {
        const propertyId = parseInt(carouselBtn.dataset.propertyId);
        const direction = carouselBtn.dataset.direction;
        this.handleImageNavigation(propertyId, direction);
      }
    });
  }

  handleFilterChange(filterType) {
    this.state.filterProperties(filterType);
    this.renderProperties();
    this.updateActiveFilter();
  }

  openSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.classList.add('active');
      // Focus on destination input
      setTimeout(() => {
        const destinationInput = document.getElementById('destination-input');
        if (destinationInput) destinationInput.focus();
      }, 100);
    }
  }

  closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  handleSearch() {
    const searchData = {
      destination: document.getElementById('destination-input').value,
      checkin: document.getElementById('checkin-input').value,
      checkout: document.getElementById('checkout-input').value,
      guests: parseInt(document.getElementById('guests-input').value) || 2
    };

    this.state.searchProperties(searchData);
    this.renderProperties();
    this.closeSearchModal();

    // Show search results section
    const noResults = document.getElementById('no-results');
    if (this.state.filteredProperties.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  handleFavoriteToggle(propertyId) {
    this.state.toggleFavorite(propertyId);
    this.renderFavoriteButton(propertyId);
  }

  handlePropertyClick(propertyId) {
    const property = this.state.getProperty(propertyId);
    if (property) {
      // Show property details (simplified for this demo)
      this.showPropertyModal(property);
    }
  }

  handleImageNavigation(propertyId, direction) {
    const property = this.state.getProperty(propertyId);
    if (!property) return;

    const currentIndex = this.state.currentImageIndex[propertyId] || 0;
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : property.images.length - 1;
    } else {
      newIndex = currentIndex < property.images.length - 1 ? currentIndex + 1 : 0;
    }

    this.state.currentImageIndex[propertyId] = newIndex;
    this.renderPropertyImages(propertyId, property.images, newIndex);
  }

  updateActiveFilter() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.filter === this.state.currentFilter);
    });
  }

  renderProperties() {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const properties = this.state.filteredProperties;

    if (properties.length === 0) {
      this.showNoResults();
      return;
    }

    properties.forEach(property => {
      const propertyCard = this.createPropertyCard(property);
      grid.appendChild(propertyCard);
    });
  }

  createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.dataset.propertyId = property.id;

    const isFavorite = this.state.favorites.has(property.id);
    const currentImageIndex = this.state.currentImageIndex[property.id] || 0;

    card.innerHTML = `
            <div class="property-image">
                <img src="${property.images[currentImageIndex]}" alt="${property.title}" loading="lazy">
                <button class="carousel-btn carousel-prev" data-property-id="${property.id}" data-direction="prev">
                    ‹
                </button>
                <button class="carousel-btn carousel-next" data-property-id="${property.id}" data-direction="next">
                    ›
                </button>
                <div class="image-carousel-indicators">
                    ${property.images.map((_, index) =>
      `<div class="carousel-dot ${index === currentImageIndex ? 'active' : ''}"></div>`
    ).join('')}
                </div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-property-id="${property.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            <div class="property-info">
                <div class="property-header">
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-rating">
                        <span class="star-icon">★</span>
                        <span>${property.rating}</span>
                    </div>
                </div>
                <div class="property-location">${property.location}</div>
                <div class="property-details">${property.guests} huéspedes • ${property.type}</div>
                <div class="property-price">
                    €${property.price} <span class="price-per-night">noche</span>
                </div>
            </div>
        `;

    return card;
  }

  renderPropertyImages(propertyId, images, currentIndex) {
    const card = document.querySelector(`[data-property-id="${propertyId}"]`);
    if (!card) return;

    const img = card.querySelector('.property-image img');
    const dots = card.querySelectorAll('.carousel-dot');

    if (img) {
      img.src = images[currentIndex];
    }

    if (dots) {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  }

  renderFavoriteButton(propertyId) {
    const favoriteBtn = document.querySelector(`[data-property-id="${propertyId}"] .favorite-btn`);
    if (favoriteBtn) {
      favoriteBtn.classList.toggle('active', this.state.favorites.has(propertyId));
    }
  }

  showPropertyModal(property) {
    // Simple alert for demo - in a real app this would be a proper modal
    alert(`
${property.title}
${property.location}

${property.description}

Precio: €${property.price}/noche
Huéspedes: ${property.guests}
Valoración: ${property.rating} (${property.reviews} reseñas)

Amenidades: ${property.amenities.join(', ')}
        `);
  }

  showNoResults() {
    const grid = document.getElementById('properties-grid');
    const noResults = document.getElementById('no-results');

    if (grid) grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  }

  // Navigation methods for SPA
  navigateTo(view, data = null) {
    this.currentView = view;
    // In a real SPA, this would change the content
    console.log(`Navigating to: ${view}`, data);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.airbnbApp = new AirbnbCloneApp();
});

// Export for potential testing or external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AirbnbCloneApp, AppState, mockProperties };
}
