let doaaArray = [
    'الله أكبر اللهم أهله علينا بالأمن والإيمان والسلامة والإسلام ربي وربك الله ',
    'اللهم انت السلام ومنك السلام تباركت وتعاليت ياذا الجلال والاكرام اللهم اعنا على ذكرك وشكرك وحسن عبادتك',
    'اللهم بارك لنا في اجسادنا وبارك لنا في اموالنا واولادتنا واعنا على طاعتك في هذا الشهر الكريم',
    'اللهم آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذا النار',
    'اللهم اني اعوذ بك من سوء القضاء، ومن درك الشقاء، ومن شماتة الأعداء، ومن جَهْد البلاء',
    'ربنا هب لنا من ذرياتنا وازواجنا قرة اعين واجعلنا للمتقين اماما اللهم ارزقنا الخير كله في شهر رمضان',
    'ربنا اجعلني مقيم الصلاة ومن ذريتي ربنا وتقبل دعاء اللهم اقبل صيامي وقيامي في شهر رمضان',
    'اللهم اغفر لي ولوالدي وللمؤمنين والمؤمنات الاحياء منهم والاموات ربنا اجعلني واهلي من عتقائك من النار في شهرك الفضيل',
    'اللهم اني اسالك الخير كله عاجله وآجله ما علمت منه وما لم اعلم واعوذ بك من الشر كله عاجله وآجله ما علمت منه وما لم اعلم اللهم اكتب لي من جميع خيرك في شهر رمضان الكريم عاجلا ليس بآجل يارب العالمين',
    'اللهم إني أسألك بأن لك الحمد لا إله إلا أنت المنان، بديع السموات والأرض، يا ذا الجلال والإكرام، يا حي يا قيوم إني أسألك ” وهذا الدعاء هو الدعاء باسم الله الاعظم الذي اذا دعي به اجب واذا سئل به اعطى وهو جعاء شامل في رمضان',
    'اللهم أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناء عليك أنت كما أثنيت على نفسك ” اللهم انت ربي رحمني واغفرلي واكتبني من المغفور لهم في رمضان',
    'اللهم اني اسألك من خير ما سألك عبدك ونبيك ، واعوذ بك من شر ما عاذ به عبدك ونبيك',
    'اللهم رحمتك أرجو فلا تكلني إلى نفسي طرفة عين، وأصلح لي شأني كله لا إله إلا أنت ',
    'اللهم اني اسألك الجنة وكل ما يقرب اليها من قول او عمل ، واعوذ بك من النار وكل ما قرب اليها من قول او عمل اللهم اجعلني من الذين يدخلون الجنة بغير حساب ولا سابق عذاب',
    'اللهم ان شهر رمضان هو من اعظم الشهور عندك فاغفر لي فيه وبارك لي في رزقي فيه واكتبني من عبادك المخلصين',
    'اللهم بعلمك الغيب، وقدرتك على الخلق أحيني ما علمتَ الحياة خيراً لي، وتوفني إذا علمت الوفاة خيراً لي، اللهم وأسألك خشيتك في الغيب والشهادة، وأسألك كلمة الحق في الرضا والغضب',
    'اللهمَّ مالكَ الملكِ تُؤتي الملكَ مَن تشاء، وتنزعُ الملكَ ممن تشاء، وتُعِزُّ مَن تشاء، وتذِلُّ مَن تشاء، بيدِك الخيرُ إنك على كلِّ شيءٍ قدير، رحمنُ الدنيا والآخرةِ ورحيمُهما، تعطيهما من تشاء، وتمنعُ منهما من تشاء، ارحمْني رحمةً تُغنيني بها عن رحمةِ مَن سواك ” وهو دعاء لقضاء الدين',
    'اللهم اني أسألك القصد في الفقر والغنى، وأسألك نعيماً لا ينفد، وأسألك قرة عين لا تنقطع، وأسألك الرضاء بعد القضاء، وأسألك بَرْد العيش بعد الموت، وأسألك لذة النظر إلى وجهك والشوق إلى لقائك في غير ضراء مضرة، ولا فتنة مضلة',
    'اللهمّ أصلح لي ديني الّذي هو عصمة أمري، وأصلح لي دنياي الّتي فيها معاشي، وأصلح لي أخرتي الّتي فيها معادي، واجعل الحياة زيادة لي في كلّ خير، واجعل الموت راحة لي من كلّ شرّ ” وهو من الادعية المستحبة في شهر رمضان',
    'اللهم زينا بزينة الإيمان، واجعلنا هداة مهتدين ” واجعلنا في شهر رمضان من احبتك المتقين',
    'اللَّهمَّ اكفني بِحلالِكَ عن حرامِكَ، وأغنِني بِفَضلِكَ عَن سواك ” وهو دعاء يفك الكرب ويقضي الدين',
    'اللهم اقسم لنا من خشيتك ما يحول بيننا وبين معاصيك، ومن طاعتك ما تبلّغنا به جنتك، ومن اليقين ما تُهَوِّنُ به علينا مُصِيباتِ الدنيا ” وهو من دعاء النبي صلى الله عليه وسلم لاصحابه',
    'اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقني من خطاياي كما ينقى الثوب الأبيض من الدنس، اللهم اغسلني من خطاياي بالماء والثلج والبرد ”  وهو دعاء الاستفتاح',
    'اللهم مَتِّعْنا بأسماعنا وبأبصارنا وقوتنا ما أحييتنا، واجعله الوارث مِنَّا، واجعل ثأرنا على من ظلمنا، وانصرنا على من عادانا، ولا تجعل مصيبتنا في ديننا، ولا تجعل الدنيا أكبر همنا، ولا مبلغ علمنا، ولا تسلط علينا من لا يرحمنا',
    'اللهمَّ إني أعوذ بك من العجزِ والكسل، والجُبنِ والبُخل، والهَرمِ وعذابِ القبر',
    'اللهم انك عفو تحب العفو فاعف عنا',
    'اللهمَّ آتِ نفسي تقواها، وزكِّها أنت خيرُ مَن زكَّاها، أنت وليُّها ومولاها، اللهمَّ إني أعوذُ بك من علمٍ لا ينفع، ومن قلبٍ لا يخشع، ومن نفسٍ لا تَشبع، ومنْ دعوةٍ لا يُستجابُ لها',
    'اللهم إني أسألك الهُدَى، والتُقَى، والعفاف والغِنَى',
    'لا اله الا انت سبحانك اني كنت من الظالمين ” ربي اغفرلي واكتبني  من عتقائك من النار',
    'اللهم اجرني من النار ، اللهم اجرني من النار ، اللهم اجرني من النار ، اللهم اكتبني من عتقائك من النار يارب العالمين ، اللهم لا يقضي شهر رمضان الا وانت راضي عنا يالله',
];



