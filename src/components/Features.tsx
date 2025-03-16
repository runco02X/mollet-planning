import {
  HandCoins,
  History,
  PieChart,
  Search,
  Wallet2,
  Wifi,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white/50" id="features" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="features-heading" className="text-4xl font-bold mb-4">Mollet c'est:</h2>
        </header>

        <div
          className="grid md:grid-cols-3 gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-6 rounded-lg hover:shadow-md transition-shadow"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                <div className="text-coral">{feature.icon}</div>
              </div>
              <h3 className="text-xl mb-2" itemProp="name">{feature.title}</h3>
              <meta itemProp="description" content={feature.title} />
              {/* <p className="text-gray-600">{feature.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  // Ces fonctionnalités sont optimisées pour le SEO avec des mots-clés pertinents
  {
    icon: <History className="w-6 h-6" aria-hidden="true" />,
    title:
      "Un résumé hebdomadaire de vos transactions mobile money et sans connexion internet",
    // description:
    //   "Un résumé hebdomadaire de vos transactions mobile money et sans connexion internet et consultez automatiquement les transactions mobile money et leurs frais depuis vos SMS et autres notifications",
  },
  {
    icon: <PieChart className="w-6 h-6" aria-hidden="true" />,
    title:
      "Un rapport mensuel de vos transactions mobile money avec les frais associés ",
    // description:
    //   "Obtenez des aperçus détaillés hebdomadaires et mensuels de vos entrées, de vos dépenses et des frais associés.",
  },
  {
    icon: <Search className="w-6 h-6" aria-hidden="true" />,
    title:
      "Des détails sur chacune de vos transactions (opérateur, entrée ou dépense, destinataire, montant, frais, etc…)",
    // description:
    //   "Recherchez des numéros ou des noms et filtrez facilement vos transactions.",
  },
  {
    icon: <Wifi className="w-6 h-6" aria-hidden="true" />,
    title: "L'ajout manuel de transactions (entrées comme dépenses)",
    // description:
    //   "Accédez à toutes les fonctionnalités même sans connexion internet. Ne manquez plus rien.",
  },
  {
    icon: <HandCoins className="w-6 h-6" aria-hidden="true" />,
    title:
      "L'accès à vos services mobile money (dépôt, retrait, forfait appel et internet, recharge de compteur électrique, etc…)",
    // description:
    //   "Faîtes vos dépôts, prenez vos forfaits, crédits et beaucoup plus directement depuis Mollet",
  },
  {
    icon: <Wallet2 className="w-6 h-6" aria-hidden="true" />,
    title:
      "La gestion et le suivi efficace de vos dépenses (Bientôt disponible)",
    // description:
    //   "Catégorisez vos dépenses facilement et retrouvez ce que vous dépensez au quotidien",
  },
];
