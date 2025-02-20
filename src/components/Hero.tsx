import molletAppScreenshot from "../assets/mollet-app-screenshott.png";
import playStoreBadge from "../assets/play-store-badge.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            <span className="text-coral">Mollet</span>, toutes tes dépenses
            mobile money,{" "}
            <span className="text-gradient">partout et sans internet</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 mt-8">
            Suivez les transactions Mobile Money effectuées sur votre téléphone
            en temps réel et gérez vos finances sans effort, même hors ligne.{" "}
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
          <div className="relative z-10 lg:ml-28">
            <img
              src={molletAppScreenshot}
              alt="Interface de l'Application Mollet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
