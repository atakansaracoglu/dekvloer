import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vloerverwarming | Dekvloer Expert",
  description: "Vloerverwarming installatie door heel Nederland. Compleet pakket van isolatie tot dekvloer.",
};

export default function VloerverwarmingPage() {
  return (
    <ServicePage
      title="Vloerverwarming"
      subtitle="Uw woning verduurzamen en klaarmaken voor de toekomst is een slimme investering."
      intro={`Uw woning verduurzamen en klaarmaken voor de toekomst is een slimme investering. Wij maken het proces zo eenvoudig mogelijk voor u.

Duidelijk advies: We kijken naar uw gewenste eindvloer (zoals pvc of tegels) en berekenen de juiste afstand tussen de buizen, zodat de vloer functioneert als hoofdverwarming.

Stofarme installatie: Kiest u voor infrezen? Dankzij onze professionele afzuigapparatuur blijft de overlast in uw woning tot een absoluut minimum beperkt.

Heldere uitleg en nazorg: U ontvangt van ons duidelijke instructies (zoals het opstookprotocol) zodat u uw nieuwe systeem veilig in gebruik kunt nemen.`}
      features={[
        {
          title: "Compleet pakket",
          desc: "Van isolatie tot vloerverwarming en dekvloer — u heeft slechts één aanspreekpunt.",
        },
        {
          title: "Energiebesparing",
          desc: "Bespaar direct op uw gaskosten en verbeter uw energielabel.",
        },
        {
          title: "Stofarme installatie",
          desc: "Professionele afzuigapparatuur voor minimale overlast bij infrezen.",
        },
        {
          title: "Duidelijke nazorg",
          desc: "Inclusief opstookprotocol en instructies voor veilig gebruik.",
        },
      ]}
      ctaText="Klaar voor een warm en energiezuinig huis?"
      ctaSubtext="Wilt u een offerte ontvangen voor het complete pakket (isolatie, vloerverwarming én dekvloer), of wilt u weten of infrezen in uw huidige woning mogelijk is?"
      heroImages={["/photos/werk-10.jpg", "/photos/werk-14.jpg", "/photos/werk-21.jpg"]}
    />
  );
}
