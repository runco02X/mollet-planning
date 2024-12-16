import { Wallet, Play } from "lucide-react";

export default function Header() {
  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.mollet.app",
      "_blank",
    );
  };

  return (
    <header className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-sage/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wallet className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold">Mollet</span>
        </div>
        <button onClick={handlePlayStoreClick} className="btn-primary">
          <Play className="w-5 h-5" />
          Télécharger sur PlayStore
        </button>
      </nav>
    </header>
  );
}
