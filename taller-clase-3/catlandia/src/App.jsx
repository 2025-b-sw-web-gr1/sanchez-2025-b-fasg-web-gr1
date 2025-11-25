import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { Heart, ArrowLeft, Star, Home, Cat, Zap } from 'lucide-react';

// --- DATOS ---
const pets = {
  obami: {
    id: "obami",
    name: "Obami",
    tagline: "La Reina de las Cajas",
    description: "Obami es una gata curiosa que cree firmemente que si cabe, se sienta. Experta en dormir bajo rayos de sol y cazar punteros láser invisibles. Su ronroneo tiene propiedades curativas.",
    image: "https://placecats.com/400/300",
    color: "bg-pink-100",
    btnColor: "bg-pink-500 hover:bg-pink-600",
    textColor: "text-pink-700",
    features: ["Juguetona", "Curiosa", "Dormilona"]
  },
  leah: {
    id: "leah",
    name: "Leah",
    tagline: "Elegancia Pura",
    description: "Leah no camina, desfila. Es una gata de gustos refinados que prefiere el paté gourmet y juzgar silenciosamente a los pájaros desde la ventana. Ideal para hogares tranquilos.",
    image: "https://placecats.com/400/350",
    color: "bg-purple-100",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    features: ["Elegante", "Cariñosa", "Tranquila"]
  },
  mayka: {
    id: "mayka",
    name: "Mayka",
    tagline: "Espíritu Aventurero",
    description: "Mayka es pura energía. Si algo se mueve, ella lo investigará. Es valiente, leal y siempre te recibirá en la puerta maullando historias sobre su día.",
    image: "https://placecats.com/400/320",
    color: "bg-teal-100",
    btnColor: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-teal-700",
    features: ["Valiente", "Aventurera", "Vocal"]
  }
};

// --- COMPONENTES GLOBALES ---

// Header Persistente: Este componente NO se recarga al navegar
const GlobalHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm z-50 flex items-center justify-between px-4 md:px-8 border-b border-slate-100 transition-all">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-slate-800 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
          <Cat className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-black text-slate-800 tracking-tight group-hover:text-rose-500 transition-colors">
          CATLANDIA
        </span>
      </Link>

      <div className="flex items-center gap-4">
        {/* Enlace de navegación condicional */}
        {!isHome && (
          <Link to="/" className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors flex items-center gap-1">
            <Home size={16} /> Inicio
          </Link>
        )}

        {/* Indicador visual de SPA */}
        <div className="hidden md:flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
          <Zap size={14} className="text-green-500 fill-green-500" />
          <span className="text-xs font-bold text-green-700 tracking-wide">SPA ACTIVA</span>
        </div>
      </div>
    </header>
  );
};

// --- COMPONENTES DE PÁGINA ---

const CatCard = ({ pet }) => (
  <Link
    to={`/mascota/${pet.id}`}
    className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2 border border-slate-100"
  >
    <div className="relative h-48 overflow-hidden">
      <div className={`absolute inset-0 ${pet.color} opacity-20 group-hover:opacity-0 transition-opacity`} />
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
        <Heart className={`w-5 h-5 ${pet.textColor} fill-current`} />
      </div>
    </div>

    <div className="p-6 text-center">
      <h3 className="text-2xl font-bold text-slate-800 mb-1 font-sans">{pet.name}</h3>
      <p className="text-slate-500 text-sm mb-4">{pet.tagline}</p>
      <div className={`inline-block px-6 py-2 rounded-full text-white font-medium text-sm transition-colors ${pet.btnColor}`}>
        Conocer más
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  return (
    // Agregamos pt-20 para compensar el header fijo
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div className="bg-white pb-12 pt-12 px-4 text-center rounded-b-[3rem] shadow-sm mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
          Nuestras Residentes
        </h1>
        <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
          Un lugar mágico donde las siestas son obligatorias. <br />
          <span className="text-rose-500 font-medium">Elige a quien quieres conocer hoy.</span>
        </p>
      </div>

      {/* Grid de Mascotas */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(pets).map((pet) => (
            <CatCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>

      <footer className="text-center text-slate-400 py-8 text-sm">
        © 2024 Catlandia SPA Demo
      </footer>
    </div>
  );
};

const PetPage = () => {
  const { id } = useParams();
  const pet = pets[id];

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 pt-20">
        <div className="text-6xl mb-4">😿</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Gatito no encontrado</h2>
        <Link
          to="/"
          className="bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-colors mt-4 flex items-center gap-2"
        >
          <Home size={20} /> Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    // Agregamos pt-20 para compensar el header fijo
    <div className={`min-h-screen ${pet.color} transition-colors duration-500 pt-20`}>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh]">

        {/* Imagen */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-orange-300 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={pet.image}
              alt={pet.name}
              className="relative w-full rounded-[2rem] shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current w-5 h-5" />
                <span className="font-bold text-slate-800">10/10</span>
              </div>
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Miau Rating</span>
            </div>
          </div>
        </div>

        {/* Información */}
        <div className="w-full md:w-1/2 max-w-lg space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-medium mb-2">
            <ArrowLeft size={16} /> Volver a la lista
          </Link>

          <div>
            <h1 className={`text-5xl md:text-7xl font-black ${pet.textColor} mb-2`}>
              {pet.name}
            </h1>
            <p className="text-xl font-medium text-slate-600 opacity-90">{pet.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {pet.features.map(feature => (
              <span key={feature} className="bg-white/60 backdrop-blur text-slate-700 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                ✨ {feature}
              </span>
            ))}
          </div>

          <p className="text-lg text-slate-700 leading-relaxed bg-white/50 p-6 rounded-2xl border border-white/20 shadow-sm">
            {pet.description}
          </p>

          <div className="pt-4 flex gap-4">
            <button className={`flex-1 ${pet.btnColor} text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200/50 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2`}>
              <Heart className="fill-current" /> Adoptar a {pet.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFoundPage = () => (
  <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 text-center pt-20">
    <div className="text-8xl mb-4 font-black text-slate-300">404</div>
    <h1 className="text-3xl font-bold text-slate-800 mb-2">¡Ups! Página no encontrada</h1>
    <Link
      to="/"
      className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-all font-medium inline-block mt-8"
    >
      Regresar a Zona Segura
    </Link>
  </div>
);

// --- COMPONENTE PRINCIPAL (App) ---
// El Header está FUERA de Routes para permanecer constante
export default function App() {
  return (
    <BrowserRouter>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mascota/:id" element={<PetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
