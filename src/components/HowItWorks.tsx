const steps = [
  {
    step: "01",
    title: "Synchronisez les Transactions",
    description:
      "Connectez votre téléphone pour synchroniser automatiquement les SMS et autres notifications Mobile Money",
  },
  {
    step: "02",
    title: "Visualisez les Analyses",
    description: "Accédez instantanément à vos données financières organisées",
  },
  {
    step: "03",
    title: "Suivez Hors Ligne",
    description:
      "Continuez à gérer vos finances et faire vos opérations mobile money sans internet",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Comment Ça Marche ?
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