let videosArray = [
    '',
    'https://www.youtube.com/embed/3DIAt81qzmY',
    'https://www.youtube.com/embed/06rLChOk03o',
    'https://www.youtube.com/embed/10TexGZIA5o',
    'https://www.youtube.com/embed/a92QC8dyDHE',
    'https://www.youtube.com/embed/TDGqVdO2ZXQ',
    'https://www.youtube.com/embed/1kL5o4QVWYY',
    'https://www.youtube.com/embed/JpgRnAlzUOM',
    'https://www.youtube.com/embed/loD8IkSlPzs',
    'https://www.youtube.com/embed/R9Jg5TQOMF4',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

let mainIndex = 6;
let date = new Date();
part1(mainIndex);
doaaFun(mainIndex);
videosFun(mainIndex);
function editContent(){
    setInterval(function(){
        day=date.getDate();
        mainIndex = mainIndex + 1;
        part1(mainIndex);
        doaaFun(mainIndex);
        videosFun(mainIndex);
    },72000000)
}

editContent();

// part 1
function part1(dayIndex){
    let quranIndex = [82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101];
    let next = document.querySelector('.carousel-control-prev');
    let prev = document.querySelector('.carousel-control-next');
    const URL = 'https://raw.githubusercontent.com/BetimShala/quran-images-api/master/quran-images/';
    let image = document.querySelector('.images img');
    quranIndex = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    dayIndex =dayIndex -1;
    for(let i = 0 ; i<20 ; i++){
        quranIndex[i]=quranIndex[i]+(dayIndex * 20);
    }
    image.src = URL+quranIndex[0]+'.png';
    let index = 0;

    next.onclick = function(){
        index = (index+1)%20;
        let varURL = String(quranIndex[index]) +'.png';
        let newURL = URL+varURL;
        image.src = newURL;
    }
    prev.onclick = function(){
        if(index != 0){
            index = (index-1)
        }
        let varURL = String(quranIndex[index]) +'.png';
        let newURL = URL+varURL;
        image.src = newURL;
}
}
function doaaFun(dayIndex){
    let doaa = document.querySelector('.doaa h4');
    doaa.textContent = doaaArray[mainIndex-1];
}
function videosFun(dayIndex){
    let video = document.querySelector('.minuteRamadan');
    video.src = videosArray[dayIndex-1];
}


