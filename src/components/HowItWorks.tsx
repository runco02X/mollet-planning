const steps = [
  {
    step: "01",
    title: "Accédez à Mollet",
    description:
      "Connectez vous et synchroniser automatiquement les SMS et autres notifications Mobile Money",
  },
  {
    step: "02",
    title: "Visualisez vos dépenses mobile money",
    description: "Accédez instantanément à vos données financières organisées",
  },
  {
    step: "03",
    title: "Accédez à vos dépenses mobile money sans connexion internet",
    description:
      "Retrouvez facilement vos dépenses mobile money sans connexion internet",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Comment ça marche ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center ">
              <div className="text-coral text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
