export const projectPreviewText = [
  {
    rubric: "Ljusmätare",
    description: "Som kamera entusiast fotar jag en del analogt, och en stor del av processen är att ställa in kameran efter ljusförhållandet. Så jag gjorde en webbapplikations lösning på det!",
    imgSrc: "./show-off-camera.png",
    key: 'camera',
  },
  {
    key: 'calendar',
    rubric: "Planerings applikation",
    description: "Inspirerad av '7 Habits of Highly Effective People' skapade jag 'fjärde generationens planeringsverktyg', som Stephen Covey kallar det. ",
    imgSrc: "./desktop-calendar.png",
  },
];

export const Projects = [
  {
    key: 'camera',
    background: "camera-background",
    title:'Ljusmätare',
    summary: "För att få ett bra kort med en analog kamera måste man veta ljusförhållandena. Det är sällan gamla kamerors mätare är att lita på dock, men som tur är finns det en sådan inbyggd i telefonen! Och med det nya web-api'et i webbläsare är den informationen tillgänglig.",
    backgroundImgSrc: "./desktop-calendar.png",
    backgroundText: "En vår åkte jag och mina kompisar igenom Tyskland, Italien och Frankrike. Dem hade blivit helt galna i analoga kameror och lånade ut en till mig under resan. Bilen blev full av dofterna från dem italienska skogarna medans vi åkte upp för serpentin vägar, om man kollade ut igenom fönstret fick man yrsel. Dem inbyggda ljusmätarna fungerade antingen väldigt osäkert, eller inte alls. Men det fanns en app som man behövde ladda ner som kunde utnyttja mobilens kamera för att mäta ljusstyrkan, men det tog mig hela veckan att förstå vad den egentligen gjorde..",
    goalText: 'Mitt mål var att skapa en ljusmätare som uppmuntrade till att faktiskt lära sig den klassiska foto-pyramiden (tid, ISO, mått), men utan att vara påträngande. Att få lära sig fota, och varför det faktiskt funkar. Det måste ju finnas fler som känner som jag?',
    colorText: 'Appen skulle försöka anta en slags modern-retro känsla, med varma, kulörta färger som kanske känns lite skitiga till och med. Fotandet ska ske i alla väder, och så kommer även den här appen användas.'
  },
  {
    key: 'calendar',
    background: "calendar-background",
    title:'Planerings webb applikation',
    summary: 'Nåt babbel om en bok och grejer',
    backgroundImgSrc: "./desktop-calendar.png",
    backgroundText: "",
    goalText: "",
    colorText: "",
  },
];
