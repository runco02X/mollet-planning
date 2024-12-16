import { Play } from "lucide-react";
import React from "react";
import MolletIcon from "../assets/mollet-icon.svg";

export default function Header() {
  // const handlePlayStoreClick = () => {
  //   window.open(
  //     "https://play.google.com/store/apps/details?id=com.mollet.app",
  //     "_blank",
  //   );
  // };

  return (
    <header className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-sage/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={MolletIcon} className="w-8 h-8" />

          <span className="text-2xl font-bold text-coral">Mollet</span>
        </div>
        <a href="https://chat.whatsapp.com/Fp2VJTl2BzMCrdQrG3VU25">
          <button className="btn-primary">
            <Play className="w-5 h-5" />
            Bientôt sur le PlayStore
          </button>
        </a>
      </nav>
    </header>
  );
}
