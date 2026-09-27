import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Over Ons | DekvloerExpert",
  description: "Leer meer over DekvloerExpert. Wie wij zijn, hoe wij werken en waarom klanten ons vertrouwen. Specialist in zandcementdekvloeren door heel Nederland.",
};

export default function OverOnsPage() {
  return (
    <ServicePage
      title="Over Ons"
      subtitle="DekvloerExpert — uw specialist in zandcementdekvloeren door heel Nederland."
      intro={`Bij DekvloerExpert draait alles om vakmanschap, betrouwbaarheid en kwaliteit. Met jarenlange ervaring in de vloerensector zijn wij uitgegroeid tot een specialist waar aannemers en particulieren in heel Nederland op vertrouwen.

Onze kernwaarden zijn eenvoudig: wij leveren topkwaliteit, komen afspraken na en communiceren helder. Of het nu gaat om een kleine renovatie of een grootschalig nieuwbouwproject — wij behandelen elk project met dezelfde toewijding en professionaliteit.

Wij geloven in persoonlijke service. Vanaf het eerste contact tot de oplevering denken wij met u mee. Geen verrassingen achteraf, geen onduidelijke facturen — gewoon eerlijk en transparant zaken doen.

Onze kracht zit in ons team. Dezelfde vakmensen, elk project. Geen wisselende ploegen, geen onduidelijke aanspreekpunten. U weet met wie u te maken heeft en kunt altijd bij ons terecht.`}
      features={[
        {
          title: "15+ jaar ervaring",
          desc: "Jarenlange expertise in zandcementdekvloeren en aanverwante diensten.",
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
        {
          title: "Vast team",
          desc: "Dezelfde vakmensen bij elk project. Betrouwbaar en vertrouwd.",
        },
        {
          title: "Particulier & zakelijk",
          desc: "Wij werken voor zowel particulieren als aannemers en bouwbedrijven.",
        },
      ]}
      extraSections={[
        {
          heading: "Waarom klanten voor DekvloerExpert kiezen",
          content: `Eerlijk advies — Wij adviseren altijd eerlijk. Geen onnodige extra's, geen verborgen kosten. Wat u nodig heeft, dat bieden wij aan.

Transparante prijzen — U ontvangt vooraf een heldere, vrijblijvende offerte. Wat wij afspreken, dat rekenen wij. Geen verrassingen achteraf.

Betrouwbare planning — Wij komen onze afspraken na. Planning is bij ons een belofte, geen schatting.

Schoon en netjes — Wij laten de werkplek altijd netjes achter. Respect voor uw woning of bouwplaats is vanzelfsprekend.

Persoonlijke benadering — U bent geen nummer. Wij nemen de tijd om uw wensen te begrijpen en mee te denken over de beste oplossing.`,
        },
        {
          heading: "Hoe wij werken",
          content: `Bij DekvloerExpert werken wij volgens een vaste, betrouwbare werkwijze:

1. Contact — U neemt contact met ons op via telefoon, WhatsApp of het offerteformulier.
2. Advies — Wij bespreken uw project, bekijken de situatie en adviseren de juiste opties.
3. Offerte — U ontvangt een heldere, vrijblijvende offerte op maat.
4. Planning — Na akkoord plannen wij de werkzaamheden in overleg met u.
5. Uitvoering — Ons team verzorgt het storten: vakkundig, schoon en efficiënt.
6. Oplevering — Een strakke, kaarsrechte dekvloer, legklaar voor uw eindafwerking.

Heeft u vragen of wilt u meer weten? Neem gerust contact met ons op.`,
        },
      ]}
      ctaText="Samenwerken?"
      ctaSubtext="Neem contact op voor een vrijblijvend gesprek of vraag direct een offerte aan."
      heroImages={["/photos/werk-11.jpg", "/photos/werk-13.jpg", "/photos/werk-21.jpg"]}
    />
  );
}
