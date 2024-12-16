import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">À Propos de Mollet</h2>
          <p className="text-xl text-gray-600 mb-8">
            Créé par Elikem Medehou, Mollet est né d'une vision visant à simplifier la gestion 
            de l'argent mobile pour tous au Bénin. Fort d'une expérience approfondie dans le 
            développement d'applications mobiles, nous nous engageons à rendre le suivi financier 
            accessible et efficace.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="btn-secondary">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="#" className="btn-secondary">
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
            <a href="#" className="btn-secondary">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}