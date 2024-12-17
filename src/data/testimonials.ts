export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Kossi Abalo",
    role: "Business Owner",
    comment:
      "Mollet m'aide à suivre toutes mes transactions MTN Money. C'est vraiment pratique pour mon business!",
  },
  {
    id: "2",
    name: "Afiwa Mensah",
    role: "Étudiante",
    comment:
      "L'accès hors ligne est un vrai plus. Je peux vérifier mes transactions même sans internet.",
  },
  {
    id: "3",
    name: "Emmanuel Koffi",
    role: "Commerçant",
    comment:
      "Les résumés hebdomadaires m'aident à mieux gérer mon argent. Application très utile!",
  },
];
