import { Mail, Twitter } from "lucide-react";
import MolletIcon from "../assets/mollet-icon.svg";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={MolletIcon} className="w-8 h-8" alt="Mollet Logo" />
              <span className="text-2xl font-bold text-coral">Mollet</span>
            </div>
            <p className="text-gray-600">
              Votre compagnon de confiance pour la gestion de vos finances.
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
                <a
                  href="https://elikemmedehou.notion.site/Mollet-FAQ-15e2a95032fd8020b1b7c38941d4e13c?pvs=4"
                  target="_blank"
                  className="hover:text-gold"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://elikemmedehou.notion.site/Politique-de-Confidentialit-de-l-application-mobile-Mollet-13b2a95032fd80b6a320e9ca3ccbe02b?pvs=4"
                  target="_blank"
                  className="hover:text-gold"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="https://elikemmedehou.notion.site/Politique-de-Confidentialit-de-l-application-mobile-Mollet-13b2a95032fd80b6a320e9ca3ccbe02b?pvs=4"
                  target="_blank"
                  className="hover:text-gold"
                >
                  Conditions d'Utilisation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connexion</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Mollet_app"
                target="_blank"
                className="text-gray-600 hover:text-gold"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:heymollet@gmail.com"
                target="_blank"
                className="text-gray-600 hover:text-gold"
              >
                <Mail className="w-6 h-6" />
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
