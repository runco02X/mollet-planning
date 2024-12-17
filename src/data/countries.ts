export interface Operator {
  name: string;
  status: "Disponible" | "Bientôt";
  logo?: string;
}

export interface Country {
  name: string;
  flag: string;
  operators: Operator[];
}

export const countries: Country[] = [
  {
    name: "Benin",
    flag: "🇧🇯",
    operators: [
      {
        name: "MTN Benin",
        status: "Disponible",
      },
      {
        name: "Moov Benin",
        status: "Disponible",
      },
      {
        name: "Celtis",
        status: "Disponible",
      },
    ],
  },
  {
    name: "Togo",
    flag: "🇹🇬",
    operators: [
      {
        name: "Moov Togo",
        status: "Disponible",
      },
      {
        name: "Mixx by Yass",
        status: "Bientôt",
      },
    ],
  },
  {
    name: "Côte d'Ivoire",
    flag: "🇨🇮",
    operators: [
      {
        name: "Wave",
        status: "Bientôt",
      },
      {
        name: "Orange Money",
        status: "Bientôt",
      },
      {
        name: "Moov CI",
        status: "Bientôt",
      },
    ],
  },
];
