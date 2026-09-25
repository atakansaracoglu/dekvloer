import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Anhydrietvloeren | Dekvloer Expert",
  description: "Anhydrietvloeren: zelfnivellerend, kaarsrecht en ideaal in combinatie met vloerverwarming.",
};

export default function AnhydrietPage() {
  return (
    <ServicePage
      title="Anhydrietvloeren"
      subtitle="Zelfnivellerend, kaarsrecht en ideaal in combinatie met vloerverwarming."
      intro={`Anhydrietvloeren bieden een kaarsrechte basis dankzij hun zelfnivellerende eigenschappen. In combinatie met vloerverwarming levert anhydriet een superieure warmteafgifte, wat resulteert in een comfortabel en energiezuinig binnenklimaat.`}
      features={[
        {
          title: "De beste match met vloerverwarming",
          desc: "Geniet sneller van een warm huis en bespaar op uw energiekosten dankzij de superieure warmteafgifte.",
        },
        {
          title: "Geen scheuren in uw designvloer",
          desc: "Dankzij de stabiele en krimpvrije eigenschappen van anhydriet ligt uw eindvloer er jarenlang strak bij.",
        },
        {
          title: "Comfort en een strak resultaat",
          desc: "Kiest u voor een moderne pvc-vloer, een gietvloer of een strakke tegel? Dan wilt u geen oneffenheden zien.",
        },
        {
          title: "Deskundig advies",
          desc: "Wij leggen u precies uit waar u op moet letten bij het droogstoken en de afwerking van uw nieuwe vloer.",
        },
      ]}
      ctaText="Klaar voor een kaarsrechte basis?"
      ctaSubtext="Wilt u weten of een anhydrietvloer de beste keuze is voor uw project, of wilt u direct een scherpe, vrijblijvende prijsopgave ontvangen?"
      heroImages={["/photos/werk-01.jpg", "/photos/werk-19.jpg", "/photos/werk-09.jpg"]}
    />
  );
}
