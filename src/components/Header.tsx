import { PlayIcon } from "lucide-react";
import MolletIcon from "../assets/mollet-icon.svg";

export default function Header() {
  return (
    <header className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-sage/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={MolletIcon} className="w-8 h-8" alt="Mollet Logo" />
          <span className="text-2xl font-bold text-coral">Mollet</span>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.thenemlab.mollet"
          target="_blank"
        >
          <button className="btn-primary">
            <PlayIcon></PlayIcon>
            <span className="hidden md:inline">Télécharger sur Android</span>
            <span className="md:hidden">Télécharger</span>
          </button>
        </a>
      </nav>
    </header>
  );
}
