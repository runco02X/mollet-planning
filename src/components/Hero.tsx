import React from 'react';
import { Play, ChevronRight, PieChart } from 'lucide-react';

export default function Hero() {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.mollet.app', '_blank');
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Votre Gestionnaire d'Argent Mobile,{' '}
            <span className="text-gradient">À Tout Moment, Partout</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simplifiez vos transactions Momo et gérez vos finances hors ligne facilement.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={handlePlayStoreClick} className="btn-primary">
              Commencer Gratuitement <Play className="w-5 h-5" />
            </button>
            <button className="btn-secondary">
              En Savoir Plus <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <img
              src="https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=800&auto=format&fit=crop&q=60"
              alt="Interface de l'Application Mollet"
              className="rounded-3xl shadow-2xl border-8 border-white"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="bg-gold/10 p-2 rounded-full">
                <PieChart className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Utilisateurs Actifs</p>
                <p className="text-lg font-bold">100+</p>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-gold/30 via-coral/30 to-sage/30 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}