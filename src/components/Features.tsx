import {
  HandCoins,
  History,
  PieChart,
  Search,
  Wallet2,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: <History className="w-6 h-6" />,
    title: "Historique des Transactions",
    description:
      "Synchronisez et consultez automatiquement les transactions mobile money  et leurs frais depuis vos SMS et autres notifications.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Rapports détaillés",
    description:
      "Obtenez des aperçus détaillés hebdomadaires et mensuels de vos entrées, de vos dépenses et des frais associés.",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Accès Hors Ligne",
    description:
      "Accédez à toutes les fonctionnalités même sans connexion internet. Ne manquez plus rien.",
  },
  {
    icon: <HandCoins className="w-6 h-6" />,
    title: "Effectuez vos opérations mobile money (Bientôt)",
    description:
      "Faîtes vos dépôts, prenez vos forfaits, crédits et beaucoup plus directement depuis Mollet",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Recherche Intelligente (Bientôt)",
    description:
      "Recherchez des numéros ou des noms et filtrez facilement vos transactions.",
  },
  {
    icon: <Wallet2 className="w-6 h-6" />,
    title: "Tracking de vos budgets (Bientôt)",
    description:
      "Catégorisez vos dépenses facilement et retrouvez ce que vous dépensez au quotidien",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white/50" id="#features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Gérez simplement vos finances mobile money
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mollet vous offre tout ce dont vous avez besoin pour suivre vos
            transactions Mobile Money en toute simplicité et efficacité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <div className="text-coral">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
