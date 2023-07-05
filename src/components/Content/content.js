import React from 'react';
import './content.css';
import AOS from "aos";
import "aos/dist/aos.css";

//images
import NotnLogo from "../images/Notn/Notn-logo.png";
import Mat from "../images/Notn/mat.png";
import WereDi from "../images/Notn/school.jpg";
import Concept from "../images/Notn/concept.png";
import Installatie from "../images/Notn/install.jpg";

import Tim from "../images/Tim/Tim.jpg";
// import Paletten from "../images/Tim/paletten.jpg";
import Bowlen from "../images/Tim/bowlen2.jpg";
import Album from "../images/Tim/album.jpg";
import Sheet from "../images/Tim/logoSheet.jpg"

import PicooLogo from "../images/Picoo/logo-picoo2.png";
import Poster from "../images/Picoo/poster.jpg";
import Scherm from "../images/Picoo/scherm.jpg";
import PicooCard from "../images/Picoo/Bcard.jpg";

// Later vervangen met een CMS

AOS.init();

const divcontent =

    [        
        // Night of the Nerds dingen hier
        {
            titel: 'Wat is Night of The Nerds?',
            inhoud:
                "Night of the Nerds is hét event waar gepassioneerde nerds de allernieuwste ontwikkelingen in de wereld van innovatie, techniek en creativiteit tonen." +
                " Mijn groep en ik stonden als de \"Designerds\" op Night of The Nerds met ons project KYK. Onze opdracht was om een interactieve installatie te maken om video's van Veejays.com " +
                " en de AKV Sint Joost animatie studie te laten zien, Om zo interesse op te wekken voor die studies op een interactieve manier.",
            afbeelding: NotnLogo,
            page: '/NotN'
        },
        {
            titel: 'Semester 3',
            inhoud:
                "In semester 3 zijn wij en 3 andere groepjes gestart met een project voor Night of The Nerds. Een probleem wat we hadden was dat er een limiet zat aan het interactieve" +
                " gedeelte van ons project, want de interactie mocht niet de aandacht afnemen van de video. Hierdoor vielen vele van onze eerste concepten al gelijk af. Uiteindelijk na vele" +
                " concepten later hadden we eindelijk een concept wat toch leuk was maar niet de aandacht af zou nemen van de video's. Ons idee was om het video selectie scherm te besturen d.m.v." +
                " een DDR (dance dance revolution) mat. Nadat we ons concept hadden uitgewerkt in een prototype konden we beginnen met de usertests. We kregen hier en daar wat opmerkingen over wat" +
                " beter kon maar over het algemeen was iedereen die we het hebben laten testen er wel enthousiast over. Nadat we ons idee in het algemeen hadden getest konden we aan de slag gaan met" +
                " de iets wat kleinere tests zoals \"Maken we het scrollen verticaal zoals in DDR of horizontaal?\" \"Hoe lang mogen de video's duren? (aandachtsboog kinderen 14 t/m 18)\"." +
                " Uiteindelijk aan het einde van het semester werd er door onze opdrachtgever bekend gemaakt welk project werd gekozen om ook echt op Night of The Nerds te staan en ik kan trots zeggen" +
                " dat ons project werd gekozen.",
            afbeelding: Mat,
            page: '/NotN'
        },
        {
            titel: 'Semester 4: school onderzoek',
            inhoud: 'In mijn 4de semester ging ons groepje weer verder werken aan het project. In dit semester was de opdracht vooral "Hoe trek je de aandacht naar jullie installatie en hoe' +
                ' houd je die aandacht vast". Hiervoor gingen wij weer onderzoek doen, dankzij een van onze leraar konden wij een afspraak maken op de Were Di school in Valkenswaard om onze' +
                ' ideeën voorleggen aan 3 verschillende klassen. In de eerste klas vroegen wij gewoon globaal aan de klassen wat ze van elk idee vonden, en hier merkte we iets op waar we nog geen' +
                ' rekening mee hadden gehouden. Namelijk dat middelbare scholieren heel vatbaar zijn voor groepsdruk, niemand durfde iets te zeggen omdat ze bang waren om de reactie van de rest van' +
                ' de klas. Ook zagen we welke kinderen de "populaire" kinderen waren en als hun een mening hadden dan had de rest van de klas die ook. Uit onze test bij onze 1ste klas hadden we dus' +
                ' eigenlijk geen nuttige informatie over onze ideeën gekregen maar wel belangrijke info gekregen over hoe de middelbare scholieren zich gedragen. Bij de andere 2 klassen hadden we' +
                ' ervoor gekozen om de kinderen hun feedback op te laten schrijven zodat het annoniem was waardoor we juist heel veel feedback kregen over onze ideeen.',
            afbeelding: WereDi,
            page: '/NotN'
        },
        {
            titel: 'Semester 4: nieuw concept',
            inhoud:
                "Na het school onderzoek kwamen we tot de realisatie dat ons project niet zou slagen vanwege de groepsdruk, waardoor de kinderen dus te onzeker zouden zijn over wat de rest van" +
                " hun zou denken als ze op de mat staan waardoor dus weer niemand op de mat wilt staan. Vanaf dat punt zijn we weer opnieuw begonnen met concepten te bedenken en te testen." +
                " Uiteindelijk kwamen we op het idee om de video's te selecteren via een annoniem stem systeem (om dit te testen hebben we Kahoot gebruikt). Nadat we dit hadden getest leek het" +
                " een goed idee te zijn maar nadat we weer in overleg gingen met onze opdrachtgever kregen we van haar te horen dat dit idee helaas niet zou werken omdat de wifi op het evenement" +
                " slecht zou zijn (wat ook klopte) ook hadden we het idee om het met controllers te doen maar toen kregen we van onze opdrachtgever te horen dat ze uit ervaring van vorige Night of" +
                " The Nerds weet dat de controllers dan zouden worden gestolen of kapot zouden gaan. Na een brainstormsessie met de opdrachtgever kwamen we uit op het idee van touwtjes trekken." +
                " Hierbij zou er een snelle interactie zijn (alleen aan een touwtje trekken) en groepsdruk zou dan ook geen rol spelen omdat wat je krijgt van de touwtjes compleet willekeurig zou zijn.",
            afbeelding: Concept,
            page: '/NotN'
        },
        {
            titel: 'Touwtjes trekken concept',
            inhoud:
                "Toen we uiteindelijk ons touwtjes trekken concept hadden uitgewerkt en getest bleek het een succes te zijn. Het feit dat ergens touwtjes hingen vonden mensen al interessant" +
                " genoeg om eraan te trekken, maar we hebben er alsnog voor gekozen om EL draden te gebruiken i.p.v. gewoon touw omdat dat ook meer in de stijl van Night of The Nerds is en het" +
                " geeft licht wat ook weer aandacht trekt. Voor meer informatie en alle documenten van ons project ga naar dennisvulders.wordpress.com",
            afbeelding: Installatie,
            page: '/NotN'
        },
        // Tim Koehoorn dingen hier
        {
            titel: "Intro",
            inhoud:
                "In Semester 2 moesten wij voor onze proftaak een brandguide maken voor een student van de Fontys rockacademie. Mijn klas kreeg de muzikant Tim Koehoorn, een singer songwriter" +
                " die Nederlandstalige muziek maakt. Uiteindelijk moesten we in groepjes van 6 personen aan de slag om goede branding voor Tim te maken.",
            afbeelding: Tim,
            page: "/TimKoehoorn"
        },
        {
            titel: "Onderzoek",
            inhoud:
                "Als eerste zijn we uiteraard met Tim gaan praten over wat hij wilt bereiken, wie zijn idolen zijn etc. zodat we een onderzoek konden starten naar soortgelijke artiesten hun stijl." +
                " Nadat we ons onderzoek naar andere artiesten hadden gedaan en daar een aantal conclusies uit hadden getrokken, gingen we weer met Tim rond de tafel zitten en lieten we zien wat we" +
                " onze bevindingen waren (kleur palletten, logo stijlen, lettertypes, etc). Uiteraard waren het de eerste versies en hebben we er verder op geïtereerd a.d.h.v. Tim zijn commentaar en" +
                " verder onderzoek.",
            afbeelding: Sheet,
            page: "/TimKoehoorn"
        },
        {
            titel: "Dagje uit met Tim",
            inhoud:
                "Om Tim Koehoorn echt te leren kennen en erachter te komen wat zijn stijl is hadden wij met Tim afgesproken om te gaan discobowlen. We hadden ervoor gekozen om te gaan" +
                " discobowlen omdat we op dat moment nog aan het experimenteren waren met meer donkerblauwe en paarse kleuren en dit leek ons dan ook een perfect moment om een photoshoot" +
                " te houden. We kwamen hier er wel achter dat we toch naar andere kleuren moesten overstappen omdat het niet echt bij Tim past. Ook een reden dat we voor discobowlen hadden" +
                " gekozen i.p.v. bijvoorbeeld ergens op een terrasje wat gaan drinken was omdat Tim bowlen leuk vind en hier dus ook meer op zijn gemak zou zijn.",
            afbeelding: Bowlen,
            page: "/TimKoehoorn"
        },
        {
            titel: "Resultaat",
            inhoud:
                "Uiteindelijk na een heel semester samen met Tim Koehoorn te werken aan zijn brandguide hadden we een resultaat waar iedereen trots op was. Als groep waren we vooral trots" +
                " omdat Tim onze brandguide uiteindelijk had gekozen om te gebruiken, hij heeft bijvoorbeeld bij zijn laatste album cover onze brandguide toegepast. Helaas staat de website" +
                " die we voor Tim Koehoorn hebben gemaakt niet meer online en mijn groepsgenoot die ervoor zorgde kon de files helaas niet meer vinden.",
            afbeelding: Album,
            page: "/TimKoehoorn"
        },

        // Picoo dingen
        {
            titel: "Wat is Picoo?",
            inhoud:
                "Picoo is een klein bedrijf in Eindhoven met als missie kinderen weer actief willen maken en ze proberen d.m.v. hun picoos het actief samen spelen te stimuleren. Een picoo" +
                " is een spelcomputer die combineert waar kinderen van houden: interactieve technologie en actief samen spelen. Zo komen interactief en traditioneel spelen samen in een" +
                " compleet nieuwe experience.",
            afbeelding: PicooLogo,
            page: "/Picoo"
        },
        {
            titel: "Ons orginele plan",
            inhoud:
                "Toen we met het project voor Picoo begonnen kregen wij te horen dat we de customer journey moesten gaan onderzoeken en bedenken hoe we de branding kunnen verbeteren." +
                " Nadat we al even op hun website hadden gekeken, viel het ons gelijk op dat de website heel erg gericht was op bedrijven en niet op de kinderen die er mee moeten gaan" +
                " spelen. Na wat overleg waren wij het al snel eens dat we een nieuwe website voor hun zouden gaan maken, Voornamelijk gericht naar de B2C markt. Helaas voor ons kregen" +
                " we te horen dat de B2C markt voor hun pas in de toekomst interessant voor hun is. We waren wel nogsteeds van plan om een nieuwe website te maken omdat er nog steeds" +
                " genoeg verbeterpunten waren. We hebben bijvoorbeeld al in de eerste paar weken een aantal schetsen gemaakt voor verbeteringen van de pagina's en pagina's die nog niet" +
                " bestonden. Helaas kregen we toen van hun te horen dat het niet handig zou zijn dat we aan een website gaan werken aangezien hun eigen web-developer nog volop bezig is" +
                " met het verbeteren van de website waardoor vrijwel zinloos zou zijn als wij ook een website zouden maken.",
            afbeelding: Scherm,
            page: "/Picoo"
        },
        {
            titel: "Ons huidige plan",
            inhoud:
                "Nadat we te horen kregen dat we niet aan een website zouden kunnen werken hebben we in overleg met Picoo en onze docenten besloten dat we een brandguide voor hun zouden"+
                " maken, aangezien ze deze ook nog niet hebben waardoor ze op een aantal vlakken niet consequent waren. Ook zijn we bezig met een aantal middelen te crëeren zoals posters,"+
                " visitekaartjes etc. Ons doel voor dit semester is dan ook dat we Picoo een sterke fundering geven waarop ze al hun toekomstige branding op kunnen baseren.",
            afbeelding: Poster,
            page: "/Picoo"
        },
        {
            titel: "Resultaat",
            inhoud:
                "Ons project is de Woensdag voor de kerstvakantie afgelopen. Uiteindelijk hebben we Picoo een volledige brandguide aangeleverd met de daarbij behorende onderzoeksdocumenten."+
                " Tetske (ons contact persoon bij Picoo) vertelde ons dat ze het leuk/fijn vond om met ons samen te werken en dat we een goed eindproduct hebben geleverd. Als groep zijn we"+
                " ook zeer tevreden met het resultaat.",
            afbeelding: PicooCard,
            page: "/Picoo"
        }

    ]

let filteredContent = divcontent.filter(function (filtered) {
    return filtered.page === window.location.pathname;
});

for (var x = 0; x <= filteredContent.length; x++) {
    var y = 2;
    var z = x % y;
    var fotoPos = '';

    if (z === 1) {
        fotoPos = 'item-foto-right';
        console.log(x +" het is even " + fotoPos)
    }
    else{
        fotoPos = 'item-foto-left';
        console.log(x +" het is oneven " + fotoPos)
    }
}

const Content = () => (
    <React.Fragment>
        {filteredContent.map((e, index) =>
            <section key={index} data-aos="zoom-in" className="item-wrapper" id="content">
                <img className= 'item-foto-left' src={e.afbeelding} alt="logo" />
                <h1 className="item-header">{e.titel}</h1>
                <div className="item-tekst">
                    <p>{e.inhoud}</p>
                </div>
                {console.log(x + ' ' + fotoPos)}
            </section>
        )}
    </React.Fragment>
);

export default Content;
