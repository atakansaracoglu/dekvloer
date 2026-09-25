import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Zandcement Dekvloeren | Zandcement Expert",
  description: "Specialist in zandcement dekvloeren door heel Nederland. Sneldroog opties, verharders, vezelversterking en meer.",
};

export default function ZandcementPage() {
  return (
    <ServicePage
      title="Zandcement Dekvloeren"
      subtitle="De perfecte basis voor elk project. Een strakke, duurzame en kaarsrechte vloer begint bij de basis."
      intro={`Een strakke, duurzame en kaarsrechte vloer begint bij de basis. Of het nu gaat om een complete nieuwbouwwoning, een grootschalig utiliteitsproject of een kleinschalige renovatie: onze zandcement dekvloeren vormen het perfecte fundament voor elke eindafwerking, zoals tegels, pvc, gietvloeren of parket.

Met jarenlange ervaring leveren wij topkwaliteit vloeren die voldoen aan de hoogste normen. Snel, vakkundig en met oog voor detail.`}
      features={[
        {
          title: "Optimale warmtegeleiding",
          desc: "Perfect te combineren met vloerverwarming voor een maximaal rendement en een comfortabel binnenklimaat.",
        },
        {
          title: "Hoge druk- en buigtreksterkte",
          desc: "Wij stemmen de mortelsamenstelling exact af op de gebruiksintensiteit van de ruimte.",
        },
        {
          title: "Kaarsrecht en legklaar",
          desc: "Onze vloeren worden uiterst nauwkeurig vlak en waterpas afgewerkt, zodat de vloerenlegger daarna direct aan de slag kan.",
        },
        {
          title: "Droogtijdversneller",
          desc: "Normaal droogt een cementvloer circa 1 cm per week. Met onze droogtijdversneller is de vloer al na enkele dagen legklaar.",
        },
        {
          title: "Verharder",
          desc: "Verhoogt de mechanische eigenschappen en druksterkte. Ideaal voor garages, bedrijfshallen of drukbezochte winkelpanden.",
        },
        {
          title: "Krimpvezels (Vezelwapening)",
          desc: "Speciale kunststof krimpvezels creëren een microscopisch netwerk van interne wapening. Dit minimaliseert de kans op krimpscheuren.",
        },
      ]}
      extraSections={[
        {
          heading: "🛠️ Maatwerk en extra opties voor uw dekvloer",
          content: `Elk bouwproject stelt andere eisen aan een vloer. Om te zorgen dat de dekvloer perfect aansluit bij de gewenste droogtijd, vloerdikte en belasting, bieden wij verschillende hoogwaardige opties en toevoegingen aan die u direct bij ons kunt meebestellen:

Droogtijdversneller: Normaal gesproken droogt een cementvloer circa 1 centimeter per week. Heeft uw project haast? Met onze droogtijdversneller verkorten we dit proces aanzienlijk, waardoor de vloer al na enkele dagen legklaar is voor de eindafwerking.

Verharder: Deze toevoeging verhoogt de mechanische eigenschappen en de druksterkte van de vloer. Ideaal voor ruimtes die intensief belast gaan worden, zoals garages, bedrijfshallen of drukbezochte winkelpanden.

Krimpvezels (Vezelwapening): Door speciale kunststof krimpvezels door de specie te mengen, creëren we een microscopisch netwerk van interne wapening. Dit minimaliseert de kans op krimpscheuren tijdens het droogproces aanzienlijk.

Duremit (Premium High-Strength compound): Onze premium hulpstof voor extreem zwaar belaste vloeren of situaties waarin een dunnere dekvloer vereist is. Het vermindert het benodigde aanmaakwater, zorgt voor een extreem hoge eindsterkte en reduceert krimp tot een minimum.

Krimpnetten (Staalwapening): Bij zwevende vloeren of vloeren met vloerverwarming plaatsen we traditionele stalen krimpnetten. Deze wapening vangt de spanningen op die ontstaan door het krimpen en uitzetten van de vloer bij temperatuurverschillen.

Vlevopol (Hecht- en toeslagmiddel): Een multifunctioneel vloeibaar hulpmiddel dat we gebruiken als krachtige hechtprimer op de ondervloer én als toeslagstof in de mortel zelf. Het verhoogt de elasticiteit, versterkt de buigtreksterkte en zorgt voor een superieure hechting.`,
        },
        {
          heading: "Randisolatie & Dilatatievoegen: Scheurvrij en constructief veilig",
          content: `Een zandcementvloer leeft en werkt. Onder invloed van temperatuurverschillen – zéker in combinatie met vloerverwarming – zal de dekvloer minimaal uitzetten en krimpen. Om spanningen, scheurvorming en omhoogdrukkende vloeren te voorkomen, besteden wij de grootste zorg aan de randafwerking en de opbouw van de vloer:

Hoogwaardige randisolatie: Wij brengen vóór het storten rondom alle muren, kolommen en doorvoeren een flexibele randisolatie (schuimband) aan. Dit zorgt ervoor dat de dekvloer volledig vrij ligt van de dragende constructie ('zwevend'). Hierdoor krijgt de vloer de ruimte om te werken en worden contactgeluiden naar omliggende ruimtes effectief tegengegaan.

Vakkundige dilatatievoegen (Krimpvoegen): Bij grote oppervlaktes, bij overgangen naar andere kamers (zoals deuropeningen) of bij verschillende verwarmingszones brengen wij strategische dilatatievoegen aan. Deze voegen breken de spanning in de vloer op en vangen de werking gecontroleerd op. Hierdoor blijft uw dekvloer – en de uiteindelijke eindvloer – gegarandeerd strak en scheurvrij.`,
        },
        {
          heading: "🏗️ Voor aannemers: Betrouwbaar en volgens planning",
          content: `In de bouw is tijd geld. Wij begrijpen de dynamiek op de bouwplaats als geen ander.

Flexibele planning: Wij schakelen snel en komen afspraken na.
Kwaliteit conform normen: Vloeren die exact voldoen aan de gestelde sterkteklassen en vlakheidseisen.
Schoon en efficiënt: Wij laten de werkplek netjes achter en werken met modern materieel.`,
        },
        {
          heading: "🏡 Voor particulieren: Zorgeloos en vakkundig",
          content: `Het verbouwen of bouwen van je eigen woning is al spannend genoeg. Wij nemen de zorg voor je vloer volledig uit handen.

Duidelijk advies vooraf: We kijken naar jouw specifieke woonsituatie en adviseren de juiste opties (zoals vezels of versnellers).
Geen verrassingen achteraf: Heldere communicatie en transparante, eerlijke prijzen.
Persoonlijke service: Vanaf het eerste contact tot het strakke eindresultaat denken we met je mee.`,
        },
      ]}
      ctaText="Klaar voor een strakke dekvloer?"
      ctaSubtext="Vraag vandaag nog een vrijblijvende offerte aan. Wij reageren binnen 24 uur."
      heroImages={["/photos/werk-12.jpg", "/photos/werk-02.jpg", "/photos/werk-13.jpg"]}
    />
  );
}
