import playStoreBadge from "../assets/play-store-badge.png";

export default function CTA() {
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
        <div className="flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.thenemlab.mollet"
            target="_blank"
          >
            <img
              src={playStoreBadge}
              alt="Télécharger sur le Play Store"
              className="w-72"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
