import { testimonials } from "../data/testimonials";
import { MessageSquare } from "lucide-react";
import TestimonialCard from "./socials/TestimonialCard";

export default function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8 text-gold" />
            <h2 className="text-4xl font-bold text-gray-900">
              Ce que disent nos utilisateurs
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Découvrez les expériences de nos utilisateurs avec Mollet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
