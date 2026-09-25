import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Beton & Fundering | Dekvloer Expert",
  description: "Professioneel beton- en funderingswerk. Van strookfundering tot gewapende betonvloeren door heel Nederland.",
};

export default function BetonPage() {
  return (
    <ServicePage
      title="Beton & Fundering"
      subtitle="De onverwoestbare basis voor elk bouwwerk."
      intro={`Elke stevige constructie begint met een solide basis. Of het nu gaat om een aanbouw, een complete nieuwbouwwoning, een loods of een industrieel project: een professioneel gestorte betonconstructie garandeert de veiligheid en stabiliteit van het hele gebouw.

Wij verzorgen het complete traject van beton- en funderingswerken, van het graaf- en vlechtwerk tot het storten en professioneel afwerken van de betonvloer. Met oog voor detail, de juiste betonkwaliteit en vakkundig constructiewerk leggen wij een fundament waar u letterlijk en figuurlijk op kunt bouwen.`}
      features={[
        {
          title: "Berekening en advies",
          desc: "Wij werken nauwkeurig volgens de constructieve tekeningen en zorgen dat de betonsterkte exact is afgestemd op de belasting.",
        },
        {
          title: "Complete ontzorging",
          desc: "Van grondwerk en bekisting tot bewapening en betonstort; u heeft er geen omkijken naar.",
        },
        {
          title: "Hoogwaardige materialen",
          desc: "Wij werken uitsluitend met gecertificeerd beton en duurzaam wapeningsstaal voor een gegarandeerde levensduur.",
        },
      ]}
      extraSections={[
        {
          heading: "🛠️ Maatwerk funderingen en betonconstructies",
          content: `Geen project is hetzelfde. Afhankelijk van de bodemgesteldheid en het type bouwwerk realiseren wij verschillende soorten funderingen en betonvloeren direct op maat:

Fundering op staal (Strookfundering): Wanneer de draagkrachtige grondlaag zich dicht bij het oppervlak bevindt, storten we een traditionele stroken- of poerenfundering. Een snelle en uiterst efficiënte methode voor lichtere constructies en uitbouwen.

Fundering op palen (Inclusief funderingsbalken): Moet er op heipalen gebouwd worden? Wij verzorgen het vlechtwerk van de wapening en het storten van de zware betonbalken (ringbalken) die de krachten van het gebouw perfect overdragen op de palen.

Gewapende betonvloeren & Kelders: Wij storten constructieve betonvloeren op maat, al dan niet voorzien van een vloeistofdichte afwerking. Ook voor het storten van waterdichte betonconstructies onder het grondniveau (zoals kelders of smeerputten) bent u bij ons aan het juiste adres.

Monoliet afgewerkte betonvloeren (Woonbeton / Vlinderen): Wilt u de betonvloer direct als eindvloer gebruiken in een garage, bedrijfshal of moderne woning? Wij kunnen de vloer tijdens het drogen machinaal vlinderen (monoliet afwerken) voor een spiegelglad, slijtvast en strak resultaat.`,
        },
        {
          heading: "🏗️ Voor aannemers: Strakke maatvoering en snelle doorloop",
          content: `Als aannemer zoekt u een betonpartner die tekeningen blindelings snapt en strak binnen de planning acteert.

Millimeterwerk: Wij garanderen een exacte maatvoering van de bekisting en de sparingen voor leidingwerk.
Flexibiliteit op de bouw: Wij stemmen de betonmixers en pompen naadloos af op de planning op de bouwplaats om stilstand te voorkomen.
Kwaliteitsborging: Documentatie en betonkwaliteit die volledig voldoen aan het Bouwbesluit en de geldende normen.`,
        },
        {
          heading: "🏡 Voor particulieren: Een veilige basis voor uw droomproject",
          content: `Een uitbouw of een nieuw tuinhuis valt of staat met een goede fundering om verzakkingen en scheuren in de toekomst te voorkomen.

Duidelijk stappenplan: We leggen helder uit hoe we de fundering gaan opbouwen en storten.
Bescherming van uw tuin en woning: We werken netjes en zorgen dat de overlast voor u en uw buren tot een minimum beperkt blijft.
Duurzaam resultaat: Een fundering die vochtbestendig is en decennialang meegaat zonder omkijken.`,
        },
      ]}
      ctaText="Bouw plannen? Zorg voor de beste start!"
      ctaSubtext="Heeft u al constructietekeningen klaarliggen en wilt u een scherpe offerte ontvangen voor het betonwerk?"
      heroImages={["/photos/werk-04.jpg", "/photos/werk-16.jpg", "/photos/werk-15.jpg"]}
    />
  );
}
