import { Play, ChevronRight } from "lucide-react";
import molletAppScreenshot from "../assets/mollet-app-screenshot-removebg.png";

export default function Hero() {
  const handlePlayStoreClick = () => {
    window.open("https://chat.whatsapp.com/Fp2VJTl2BzMCrdQrG3VU25", "_blank");
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Votre Assistant financier Mobile Money,{" "}
            <span className="text-gradient">
              À Tout Moment, Partout et Même Sans Connexion
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simplifiez vos transactions Momo et gérez vos finances hors ligne
            facilement.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={handlePlayStoreClick}>
              Disponible bientôt sur Android <Play className="w-5 h-5" />
            </button>
            <a href="#features">
              <button className="btn-secondary">
                En Savoir Plus <ChevronRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 ml-28">
            <img
              src={molletAppScreenshot}
              alt="Interface de l'Application Mollet"
              className="rounded-3xl"
            />
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-gold/30 via-coral/30 to-sage/30 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
