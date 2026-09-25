import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Egaliseren | Dekvloer Expert",
  description: "Professioneel egaliseren voor een spiegelgladde vloer. Ideaal voor PVC, tegels of gietvloeren.",
};

export default function EgaliserenPage() {
  return (
    <ServicePage
      title="Egaliseren"
      subtitle="Tijd voor een spiegelgladde vloer?"
      intro={`Wilt u een prijsopgave per vierkante meter ontvangen voor uw project, of wilt u overleggen welke dikte egalisatie nodig is voor uw ingefreesde vloerverwarming?

Egaliseren zorgt voor een perfect vlakke ondergrond die geschikt is voor elke eindafwerking. Of u nu kiest voor PVC, tegels of een gietvloer — een professioneel geëgaliseerde vloer voorkomt oneffenheden en garandeert een strak eindresultaat.`}
      features={[
        {
          title: "Spiegelgladde ondergrond",
          desc: "Perfecte basis voor PVC, tegels of gietvloeren zonder oneffenheden.",
        },
        {
          title: "Snelle uitvoering",
          desc: "Professioneel en snel geleverd, zodat uw project niet vertraagt.",
        },
        {
          title: "Ideaal bij vloerverwarming",
          desc: "De juiste dikte egalisatie voor optimale warmteafgifte bij ingefreesde systemen.",
        },
      ]}
      ctaText="Tijd voor een spiegelgladde vloer?"
      ctaSubtext="Wilt u een prijsopgave per vierkante meter ontvangen voor uw project?"
      heroImages={["/photos/werk-01.jpg", "/photos/werk-15.jpg", "/photos/werk-18.jpg"]}
    />
  );
}
