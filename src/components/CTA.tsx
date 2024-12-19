export default function CTA() {
  const handlePlayStoreClick = () => {
    window.open("https://chat.whatsapp.com/Fp2VJTl2BzMCrdQrG3VU25", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold/20 via-coral/20 to-sage/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à simplifier vos finances mobile money ?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Rejoins plus de 150 utilisateurs qui gèrent déjà mieux leur argent
          avec Mollet.
        </p>
        <button onClick={handlePlayStoreClick} className="btn-primary">
          Rejoins les testeurs sur Android
        </button>
      </div>
    </section>
  );
}
