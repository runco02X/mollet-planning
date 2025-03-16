import { PlayIcon } from "lucide-react";
import MolletIcon from "../assets/mollet-icon.svg";

export default function Header() {
  return (
    <header className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-sage/20" role="banner">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center space-x-2"
          aria-label="Mollet - Accueil"
        >
          <img 
            src={MolletIcon} 
            className="w-8 h-8" 
            alt="Mollet Logo" 
            width="32" 
            height="32" 
            loading="eager" 
          />
          <span className="text-2xl font-bold text-coral">Mollet</span>
        </a>
        
        <nav aria-label="Navigation principale">
          <a
            href="https://play.google.com/store/apps/details?id=com.thenemlab.mollet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-coral text-white hover:bg-coral/90 transition-colors"
            aria-label="Télécharger Mollet sur Google Play"
            data-tracking="download-header"
          >
            <PlayIcon className="w-5 h-5" aria-hidden="true" />
            <span className="hidden md:inline">Télécharger sur Android</span>
            <span className="md:hidden">Télécharger</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
