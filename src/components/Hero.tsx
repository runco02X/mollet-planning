import molletAppScreenshot from "../assets/mollet-app-screenshot.png";

export default function Hero() {
  const handlePlayStoreClick = () => {
    window.open("https://chat.whatsapp.com/Fp2VJTl2BzMCrdQrG3VU25", "_blank");
  };

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            <span className="text-coral"> Mollet </span>, ton assistant
            financier mobile money,{" "}
            <span className="text-gradient">à tout moment et partout</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Suivez vos transactions Mobile Money en temps réel et gérez vos
            finances sans effort, même hors ligne.{" "}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={handlePlayStoreClick}>
              Rejoins les testeurs sur Android
            </button>
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
