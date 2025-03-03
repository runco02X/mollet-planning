import molletAppScreenshot from "../assets/mollet-app-screenshott.png";
import playStoreBadge from "../assets/play-store-badge.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            <span className="text-coral">Mollet</span>, retrouvez vos dépenses
            mobile money <span className="text-gradient">sans tracas</span>
          </h1>
          <p className="text-xl text-gray-600 mobilemb-8 mt-8">
            • Trackez vos transactions mobile money en temps réel sans connexion
            internet.
            <br />• Gérez vos finances mobile money et en dehors.{" "}
          </p>
          <div className="flex flex-wrap gap-4">
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
        <div className="relative flex items-center justify-center lg:block">
          <img
            src={molletAppScreenshot}
            alt="Interface de l'Application Mollet"
            className="w-max"
          />
        </div>
      </div>
    </section>
  );
}
