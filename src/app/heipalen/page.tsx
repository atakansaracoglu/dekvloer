import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Heipalen | Dekvloer Expert",
  description: "Heipalen en funderingspalen. Compact materieel, buurtvriendelijke technieken door heel Nederland.",
};

export default function HeipalenPage() {
  return (
    <ServicePage
      title="Heipalen"
      subtitle="Een ijzersterke basis voor uw bouwproject, met minimale overlast."
      intro={`Heipalen vormen de basis wanneer de grond niet sterk genoeg is om direct op te bouwen. Wij verzorgen het complete traject van funderingspalen met compact en modern materieel.

Toegankelijk voor krappe ruimtes: Onze compacte machines passen door een normale poort of deur, ideaal voor de achtertuin.

Buurtvriendelijke technieken: Wij adviseren de techniek met de minste geluids- en trillingsoverlast voor de omgeving.

Duidelijke uitleg: We leggen van tevoren precies uit wat we gaan doen en wat je kunt verwachten.`}
      features={[
        {
          title: "Compact materieel",
          desc: "Onze machines passen door een normale poort of deur, ideaal voor krappe ruimtes en achtertuinen.",
        },
        {
          title: "Buurtvriendelijk",
          desc: "Wij adviseren de techniek met de minste geluids- en trillingsoverlast voor de omgeving.",
        },
        {
          title: "Duidelijke uitleg",
          desc: "We leggen van tevoren precies uit wat we gaan doen en wat u kunt verwachten.",
        },
      ]}
      ctaText="Start uw project met een ijzersterke basis"
      ctaSubtext="Heeft u al een sonderingsrapport of constructieberekening en wilt u direct een scherpe offerte? Of wilt u advies over welke paalsoort het meest geschikt is?"
      heroImages={["/photos/werk-04.jpg", "/photos/werk-02.jpg", "/photos/werk-09.jpg"]}
    />
  );
}
