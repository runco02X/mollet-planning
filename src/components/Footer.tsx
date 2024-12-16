import { Wallet, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Wallet className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold">Mollet</span>
            </div>
            <p className="text-gray-600">
              Votre compagnon de confiance pour la gestion d'argent mobile.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gold">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Comment Ça Marche
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gold">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Conditions d'Utilisation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connexion</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gold">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gold">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-sage/20 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mollet. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
