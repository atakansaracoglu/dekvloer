import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Schuimbeton | Dekvloer Expert",
  description: "Schuimbeton voor vloerrenovatie, isolatie en ophoging. Lichtgewicht en efficiënt.",
};

export default function SchuimbetonPage() {
  return (
    <ServicePage
      title="Schuimbeton"
      subtitle="Lichtgewicht ophoging, isolatie en de ideale basis voor uw vloerrenovatie."
      intro={`Schuimbeton is de ideale oplossing voor vloerrenovaties en situaties waar een lichtgewicht ophoging nodig is. Het biedt uitstekende isolerende eigenschappen en vormt een perfecte basis voor vloerverwarming en dekvloeren.

Wij verzorgen het complete traject: van het storten van schuimbeton tot de vloerverwarming en de dekvloer. U heeft slechts één aanspreekpunt.`}
      features={[
        {
          title: "Geen vocht en tocht meer",
          desc: "Merk direct het verschil in comfort en reken af met muffe geuren in huis.",
        },
        {
          title: "Duurzame investering",
          desc: "Uw woning stijgt in waarde, krijgt een beter energielabel en u bespaart direct op uw gaskosten.",
        },
        {
          title: "Alles onder één dak",
          desc: "Van het storten van schuimbeton tot de vloerverwarming en de dekvloer; u heeft slechts één aanspreekpunt.",
        },
      ]}
      ctaText="Transformeer uw vloer met schuimbeton"
      ctaSubtext="Wilt u weten hoeveel schuimbeton u nodig heeft voor uw vloerrenovatie, of wilt u direct een heldere prijsopgave ontvangen?"
      heroImages={["/photos/werk-17.jpg", "/photos/werk-20.jpg", "/photos/werk-16.jpg"]}
    />
  );
}
