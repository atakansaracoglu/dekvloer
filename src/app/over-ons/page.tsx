import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Over Ons | Zandcement Expert",
  description: "Leer meer over Zandcement Expert. Specialist in zandcement dekvloeren door heel Nederland.",
};

export default function OverOnsPage() {
  return (
    <ServicePage
      title="Over Ons"
      subtitle="Uw specialist in zandcement dekvloeren door heel Nederland."
      intro={`Bij Zandcement Expert draait alles om vakmanschap, betrouwbaarheid en kwaliteit. Met jarenlange ervaring in de vloerensector zijn wij uitgegroeid tot een specialist waar aannemers en particulieren in heel Nederland op vertrouwen.

Onze kernwaarden zijn eenvoudig: wij leveren topkwaliteit, komen afspraken na en communiceren helder. Of het nu gaat om een kleine renovatie of een grootschalig nieuwbouwproject — wij behandelen elk project met dezelfde toewijding en professionaliteit.

Wij geloven in persoonlijke service. Vanaf het eerste contact tot de oplevering denken wij met u mee. Geen verrassingen achteraf, geen onduidelijke facturen — gewoon eerlijk en transparant zaken doen.`}
      features={[
        {
          title: "15+ jaar ervaring",
          desc: "Jarenlange expertise in zandcement dekvloeren en aanverwante diensten.",
        },
        {
          title: "2500+ projecten",
          desc: "Van kleine renovaties tot grootschalige nieuwbouwprojecten door heel Nederland.",
        },
        {
          title: "100% tevredenheid",
          desc: "Onze klanten waarderen onze betrouwbaarheid, vakmanschap en communicatie.",
        },
        {
          title: "Landelijke dekking",
          desc: "Wij werken door heel Nederland en zijn altijd dichtbij.",
        },
      ]}
      ctaText="Samenwerken?"
      ctaSubtext="Neem contact op voor een vrijblijvend gesprek of vraag direct een offerte aan."
      heroImages={["/photos/werk-11.jpg", "/photos/werk-13.jpg", "/photos/werk-21.jpg"]}
    />
  );
}
