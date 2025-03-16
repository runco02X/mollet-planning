import molletAppScreenshot from "../assets/mollet-app-screenshott.png";
import playStoreBadge from "../assets/play-store-badge.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-20" id="hero" aria-labelledby="hero-heading">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content">
          <h1 id="hero-heading" className="text-5xl font-bold leading-tight mb-6">
            <span className="text-coral">Mollet</span>, retrouvez vos dépenses
            mobile money <span className="text-gradient">sans tracas</span>
          </h1>
          <ul className="text-xl text-gray-600 mb-8 mt-8 list-none">
            <li className="mb-2">
              <span aria-hidden="true">• </span>Trackez vos transactions mobile money en temps réel sans connexion
              internet.
            </li>
            <li>
              <span aria-hidden="true">• </span>Gérez vos finances mobile money et en dehors.
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.thenemlab.mollet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger Mollet sur le Google Play Store"
              className="download-button"
              data-tracking="download-play-store"
            >
              <img
                src={playStoreBadge}
                alt="Télécharger sur le Play Store"
                className="w-72"
                width="288"
                height="85"
                loading="eager"
              />
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:block" aria-hidden="true">
          <img
            src={molletAppScreenshot}
            alt="Interface de l'Application Mollet montrant le suivi des transactions"
            className="w-max"
            width="360"
            height="720"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
