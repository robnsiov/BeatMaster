const subtitles = [
  {
    start: 10.5,
    end: 15.3,
    subtitle: "چطوری بانو هرزه پیر , مادر گرگ بچه شیر",
  },
  {
    start: 15.3,
    end: 20,
    subtitle: "چطوری اولین هفته دی , چطوری اخرین هفته تیر",
  },
  {
    start: 20,
    end: 24.2,
    subtitle: "تن پر از جای دستت چطوره , اون خنده دلچسبت چطوره",
  },
  {
    start: 24.2,
    end: 29.3,
    subtitle: "اون سره مستت چطوره , بهت بگم ناز شصتت چطوره",
  },
  {
    start: 29.3,
    end: 35.01,
    subtitle: "هر شبو می گیری ازم , میبینی اصن میبینی تنم و رد قدمش روش",
  },
  {
    start: 35.1,
    end: 39.06,
    subtitle: "میبینی اصن , نمیبینی فقط میگی نفست سوخت , شرمت کجاست ادبت کوش",
  },
  {
    start: 39.6,
    end: 47.08,
    subtitle: "بانوی هرزه خبرت اومد بغل گوشم , چقدر پی نفست بودن سوختن",
  },
  {
    start: 48.1,
    end: 51.1,
    subtitle: "میگن نمیفهمی از عاشقی , درست میگن؟",
  },
  {
    start: 52.4,
    end: 56,
    subtitle: "میگن تو کلا افسانه ای , درست میگن؟",
  },
  {
    start: 56.5,
    end: 60.2,
    subtitle: "میگن آرایشی ولی واسه من دنیایه آرامشی",
  },
  {
    start: 60.2,
    end: 64.8,
    subtitle: "میگن وقتی سره من رو بالشه تو , با خیلیا هم بالشی",
  },
  {
    start: 64.8,
    end: 65.8,
    subtitle: "درست میگن",
  },
  {
    start: 65.8,
    end: 72.6,
    subtitle:
      "از روزیکه اسیر پوتین شدی , هرروز بیشتر کوچیک شدی , شدی یک گربه کوچیک گشنه",
  },
  {
    start: 72.6,
    end: 75.1,
    subtitle: "همیشه دنبال نون میدویی , درست میگن",
  },
  {
    start: 76.01,
    end: 80.1,
    subtitle: "خودم مرد همسایه رو توی اتاقه تو دیدم",
  },
  {
    start: 83.6,
    end: 84.2,
    subtitle: "درست میگن",
  },
  {
    start: 84.6,
    end: 91.5,
    subtitle:
      "خبر اومد بانو از راه , خبر از بردن لبخندها , خبر از خیال تختم باش",
  },
  {
    start: 91.5,
    end: 95.08,
    subtitle: "خبر رسید از هم تخت هات , خبر اومد بانو بانو",
  },
  {
    start: 95.8,
    end: 98.2,
    subtitle: "خبر اومد بانو بانو",
  },
  {
    start: 98.7,
    end: 101,
    subtitle: "دو تا دستی که آرنجت از آفتاب می زنه دم",
  },
  {
    start: 99,
    end: 103.2,
    subtitle: "زانوهات رفیق چونتن نگار",
  },
  {
    start: 103.2,
    end: 105.3,
    subtitle: "یه ترسی از جهان به قدر این جهان",
  },
  {
    start: 105.03,
    end: 107.8,
    subtitle: "همیشه یه اتلو گیره تو گلوگاه گلو",
  },
  {
    start: 107.8,
    end: 111.6,
    subtitle: "شک بلیط دیدن منظره است , یه عینک خاکستری نیازه",
  },
  {
    start: 111.6,
    end: 116,
    subtitle: "طلای آفتاب و مس خاک کجای جهانه؟ یار کدوماست؟ بیارش",
  },
  {
    start: 116,
    end: 118,
    subtitle: "طبیعت و طبیعتت جنگ می کنن",
  },
  {
    start: 118,
    end: 120.6,
    subtitle: "وقتی سینه هات پیرهنتو تنگ می کنن",
  },
  {
    start: 120.06,
    end: 122.9,
    subtitle: "هزار تا شاعر منتظرن قلم بزنن",
  },
  {
    start: 122.9,
    end: 125.4,
    subtitle: "تو پیچ و خم زلفت قدم بزنن",
  },
  {
    start: 125.4,
    end: 129.8,
    subtitle: "نفست نفسمو تنگ می کنه , حال بدت حال منو بد می کنه",
  },
  {
    start: 129.8,
    end: 132.4,
    subtitle: "تو پیدا ترین راه گمراهیامی",
  },
  {
    start: 132.4,
    end: 134.5,
    subtitle: "تو اعتیاد ترک معتادیامی",
  },
  {
    start: 134.8,
    end: 136.6,
    subtitle: "اصلی ترین دلیل گستاخیامی",
  },
  {
    start: 136.6,
    end: 141.4,
    subtitle: "زخم رو صورت جغرافیامی , تو بهترین نقاش نقشی نگار",
  },
  {
    start: 141.4,
    end: 143.8,
    subtitle: "روی تن جهان من پخشی نگار",
  },
  {
    start: 143.8,
    end: 144.7,
    subtitle: "منم شاعرم",
  },
  {
    start: 144.7,
    end: 145.8,
    subtitle: "تو مخلوق من خالقم",
  },
  {
    start: 145.8,
    end: 148,
    subtitle: "زندگی تو تو دست قلم منه",
  },
  {
    start: 148,
    end: 150,
    subtitle: "نوشتمت از دیشب پونزده ساله می گذره",
  },
  {
    start: 150,
    end: 155.2,
    subtitle: "که نوزاد بودی، فراری دادمت از شهری که کودک نداشت",
  },
  {
    start: 155.2,
    end: 157.5,
    subtitle: "مگه من خواستم آوردی منو؟",
  },
  {
    start: 157.5,
    end: 159.8,
    subtitle: "اووو تا کجا بردی منو؟",
  },
  {
    start: 157.5,
    end: 164.2,
    subtitle: "تبر , کوره , سر می آوردی؟ می مردی یه خانوم ازم در می آوردی؟",
  },
  {
    start: 164.2,
    end: 169.1,
    subtitle:
      "من چیم کمتر از سیندرلاست؟ چی می شد لنگه ی کفشم تو یه قصرکی جا می موند؟",
  },
  {
    start: 169.1,
    end: 171.2,
    subtitle: "دستام با یه دستی تو قصه یکی می شد",
  },
  {
    start: 171.2,
    end: 175.8,
    subtitle:
      "تو یه لنگه از خودت جا گذاشتی سیندرلا , تو رویای کودکی بازی کن با سرما",
  },
  {
    start: 175.8,
    end: 180.5,
    subtitle: "چشم گذاشت در رو نمی دونمت , شاید بد خط نوشتمت نمی خوننت",
  },
  {
    start: 180.5,
    end: 185.7,
    subtitle:
      "دلیل خلق تو پیچیدست واسه خودم چه میدونم! شاید تو یه طرحی از خود من",
  },
  {
    start: 186.5,
    end: 189.9,
    subtitle: "از طرف راه ندیده ها , سرزمینی به اسم کشف",
  },
  {
    start: 189.9,
    end: 193.4,
    subtitle: "توان پذیرش یه صدا , حتی مخالفِ عقیده ها",
  },
  {
    start: 193.4,
    end: 198,
    subtitle: "از طرف شکاف لایه ها , اوج حضورم توی عمق عبورت",
  },
  {
    start: 199.2,
    end: 200.5,
    subtitle: "تو لمسِ پدیده هاست",
  },
  {
    start: 200.8,
    end: 204,
    subtitle: "از طرفِ کفه ی برابر , تا میون خنده ها نمیری",
  },
  {
    start: 204,
    end: 207.5,
    subtitle: "از طرفِ لبی پاره خط گون تا گوشاتو از رو صدا نگیری",
  },
  {
    start: 207.5,
    end: 211,
    subtitle: "از سمت جرعت حمل قامت , بیدارِ شبونه ی امانت",
  },
  {
    start: 211,
    end: 214.3,
    subtitle: "از سمت چیزی به اسم حقیقت , آخرین دیوارِ بی ضمانت",
  },
  {
    start: 214.3,
    end: 217,
    subtitle: "من اون فصل سردم وقت تعویض لباساتِ",
  },
  {
    start: 217,
    end: 221,
    subtitle: "قیچیِ باغبونم زمانی که وقت هرس ته برگاته",
  },
  {
    start: 221,
    end: 225,
    subtitle: "از طرف نیمه های خالی , نقشه ی فرداهای خیالی",
  },
  {
    start: 225,
    end: 228.2,
    subtitle: "از طرف درختای بی برگ , پایانِ محظ ِ نو نهالی",
  },
  {
    start: 224.5,
    end: 233.3,
    subtitle:
      "از طرف جنون با رضایت شروع بیماری تا سرایت , زخم شکنجه ای به اسمِ دنیا",
  },
  {
    start: 233.3,
    end: 238.4,
    subtitle: "از سمت تجربه تا روایت , واسه ی تو دلسرد باد دوره گرد",
  },
  {
    start: 238.7,
    end: 244.4,
    subtitle: "منو قبولم کن , این منم مرگ , منم آخرین ثانیه",
  },
  {
    start: 244.8,
    end: 248,
    subtitle: "آخرین , هرم گلویی که باقیه",
  },
  {
    start: 249.3,
    end: 252.4,
    subtitle: "تویی آخرین حس پایان وزن",
  },
  {
    start: 253,
    end: 255.2,
    subtitle: "من آخرین قافیه",
  },
  {
    start: 273.4,
    end: 276.2,
    subtitle: "نوبت چشمی که تر شه شماست",
  },
  {
    start: 276.2,
    end: 278.1,
    subtitle: "ملکوت آسمونا عرش شماست",
  },
  {
    start: 276.2,
    end: 282.08,
    subtitle: "اون ابرا که سقف ما بودن امروز میدونم که فرش شماست",
  },
  {
    start: 283.8,
    end: 288.3,
    subtitle: "خواهرا پول زندگی پدر مادرا هروئین خرابه ها",
  },
  {
    start: 288.3,
    end: 290.1,
    subtitle: "مهران درد",
  },
  {
    start: 292,
    end: 294.2,
    subtitle: "اوه مهران پول نامرد",
  },
  {
    start: 294.2,
    end: 298.7,
    subtitle: "همه گازای کپسول نامرد , هر چی سلول دور نامرد",
  },
  {
    start: 299,
    end: 304.5,
    subtitle: "همه خاکای نمور نامرد میبینی که زدن ها , زدن ها",
  },
  {
    start: 304.5,
    end: 310.4,
    subtitle: "میزنمشون تن لاغرتم من ها , همه دردای مادرتم من ها",
  },
  {
    start: 311.5,
    end: 313.7,
    subtitle: "فنا بریم هنوز؟ زوده یه کم",
  },
  {
    start: 313.7,
    end: 316.9,
    subtitle: "کجا بری تکی؟ رپ کن بی میکروفون شعر شو",
  },
  {
    start: 316.9,
    end: 321.7,
    subtitle: "یه ورس دیگه رو باید راه بری هنوز که , سر نمیکنه کسی",
  },
  {
    start: 321.7,
    end: 325,
    subtitle: "مثل من صدای پولای گنده گوش منو کر نمیکنه , نه",
  },
  {
    start: 325.8,
    end: 331,
    subtitle: "همه جراحتتم من ها , نعره می کشیم توو رو داورا مست",
  },
  {
    start: 331,
    end: 333.02,
    subtitle: "با میم مادران دود",
  },
  {
    start: 334.2,
    end: 337.9,
    subtitle: "می شیم به قد یه خاورمیانه خاوران کوه",
  },
  {
    start: 339.2,
    end: 342.5,
    subtitle: "زوره پاتم و نیست , دعوا داریم با برجا زمان نیست",
  },
  {
    start: 343,
    end: 347,
    subtitle: "بریدی یه خونه دیگه , مگه چی بوده تا الآن",
  },
  {
    start: 361.6,
    end: 365.6,
    subtitle: "گنجیشککایه بی نامو نشون , پرنده های بی هم زبون",
  },
  {
    start: 365.6,
    end: 370.4,
    subtitle: "بهتره دیگه بری خونتون , دردتون نخورد به دردمون",
  },
  {
    start: 370.4,
    end: 377.4,
    subtitle:
      "کم زدنتون بستنتون ها , کم تو قفس کردنتون , باز اومدین اینجا واسه پرواز",
  },
  {
    start: 377.4,
    end: 379.4,
    subtitle: "کم نکرده کردن گردنتون",
  },
  {
    start: 379.4,
    end: 384.1,
    subtitle: "از اینجا مثه غریبه برین , از این شهر واسه همیشه برین",
  },
  {
    start: 384.4,
    end: 389,
    subtitle: "برین دنباله یه شهر بهتر , شاید به امیده یه نتیجه برین",
  },
  {
    start: 389,
    end: 393.8,
    subtitle: "از سرتون , زخم بدنتون , غمتون , نوکتون , جیک جیکه صبحتون",
  },
  {
    start: 393.8,
    end: 397.3,
    subtitle: "ترسه تو شبتون , حبسه نفستون نفسم گرفت",
  },
  {
    start: 398.2,
    end: 405,
    subtitle:
      "برین یه جایی که ترسی نداره , واسه پرواز مرزی نداره , کلاغه ولگردی نداره",
  },
  {
    start: 399,
    end: 409.7,
    subtitle: "هیچ غمیو ترسی نداره , یه جایی که همه منظره ها خوبن",
  },
  {
    start: 409.7,
    end: 412.3,
    subtitle: "آدما وقتی وا میشن پنجره ها خوبن",
  },
  {
    start: 412.3,
    end: 418.4,
    subtitle: "کورو نگاه خوبن , لالو صدا خوبن , شاپرکا خوبن , شاهو گدا خوبن",
  },
  {
    start: 420,
    end: 421.6,
    subtitle: "من که دیگه پیرم , از این حرفا سیرم",
  },
  {
    start: 421.6,
    end: 424,
    subtitle: "یه جورایی گیرم , شما برین میرم",
  },
  {
    start: 424,
    end: 428.3,
    subtitle: "برین برین این قفسو بشکونین , برین سلام منو به نفس برسونین",
  },
  {
    start: 429,
    end: 433.1,
    subtitle:
      "شاید یه روز یا یه شبی هم رو داشتیم , یه جایی با هم قرار پریدن گذاشتیم",
  },
  {
    start: 434,
    end: 437.8,
    subtitle: "این خطا که میگن مرزن ندیدیم , بدونه هیچ التماسی ارزن خریدیم",
  },
  {
    start: 439.5,
    end: 442.5,
    subtitle: "تلخ نشینین , اینقدر سخت نگیرین , رو سیم برق نشینین",
  },
  {
    start: 442.7,
    end: 447,
    subtitle: "کوچیکین , ظریفین میمیرین , هر چه قدر عزیزین غریبین میبینین سخته",
  },
];
export default subtitles