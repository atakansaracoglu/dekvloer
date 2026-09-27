import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Werkgebied | DekvloerExpert",
  description:
    "DekvloerExpert werkt door heel Nederland. Zandcementdekvloer laten leggen? Wij komen naar u toe, van Amsterdam tot Maastricht.",
};

export default function WerkgebiedPage() {
  return (
    <ServicePage
      title="Werkgebied"
      subtitle="Wij werken door heel Nederland"
      intro={`DekvloerExpert levert hoogwaardige zandcementdekvloeren in heel Nederland. Waar u ook bent, wij komen naar uw locatie toe met onze eigen machines en vakspecialisten. U hoeft zich nergens zorgen over te maken — wij regelen alles van A tot Z.

Of het nu gaat om nieuwbouw in Amsterdam, een renovatieproject in Rotterdam of een bedrijfspand in Eindhoven: wij staan voor u klaar. Onze teams zijn dagelijks actief in alle provincies en reizen door het hele land om projecten op te leveren die voldoen aan de hoogste kwaliteitseisen.

Wij zijn actief in onder andere Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, Arnhem, Maastricht, Leiden, Delft, Haarlem, Almere, Breda, Tilburg, Nijmegen, Apeldoorn, Amersfoort, Zwolle en alle tussenliggende plaatsen. Geen project is te ver — wij komen overal.`}
      features={[
        {
          title: "Heel Nederland",
          desc: "Van Groningen tot Maastricht en van Den Haag tot Enschede. Wij werken in alle provincies en komen naar elke locatie.",
        },
        {
          title: "Eigen materieel",
          desc: "Wij komen met onze eigen machines en materialen naar uw bouwplaats. U hoeft niets te regelen.",
        },
        {
          title: "Snelle inzet",
          desc: "Dankzij onze landelijke dekking en meerdere teams kunnen wij snel op locatie zijn, ook voor spoedprojecten.",
        },
        {
          title: "Lokale kennis",
          desc: "Onze vakmensen kennen de lokale bouwvoorschriften en werken samen met aannemers in uw regio.",
        },
        {
          title: "Geen voorrijkosten",
          desc: "Wij rekenen geen extra voorrijkosten, ongeacht uw locatie in Nederland.",
        },
        {
          title: "Flexibele planning",
          desc: "Wij passen ons aan uw bouwplanning aan en stemmen de uitvoering af op uw project.",
        },
      ]}
      extraSections={[
        {
          heading: "Wij komen naar u toe",
          content:
            "Bij DekvloerExpert hoeft u niet te zoeken naar een lokale vloerlegger. Onze teams zijn dagelijks onderweg door heel Nederland en kunnen snel bij u op locatie zijn. Of uw project nu in de Randstad ligt, in het noorden van het land of in Limburg — wij leveren overal dezelfde topkwaliteit.\n\nOnze werkwijze is eenvoudig: u vraagt een offerte aan, wij plannen het werk in en komen op de afgesproken datum naar uw locatie. Wij nemen al het benodigde materiaal en materieel mee, zodat u nergens naar om hoeft te kijken.",
        },
        {
          heading: "Regio's waar wij actief zijn",
          content:
            "Noord-Holland: Amsterdam, Haarlem, Alkmaar, Zaandam\nZuid-Holland: Rotterdam, Den Haag, Leiden, Delft, Dordrecht\nUtrecht: Utrecht, Amersfoort, Nieuwegein\nNoord-Brabant: Eindhoven, Tilburg, Breda, Den Bosch\nGelderland: Arnhem, Nijmegen, Apeldoorn, Ede\nOverijssel: Zwolle, Enschede, Deventer\nGroningen: Groningen, Assen\nFriesland: Leeuwarden, Heerenveen\nLimburg: Maastricht, Venlo, Heerlen\nFlevoland: Almere, Lelystad\nZeeland: Middelburg, Goes\nDrenthe: Emmen, Hoogeveen\n\nStaat uw stad of regio er niet bij? Geen probleem. Wij werken door heel Nederland en komen ook naar uw locatie.",
        },
      ]}
      ctaText="Offerte aanvragen voor uw regio?"
      ctaSubtext="Vertel ons waar uw project zich bevindt en wij maken een vrijblijvende offerte op maat."
      heroImages={["/photos/werk-11.jpg", "/photos/werk-13.jpg", "/photos/werk-21.jpg"]}
    />
  );
}
