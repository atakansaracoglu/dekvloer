import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Zandcementdekvloer laten leggen | DekvloerExpert",
  description:
    "Alles over zandcementdekvloeren: prijzen per m², diktes, droogtijdversneller, vezelversterking, krimpnetten en meer. DekvloerExpert is uw specialist door heel Nederland.",
};

export default function ZandcementdekvloerPage() {
  return (
    <ServicePage
      title="Zandcementdekvloer laten leggen"
      subtitle="DekvloerExpert is uw specialist in zandcementdekvloeren. Voor particulieren en aannemers, door heel Nederland."
      intro={`Een strakke, duurzame en kaarsrechte vloer begint bij de basis. Of het nu gaat om een complete nieuwbouwwoning, een grootschalig utiliteitsproject of een kleinschalige renovatie: onze zandcementdekvloeren vormen het perfecte fundament voor elke eindafwerking, zoals tegels, pvc, gietvloeren of parket.

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
          title: "Vezelversterking",
          desc: "Speciale kunststof krimpvezels creëren een microscopisch netwerk van interne wapening. Dit minimaliseert de kans op krimpscheuren.",
        },
      ]}
      extraSections={[
        {
          heading: "Wat is een zandcementdekvloer?",
          content: `Een zandcementdekvloer (ook wel zandcementvloer of cementdekvloer genoemd) is een mengsel van zand, cement en water dat als afwerkvloer over de ruwe ondervloer of isolatie wordt gestort. Deze dekvloer vormt een vlakke, stevige en egale ondergrond waarop vrijwel elke eindafwerking kan worden aangebracht.

De zandcementdekvloer is al decennialang de meest gebruikte dekvloer in Nederland en België. Dit is niet zonder reden: het materiaal is betrouwbaar, betaalbaar en veelzijdig. Of u nu kiest voor tegels, pvc, laminaat, parket of een gietvloer — een goed gestorte zandcementvloer is altijd de juiste basis.`,
        },
        {
          heading: "Wanneer kiest u voor een zandcementvloer?",
          content: `Een zandcementdekvloer is geschikt voor vrijwel elke situatie:

• Nieuwbouw — de standaard keuze voor woningen, appartementen en utiliteitsgebouwen
• Renovatie — perfect voor het egaliseren en opnieuw vlak maken van bestaande vloeren
• Vloerverwarming — uitstekende warmtegeleiding voor vloerverwarmingssystemen
• Utiliteitsbouw — kantoren, winkels, scholen en bedrijfshallen
• Overkappingen en veranda's — ook buitenruimtes profiteren van een strakke dekvloer

Of het nu gaat om een kleine badkamervloer van 10 m² of een compleet bedrijfspand van 5.000 m² — wij leveren altijd dezelfde topkwaliteit.`,
        },
        {
          heading: "Zandcementvloer vs. cementdekvloer — wat is het verschil?",
          content: `In de praktijk worden de termen 'zandcementvloer' en 'cementdekvloer' vaak door elkaar gebruikt. Technisch gezien is een zandcementdekvloer een specifiek type cementdekvloer, waarbij zand als toeslagmateriaal wordt gebruikt.

Een cementdekvloer is de overkoepelende term voor alle dekvloeren op basis van cement. Een zandcementvloer is hiervan de meest gangbare variant. Andere varianten zijn onder meer anhydrietvloeren (op basis van gips) en cementgebonden gietdekvloeren.

Bij DekvloerExpert zijn wij gespecialiseerd in zandcementdekvloeren, maar bieden wij ook andere typen dekvloeren aan als alternatief.`,
        },
        {
          heading: "Welke dikte heeft een zandcementdekvloer nodig?",
          content: `De juiste dikte van uw zandcementdekvloer hangt af van diverse factoren:

• Zonder vloerverwarming: minimaal 4-5 cm dikte
• Met vloerverwarming: minimaal 5-6 cm boven de verwarmingsbuizen
• Zwaar belaste ruimtes: 7-8 cm of meer, eventueel met extra wapening
• Op isolatie (zwevende dekvloer): minimaal 5 cm, bij voorkeur met krimpnetten

Wij adviseren altijd de juiste dikte op basis van uw specifieke situatie. Twijfelt u? Geen probleem — onze specialisten denken graag met u mee.`,
        },
        {
          heading: "Vezelversterking",
          content: `Door speciale kunststof krimpvezels door de specie te mengen, creëren we een microscopisch netwerk van interne wapening. Dit minimaliseert de kans op krimpscheuren tijdens het droogproces aanzienlijk.

Vezelversterking is vooral aan te raden bij:
• Vloeren met vloerverwarming
• Grote ononderbroken oppervlaktes
• Situaties waar scheurvorming absoluut voorkomen moet worden
• Zwevende dekvloeren op isolatie`,
        },
        {
          heading: "Krimpnetten (staalwapening)",
          content: `Bij zwevende vloeren of vloeren met vloerverwarming plaatsen we traditionele stalen krimpnetten. Deze wapening vangt de spanningen op die ontstaan door het krimpen en uitzetten van de vloer bij temperatuurverschillen.

Krimpnetten worden aangebracht vóór het storten van de dekvloer en worden op de juiste hoogte gepositioneerd zodat ze optimaal functioneren. In combinatie met vezelversterking bieden krimpnetten de beste bescherming tegen scheurvorming.`,
        },
        {
          heading: "Droogtijdversneller",
          content: `Normaal gesproken droogt een zandcementvloer circa 1 centimeter per week. Bij een vloer van 6 cm dikte betekent dat dus minstens 6 weken wachten voordat de eindafwerking aangebracht kan worden.

Met onze droogtijdversneller verkorten we dit proces aanzienlijk. Afhankelijk van de dikte en omstandigheden kan de vloer al na enkele dagen tot weken legklaar zijn. Dit bespaart kostbare tijd, vooral bij projecten met een strakke planning.`,
        },
        {
          heading: "Verharder en Duramit",
          content: `Verharder verhoogt de mechanische eigenschappen en de druksterkte van de vloer. Ideaal voor ruimtes die intensief belast gaan worden, zoals garages, bedrijfshallen of drukbezochte winkelpanden.

Duramit is onze premium high-strength compound voor extreem zwaar belaste vloeren of situaties waarin een dunnere dekvloer vereist is. Het vermindert het benodigde aanmaakwater, zorgt voor een extreem hoge eindsterkte en reduceert krimp tot een minimum.`,
        },
        {
          heading: "Randstroken en randisolatie",
          content: `Een zandcementvloer leeft en werkt. Onder invloed van temperatuurverschillen — zeker in combinatie met vloerverwarming — zal de dekvloer minimaal uitzetten en krimpen.

Wij brengen vóór het storten rondom alle muren, kolommen en doorvoeren een flexibele randisolatie (schuimband) aan. Dit zorgt ervoor dat de dekvloer volledig vrij ligt van de dragende constructie ('zwevend'). Hierdoor krijgt de vloer de ruimte om te werken en worden contactgeluiden naar omliggende ruimtes effectief tegengegaan.`,
        },
        {
          heading: "Hoelang is de droogtijd van een zandcementvloer?",
          content: `De droogtijd hangt af van verschillende factoren:

• Dikte van de vloer — vuistregel: circa 1 cm per week
• Temperatuur en ventilatie — hogere temperatuur en goede luchtcirculatie versnellen het proces
• Vocht in de ondervloer — een droge ondergrond versnelt de droging
• Gebruik van versneller — met droogtijdversneller kan de wachttijd aanzienlijk worden verkort

Belangrijk: begin pas met de eindafwerking als de vloer voldoende droog is. Wij meten het vochtgehalte om het juiste moment te bepalen.`,
        },
        {
          heading: "Wat kost een zandcementvloer per m²?",
          content: `De prijs van een zandcementdekvloer is afhankelijk van diverse factoren:

• Totale oppervlakte in m² — grotere oppervlaktes hebben een lagere prijs per m²
• Gewenste dikte van de vloer
• Bereikbaarheid en toegang — begane grond vs. verdiepingen
• Verdieping — pompkosten bij hogere etages
• Toestand van de ondervloer
• Gekozen toevoegingen:
  — Vezelversterking
  — Krimpnetten
  — Droogtijdversneller
  — Verharder / Duramit
  — Randstroken / randisolatie

Wilt u een exacte prijs voor uw project? Vraag een vrijblijvende offerte aan. Wij berekenen de prijs op basis van uw specifieke situatie en leveren een transparante, eerlijke offerte zonder verborgen kosten.`,
        },
        {
          heading: "Onze werkwijze",
          content: `Bij DekvloerExpert werken wij volgens een vaste, betrouwbare werkwijze:

1. Contact & Advies — U neemt contact op. Wij bespreken uw wensen, bekijken de situatie en geven eerlijk advies.
2. Offerte op Maat — U ontvangt een heldere, vrijblijvende prijsopgave inclusief alle opties en specificaties.
3. Planning — Wij plannen de werkzaamheden in overleg met u of uw aannemer.
4. Voorbereiding — Controle van de ondervloer, aanbrengen van randisolatie en eventueel krimpnetten.
5. Storten — Ons vakkundig team verzorgt het storten. Schoon, efficiënt en volgens planning.
6. Afwerking — De vloer wordt uiterst nauwkeurig vlak en waterpas afgewerkt.
7. Oplevering — Een strakke, kaarsrechte dekvloer die legklaar is voor uw eindafwerking.`,
        },
        {
          heading: "Veelgestelde vragen over zandcementdekvloeren",
          content: `Kan een zandcementvloer over vloerverwarming?
Ja, een zandcementvloer is uitstekend geschikt voor vloerverwarming. De warmtegeleiding is optimaal, mits de juiste dikte en eventueel krimpnetten worden toegepast.

Wanneer kan ik de eindvloer leggen?
Dat hangt af van de dikte en of er versneller is gebruikt. Gemiddeld duurt het 1 cm per week. Met versneller kan dit aanzienlijk korter zijn.

Is een zandcementvloer geschikt voor alle eindafwerkingen?
Ja. Tegels, pvc, laminaat, parket, gietvloeren — alles kan op een goed gestorte zandcementdekvloer.

Werken jullie door heel Nederland?
Ja, DekvloerExpert werkt door heel Nederland. Van Groningen tot Maastricht, van Amsterdam tot Eindhoven — wij komen naar u toe.

Kan ik ook als particulier bij jullie terecht?
Absoluut. Wij werken zowel voor particulieren als voor aannemers en bouwbedrijven.

Hoe dik moet mijn dekvloer zijn?
Dit hangt af van de situatie. Zonder vloerverwarming minimaal 4-5 cm, met vloerverwarming minimaal 5-6 cm boven de buizen. Wij adviseren u graag.`,
        },
        {
          heading: "Door heel Nederland",
          content: `DekvloerExpert werkt door heel Nederland. Of uw project zich bevindt in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, Arnhem, Maastricht of elke andere plaats in Nederland — wij komen naar u toe.

Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat wij voor uw project kunnen betekenen.`,
        },
      ]}
      ctaText="Klaar voor een strakke zandcementdekvloer?"
      ctaSubtext="Vraag vandaag nog een vrijblijvende offerte aan. Wij reageren binnen 24 uur."
      heroImages={["/photos/werk-12.jpg", "/photos/werk-02.jpg", "/photos/werk-13.jpg"]}
    />
  );
}
