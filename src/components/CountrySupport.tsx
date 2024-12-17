import { countries } from "../data/countries";
import { CheckCircle2, Clock } from "lucide-react";

export default function CountrySupport() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pays Disponibles
          </h2>
          <p className="text-xl text-gray-600">
            Opérateurs supportés par chaque pays
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-2 border-sage-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <h3 className="text-2xl font-semibold">{country.name}</h3>
              </div>

              <div className="space-y-3">
                {country.operators.map((operator, opIndex) => (
                  <div
                    key={opIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{operator.name}</span>
                    {operator.status === "Disponible" ? (
                      <CheckCircle2 className="w-5 h-5 text-coral" />
                    ) : (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm text-sage">Bientôt</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Plus de pays arrivent bientôt. Restez connecté 😁 !
          </p>
        </div>
      </div>
    </section>
  );
}
