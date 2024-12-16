import { Twitter } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">À Propos de Mollet</h2>
          <p className="text-xl text-gray-600 mb-8">
            Mollet est né d'une vision visant à simplifier la gestion de
            l'argent mobile pour tous en Afrique.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/Mollet_app"
              target="_blank"
              className="btn-secondary"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
