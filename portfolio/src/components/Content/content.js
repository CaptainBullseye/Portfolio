import React from 'react';
import './content.css';
import AOS from "aos";
import "aos/dist/aos.css";

//images
import Dennis from "../images/dennis.png";
import Logo from "../images/logo.png"

AOS.init();

const divcontent = [
    {
        titel: 'Wat is Night of The Nerds?',
        inhoud: 
        "Night of the Nerds is hét event waar gepassioneerde nerds de allernieuwste ontwikkelingen in de wereld van innovatie, techniek en creativiteit tonen." +
        " Mijn groep en ik stonden als de \"Designerds\" op Night of The Nerds met ons project KYK. Onze opdracht was om een interactieve installatie te maken om video's van Veejays.com " +
        " en de AKV Sint Joost animatie studie te laten zien, Om zo interesse op te wekken voor die studies op een interactieve manier.",
        afbeelding: Dennis
    },
    {
        titel: 'Semester 3',
        inhoud: 
        "In semester 3 zijn wij en 3 andere groepjes gestart met een project voor Night of The Nerds. Een probleem wat we hadden was dat er een limiet zat aan het interactieve"+
        " gedeelte van ons project, want de interactie mocht niet de aandacht afnemen van de video. Hierdoor vielen vele van onze eerste concepten al gelijk af. Uiteindelijk na vele"+ 
        " concepten later hadden we eindelijk een concept wat toch leuk was maar niet de aandacht af zou nemen van de video's. Ons idee was om het video selectie scherm te besturen d.m.v."+ 
        " een DDR (dance dance revolution) mat. Nadat we ons concept hadden uitgewerkt in een prototype konden we beginnen met de usertests. We kregen hier en daar wat opmerkingen over wat"+
        " beter kon maar over het algemeen was iedereen die we het hebben laten testen er wel enthousiast over. Nadat we ons idee in het algemeen hadden getest konden we aan de slag gaan met"+ 
        " de iets wat kleinere tests zoals \"Maken we het scrollen verticaal zoals in DDR of horizontaal?\" \"Hoe lang mogen de video's duren? (aandachtsboog kinderen 14 t/m 18)\"."+ 
        " Uiteindelijk aan het einde van het semester werd er door onze opdrachtgever bekend gemaakt welk project werd gekozen om ook echt op Night of The Nerds te staan en ik kan trots zeggen"+
        " dat ons project werd gekozen.",
        afbeelding: Logo
    },
    {
        titel: 'Semester 4: school onderzoek',
        inhoud: 'In mijn 4de semester ging ons groepje weer verder werken aan het project. In dit semester was de opdracht vooral "Hoe trek je de aandacht naar jullie installatie en hoe'+ 
        ' houd je die aandacht vast". Hiervoor gingen wij weer onderzoek doen, dankzij een van onze leraar konden wij een afspraak maken op de Were Di school in Valkenswaard om onze'+ 
        ' ideeën voorleggen aan 3 verschillende klassen. In de eerste klas vroegen wij gewoon globaal aan de klassen wat ze van elk idee vonden, en hier merkte we iets op waar we nog geen'+
        ' rekening mee hadden gehouden. Namelijk dat middelbare scholieren heel vatbaar zijn voor groepsdruk, niemand durfde iets te zeggen omdat ze bang waren om de reactie van de rest van'+ 
        ' de klas. Ook zagen we welke kinderen de "populaire" kinderen waren en als hun een mening hadden dan had de rest van de klas die ook. Uit onze test bij onze 1ste klas hadden we dus'+ 
        ' eigenlijk geen nuttige informatie over onze ideeën gekregen maar wel belangrijke info gekregen over hoe de middelbare scholieren zich gedragen. Bij de andere 2 klassen hadden we'+ 
        ' ervoor gekozen om de kinderen hun feedback op te laten schrijven zodat het annoniem was waardoor we juist heel veel feedback kregen over onze ideeen.',
        afbeelding: Logo
    },
    {
        titel: 'Semester 4: nieuw concept',
        inhoud: 
        "Na het school onderzoek kwamen we tot de realisatie dat ons project niet zou slagen vanwege de groepsdruk, waardoor de kinderen dus te onzeker zouden zijn over wat de rest van"+ 
        " hun zou denken als ze op de mat staan waardoor dus weer niemand op de mat wilt staan. Vanaf dat punt zijn we weer opnieuw begonnen met concepten te bedenken en te testen."+ 
        " Uiteindelijk kwamen we op het idee om de video's te selecteren via een annoniem stem systeem (om dit te testen hebben we Kahoot gebruikt). Nadat we dit hadden getest leek het"+
        " een goed idee te zijn maar nadat we weer in overleg gingen met onze opdrachtgever kregen we van haar te horen dat dit idee helaas niet zou werken omdat de wifi op het evenement"+ 
        " slecht zou zijn (wat ook klopte) ook hadden we het idee om het met controllers te doen maar toen kregen we van onze opdrachtgever te horen dat ze uit ervaring van vorige Night of"+ 
        " The Nerds weet dat de controllers dan zouden worden gestolen of kapot zouden gaan. Na een brainstormsessie met de opdrachtgever kwamen we uit op het idee van touwtjes trekken."+  
        " Hierbij zou er een snelle interactie zijn (alleen aan een touwtje trekken) en groepsdruk zou dan ook geen rol spelen omdat wat je krijgt van de touwtjes compleet willekeurig zou zijn.",
        afbeelding: Dennis
    },
    {
        titel: 'Touwtjes trekken concept',
        inhoud: 
        "Toen we uiteindelijk ons touwtjes trekken concept hadden uitgewerkt en getest bleek het een succes te zijn. Het feit dat ergens touwtjes hingen vonden mensen al interessant"+ 
        " genoeg om eraan te trekken, maar we hebben er alsnog voor gekozen om EL draden te gebruiken i.p.v. gewoon touw omdat dat ook meer in de stijl van Night of The Nerds is en het" +
        " geeft licht wat ook weer aandacht trekt. Voor meer informatie en alle documenten van ons project ga naar dennisvulders.wordpress.com",
        afbeelding: Dennis
    },
    
]

// var x = 4;
// var y = 2;
// var z = x % y;
// var bgcolor = 'green'

// console.log(z);

// if (z === 0) {
//     bgcolor = 'red'
//     console.log("het is even")
// }
// else{
//     console.log("het is oneven")
//     bgcolor = 'blue'
// }



const Content = () => (
    <React.Fragment>
        {divcontent.map((e, index) =>
            <section key={index} data-aos="zoom-in" className="item-wrapper" id="content">
                <img className="item-foto" src={e.afbeelding}  alt="logo" />
                <h1 className="item-header">{e.titel}</h1>
                <div className="item-tekst">
                    <p>{e.inhoud}</p>
                </div>
            </section>
        )}
    </React.Fragment>

);

export default Content;
