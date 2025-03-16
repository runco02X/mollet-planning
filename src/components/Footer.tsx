import { Mail, Twitter } from "lucide-react";
import MolletIcon from "../assets/mollet-icon.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page</h2>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={MolletIcon} 
                className="w-8 h-8" 
                alt="Mollet Logo" 
                width="32" 
                height="32" 
                loading="lazy" 
              />
              <span className="text-2xl font-bold text-coral">Mollet</span>
            </div>
            <p className="text-gray-600">
              Votre compagnon de confiance pour la gestion de vos finances mobile money.
            </p>
          </div>
          <nav aria-label="Produit">
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
                  href="#features" 
                  className="hover:text-gold transition-colors"
                  aria-label="Voir les fonctionnalités de Mollet"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a 
                  href="#howItWorks" 
                  className="hover:text-gold transition-colors"
                  aria-label="Découvrir comment fonctionne Mollet"
                >
                  Comment Ça Marche
                </a>
              </li>
              <li>
                <a
                  href="https://elikemmedehou.notion.site/Mollet-FAQ-15e2a95032fd8020b1b7c38941d4e13c?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Consulter la Foire Aux Questions"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Informations légales">
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://elikemmedehou.notion.site/Mollet-Politique-de-Confidentialit-de-l-application-mobile-13b2a95032fd80b6a320e9ca3ccbe02b?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Lire notre politique de confidentialité"
                >
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="https://elikemmedehou.notion.site/Mollet-Conditions-d-Utilisation-1612a95032fd8041b9b6d3fa9b0eb1c2?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Lire nos conditions d'utilisation"
                >
                  Conditions d'Utilisation
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="font-semibold mb-4">Connexion</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Mollet_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors"
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:heymollet@gmail.com"
                className="text-gray-600 hover:text-gold transition-colors"
                aria-label="Contactez-nous par email"
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div 
          className="border-t border-sage/20 mt-12 pt-8 text-center text-gray-600"
          itemScope 
          itemType="https://schema.org/Organization"
        >
          <meta itemProp="name" content="Mollet" />
          <meta itemProp="url" content="https://www.mollet.live" />
          <meta itemProp="logo" content="https://www.mollet.live/icon.svg" />
          <p>&copy; {currentYear} Mollet. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
