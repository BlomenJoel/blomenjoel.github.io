export const projectPreviewText = [
  {
    rubric: "Ljusmätare",
    description: "Som kamera entusiast fotar jag en del analogt, och en stor del av processen är att ställa in kameran efter ljusförhållandet. Så jag gjorde en webbapplikations lösning på det!",
    imgSrc: "./show-off-camera.png",
    key: 'project',
    id: 'camera',
  },
  {
    id: 'calendar',
    key: 'project',
    rubric: "Planerings applikation",
    description: "Inspirerad av 7 Habits of Highly Effective People skapade jag 'fjärde generationens planeringsverktyg', som Stephen Covey kallar det. ",
    imgSrc: "./desktop-calendar.png",
  },
  {
    key: 'photos',
    rubric: "Diverse foton och grafik",
    description: "Ett av mina intressen är att fota så här är några av bilderna jag har tagit.",
    imgSrc: "./joel-in-photo-room.jpg",
  },
];

export const Projects = [
  {
    key: 'camera',
    background: "camera-background",
    title:'Ljusmätare',
    summary: "För att få ett bra kort med en analog kamera måste man veta ljusförhållandena. Det är sällan gamla kamerors mätare är att lita på dock, men som tur är finns det en sådan inbyggd i telefonen! Och med det web-api'et i webbläsare är den informationen tillgänglig.",
    backgroundImgSrc: "./italy-2.jpg",
    styleImg: "./calendar-style.png",
    backgroundText: "En vår åkte jag och mina kompisar igenom Tyskland, Italien och Frankrike. Dem hade blivit helt galna i analoga kameror och lånade ut en till mig under resan. Bilen blev full av dofterna från dem italienska skogarna medans vi åkte upp för serpentin vägar, om man kollade ut igenom fönstret fick man yrsel. Dem inbyggda ljusmätarna fungerade antingen väldigt osäkert, eller inte alls. Men det fanns en app som man behövde ladda ner som kunde utnyttja mobilens kamera för att mäta ljusstyrkan, men det tog mig hela veckan att förstå vad den egentligen gjorde..",
    visionText: 'Mitt mål var att skapa en ljusmätare som uppmuntrade till att faktiskt lära sig den klassiska foto-pyramiden (slutartid, ISO, bländare), men utan att vara påträngande. Att få lära sig fota, och varför det faktiskt funkar. Det måste ju finnas fler som känner som jag?',
    video: 'camera-video.mp4',
  },
  {
    key: 'calendar',
    background: "calendar-background",
    title:'Planerings webb applikation',
    summary: 'Fjärde generationens planeringsverktyg syfte är att lägga fokuset på mål och värderingar. Inte lägga lika mycket tyngd på tider och möten, utan istället att ta steg framåt och utvecklas.',
    backgroundImgSrc: "./desktop-calendar.png",
    backgroundText: "När jag började på Chalmers och kom in i föreningslivet insåg jag hur möten bara sväljer tid. Jag hade inte tid att bara sitta på möten, för att hinna med plugget och ha en fritid krävdes det att jag var mer effektiv med min tid. Och inte bara det, en stor del av universits tiden handlar om att hitta sin identitet. Precis det handlar Stephen Covey's bok handlar om, identitet, prioritering och planering.",
    visionText: "Mitt mål var att försöka skapa en kalender som följde Stevens idéer. Kalendern skulle ha ett fokus på mål och vision.",
    video: 'calendar-video.mp4',
  },
];
