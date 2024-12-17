import { Play } from "lucide-react";

export default function CTA() {
  const handlePlayStoreClick = () => {
    window.open("https://chat.whatsapp.com/Fp2VJTl2BzMCrdQrG3VU25", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold/20 via-coral/20 to-sage/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à Simplifier Vos Finances Momo ?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rejoignez plus de 150 utilisateurs qui gèrent déjà mieux leur argent
          avec Mollet.
        </p>
        <button onClick={handlePlayStoreClick} className="btn-primary">
          <Play className="w-5 h-5" />
          Rejoignez les testeurs sur Android
        </button>
      </div>
    </section>
  );
}
