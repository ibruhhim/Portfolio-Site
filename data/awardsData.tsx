import { FaMedal } from "react-icons/fa";

export const awardsData = [
  {
    title: "Dean's List Scholar",
    issuer: "University of Toronto",
    year: "Oct 2024",
    description:
      "The Dean's List Scholar Award honors students who achieve exceptional academic performance and consistently high GPAs, placing them among the top of their class.",
    icon: <FaMedal className="text-4xl mb-3 mx-auto" style={{ color: '#FFD700' }} />,
    medalType: 'gold' as const
  },
  {
    title: "Ontario Scholar Award",
    issuer: "TL Kennedy Secondary School",
    year: "Jun 2023",
    description:
      "The Ontario Scholar Award is exclusively granted to high-achieving graduates who have demonstrated exceptional academic excellence during their educational journey.",
    icon: <FaMedal className="text-4xl mb-3 mx-auto" style={{ color: '#C0C0C0' }} />,
    medalType: 'silver' as const
  },
  {
    title: "Entrance Award Of Distinction",
    issuer: "University of Toronto",
    year: "May 2023",
    description:
      "Awarded to students with a passion for learning and a commitment to excellence, designed for the brightest minds entering the University of Toronto.",
    icon: <FaMedal className="text-4xl mb-3 mx-auto" style={{ color: '#CD7F32' }} />,
    medalType: 'bronze' as const
  }
];

