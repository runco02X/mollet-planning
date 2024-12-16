import { Play } from "lucide-react";

export default function CTA() {
  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.mollet.app",
      "_blank",
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold/20 via-coral/20 to-sage/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à Simplifier Vos Finances Momo ?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rejoignez plus de 100 utilisateurs qui gèrent déjà mieux leur argent
          mobile avec Mollet.
        </p>
        <button onClick={handlePlayStoreClick} className="btn-primary">
          <Play className="w-5 h-5" />
          Télécharger sur PlayStore
        </button>
      </div>
    </section>
  );
}
