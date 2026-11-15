// ============================================================
//  EXTRA DATABASE for the Learning Studio
//  To add content, copy any line, change the text, and save.
//  Words:     [word, pronunciation in Arabic letters, Arabic meaning, emoji, topic]
//             Topics: animal, food, nature, home, school, transport, body
//             (For the Arabic target, the word has no pronunciation "" and the meaning is in French.)
//  Sentences: [sentence in the target language, Arabic meaning]
//  Stories:   { start, ends: [3 endings] }
//  Manners:   { q, c: [choices], a: index of the correct choice }
//  Prayer quiz: same format as manners
// ============================================================
const DB = {
  words: {
    en: [
      ["horse","هورس","حصان","🐴","animal"], ["cow","كاو","بقرة","🐮","animal"],
      ["bird","بيرد","طائر","🐦","animal"], ["fish","فيش","سمكة","🐟","animal"],
      ["bread","برد","خبز","🍞","food"], ["milk","ميلك","حليب","🥛","food"],
      ["orange","أورانج","برتقالة","🍊","food"], ["rice","رايس","أرز","🍚","food"],
      ["tree","تري","شجرة","🌳","nature"], ["moon","مون","قمر","🌙","nature"],
      ["rain","رين","مطر","🌧️","nature"], ["mountain","ماونتن","جبل","⛰️","nature"],
      ["door","دور","باب","🚪","home"], ["bed","بد","سرير","🛏️","home"],
      ["book","بوك","كتاب","📚","school"], ["pencil","بنسل","قلم رصاص","✏️","school"],
      ["car","كار","سيارة","🚗","transport"], ["bus","باص","حافلة","🚌","transport"],
      ["hand","هاند","يد","✋","body"], ["eye","آي","عين","👁️","body"]
    ],
    fr: [
      ["cheval","شوفال","حصان","🐴","animal"], ["vache","فاش","بقرة","🐮","animal"],
      ["oiseau","وازو","طائر","🐦","animal"], ["poisson","بواسون","سمكة","🐟","animal"],
      ["pain","بان","خبز","🍞","food"], ["lait","لي","حليب","🥛","food"],
      ["orange","أورانج","برتقالة","🍊","food"], ["riz","ري","أرز","🍚","food"],
      ["arbre","أربر","شجرة","🌳","nature"], ["lune","لون","قمر","🌙","nature"],
      ["pluie","بلوي","مطر","🌧️","nature"], ["montagne","مونتان","جبل","⛰️","nature"],
      ["porte","بورت","باب","🚪","home"], ["lit","لي","سرير","🛏️","home"],
      ["livre","ليفر","كتاب","📚","school"], ["crayon","كريون","قلم رصاص","✏️","school"],
      ["voiture","فوتير","سيارة","🚗","transport"], ["bus","بوس","حافلة","🚌","transport"],
      ["main","مان","يد","✋","body"], ["œil","أوي","عين","👁️","body"]
    ],
    es: [
      ["caballo","كاباييو","حصان","🐴","animal"], ["vaca","باكا","بقرة","🐮","animal"],
      ["pájaro","باخارو","طائر","🐦","animal"], ["pez","بيس","سمكة","🐟","animal"],
      ["pan","بان","خبز","🍞","food"], ["leche","ليتشي","حليب","🥛","food"],
      ["naranja","نارانخا","برتقالة","🍊","food"], ["arroz","آروس","أرز","🍚","food"],
      ["árbol","أربول","شجرة","🌳","nature"], ["luna","لونا","قمر","🌙","nature"],
      ["lluvia","يوفيا","مطر","🌧️","nature"], ["montaña","مونتانيا","جبل","⛰️","nature"],
      ["puerta","بويرتا","باب","🚪","home"], ["cama","كاما","سرير","🛏️","home"],
      ["libro","ليبرو","كتاب","📚","school"], ["lápiz","لابيس","قلم رصاص","✏️","school"],
      ["coche","كوتشي","سيارة","🚗","transport"], ["autobús","آوتوبوس","حافلة","🚌","transport"],
      ["mano","مانو","يد","✋","body"], ["ojo","أوخو","عين","👁️","body"]
    ],
    de: [
      ["Pferd","فيرد","حصان","🐴","animal"], ["Kuh","كو","بقرة","🐮","animal"],
      ["Vogel","فوغل","طائر","🐦","animal"], ["Fisch","فيش","سمكة","🐟","animal"],
      ["Brot","بروت","خبز","🍞","food"], ["Milch","ميلش","حليب","🥛","food"],
      ["Orange","أورانجه","برتقالة","🍊","food"], ["Reis","رايس","أرز","🍚","food"],
      ["Baum","باوم","شجرة","🌳","nature"], ["Mond","مونت","قمر","🌙","nature"],
      ["Regen","ريغن","مطر","🌧️","nature"], ["Berg","بيرغ","جبل","⛰️","nature"],
      ["Tür","تور","باب","🚪","home"], ["Bett","بيت","سرير","🛏️","home"],
      ["Buch","بوخ","كتاب","📚","school"], ["Bleistift","بلايشتيفت","قلم رصاص","✏️","school"],
      ["Auto","آوتو","سيارة","🚗","transport"], ["Bus","بوس","حافلة","🚌","transport"],
      ["Hand","هاند","يد","✋","body"], ["Auge","آوغه","عين","👁️","body"]
    ],
    tr: [
      ["at","آت","حصان","🐴","animal"], ["inek","إينيك","بقرة","🐮","animal"],
      ["kuş","كوش","طائر","🐦","animal"], ["balık","باليك","سمكة","🐟","animal"],
      ["ekmek","إكمك","خبز","🍞","food"], ["süt","سوت","حليب","🥛","food"],
      ["portakal","بورتاكال","برتقالة","🍊","food"], ["pirinç","بيرينتش","أرز","🍚","food"],
      ["ağaç","آغاتش","شجرة","🌳","nature"], ["ay","آي","قمر","🌙","nature"],
      ["yağmur","ياغمور","مطر","🌧️","nature"], ["dağ","داغ","جبل","⛰️","nature"],
      ["kapı","كابي","باب","🚪","home"], ["yatak","ياتاك","سرير","🛏️","home"],
      ["kitap","كيتاب","كتاب","📚","school"], ["kalem","كالم","قلم","✏️","school"],
      ["araba","عربة","سيارة","🚗","transport"], ["otobüs","أوتوبوس","حافلة","🚌","transport"],
      ["el","إل","يد","✋","body"], ["göz","غوز","عين","👁️","body"]
    ],
    ru: [
      ["лошадь","لاشاد","حصان","🐴","animal"], ["корова","كوروفا","بقرة","🐮","animal"],
      ["птица","بتيتسا","طائر","🐦","animal"], ["рыба","ريبا","سمكة","🐟","animal"],
      ["хлеб","خليب","خبز","🍞","food"], ["молоко","مالاكو","حليب","🥛","food"],
      ["апельсин","أبيلسين","برتقالة","🍊","food"], ["рис","ريس","أرز","🍚","food"],
      ["дерево","دييريفا","شجرة","🌳","nature"], ["луна","لونا","قمر","🌙","nature"],
      ["дождь","دوجد","مطر","🌧️","nature"], ["гора","غورا","جبل","⛰️","nature"],
      ["дверь","دفيير","باب","🚪","home"], ["кровать","كروفات","سرير","🛏️","home"],
      ["книга","كنيغا","كتاب","📚","school"], ["карандаш","كارانداش","قلم رصاص","✏️","school"],
      ["машина","ماشينا","سيارة","🚗","transport"], ["автобус","أفتوبوس","حافلة","🚌","transport"],
      ["рука","روكا","يد","✋","body"], ["глаз","غلاس","عين","👁️","body"]
    ],
    ar: [
      ["حصان","","cheval","🐴","animal"], ["بقرة","","vache","🐮","animal"],
      ["طائر","","oiseau","🐦","animal"], ["سمكة","","poisson","🐟","animal"],
      ["خبز","","pain","🍞","food"], ["حليب","","lait","🥛","food"],
      ["برتقالة","","orange","🍊","food"], ["أرز","","riz","🍚","food"],
      ["شجرة","","arbre","🌳","nature"], ["قمر","","lune","🌙","nature"],
      ["مطر","","pluie","🌧️","nature"], ["جبل","","montagne","⛰️","nature"],
      ["باب","","porte","🚪","home"], ["سرير","","lit","🛏️","home"],
      ["كتاب","","livre","📚","school"], ["قلم","","stylo","✏️","school"],
      ["سيارة","","voiture","🚗","transport"], ["حافلة","","bus","🚌","transport"],
      ["يد","","main","✋","body"], ["عين","","œil","👁️","body"]
    ],
    it: [
      ["cavallo","كافالو","حصان","🐴","animal"], ["mucca","موكا","بقرة","🐮","animal"],
      ["uccello","أوتشيللو","طائر","🐦","animal"], ["pesce","بيشيه","سمكة","🐟","animal"],
      ["pane","بانيه","خبز","🍞","food"], ["latte","لاتّيه","حليب","🥛","food"],
      ["arancia","أرانتشا","برتقالة","🍊","food"], ["riso","ريزو","أرز","🍚","food"],
      ["albero","ألبيرو","شجرة","🌳","nature"], ["luna","لونا","قمر","🌙","nature"],
      ["pioggia","بيوجا","مطر","🌧️","nature"], ["montagna","مونتانيا","جبل","⛰️","nature"],
      ["porta","بورتا","باب","🚪","home"], ["letto","لتّو","سرير","🛏️","home"],
      ["libro","ليبرو","كتاب","📚","school"], ["matita","ماتيتا","قلم رصاص","✏️","school"],
      ["macchina","ماكينا","سيارة","🚗","transport"], ["autobus","آوتوبوس","حافلة","🚌","transport"],
      ["mano","مانو","يد","✋","body"], ["occhio","أوكيو","عين","👁️","body"]
    ]
  },

  sentences: {
    en: [["She has a red bag","عندها حقيبة حمراء"],["We go to school","نذهب إلى المدرسة"],["The bird can fly","الطائر يستطيع الطيران"],["I drink water","أشرب الماء"]],
    fr: [["Elle a un sac rouge","عندها حقيبة حمراء"],["Nous allons à l'école","نذهب إلى المدرسة"],["L'oiseau peut voler","الطائر يستطيع الطيران"],["Je bois de l'eau","أشرب الماء"]],
    es: [["Ella tiene una mochila roja","عندها حقيبة حمراء"],["Vamos a la escuela","نذهب إلى المدرسة"],["El pájaro puede volar","الطائر يستطيع الطيران"],["Bebo agua","أشرب الماء"]],
    de: [["Sie hat eine rote Tasche","عندها حقيبة حمراء"],["Wir gehen zur Schule","نذهب إلى المدرسة"],["Der Vogel kann fliegen","الطائر يستطيع الطيران"],["Ich trinke Wasser","أشرب الماء"]],
    tr: [["Onun kırmızı bir çantası var","عندها حقيبة حمراء"],["Okula gidiyoruz","نذهب إلى المدرسة"],["Kuş uçabilir","الطائر يستطيع الطيران"],["Su içiyorum","أشرب الماء"]],
    ru: [["У неё красная сумка","عندها حقيبة حمراء"],["Мы идём в школу","نذهب إلى المدرسة"],["Птица умеет летать","الطائر يستطيع الطيران"],["Я пью воду","أشرب الماء"]],
    ar: [["هذه حقيبة حمراء","C'est un sac rouge"],["نذهب إلى المدرسة","Nous allons à l'école"],["الطائر يطير","L'oiseau vole"],["أشرب الماء","Je bois de l'eau"]],
    it: [["Lei ha una borsa rossa","عندها حقيبة حمراء"],["Andiamo a scuola","نذهب إلى المدرسة"],["L'uccello può volare","الطائر يستطيع الطيران"],["Bevo acqua","أشرب الماء"]]
  },

  stories: [
    { start: "في الحديقة وجدتُ بذرة صغيرة تتكلم...",
      ends: ["قالت: ازرعني وسأكبر كشجرة عملاقة 🌱", "ابتسمت وقالت: شكراً لأنك لاحظتني 🌼", "ضحكت ثم قفزت إلى جيبي لتصبح صديقتي 🐞"] },
    { start: "ذات مساء، أضاء القمر طريقاً لم أره من قبل...",
      ends: ["مشيت فيه حتى وجدت مدينة من الحلوى 🍬", "تبعته حتى وصلت إلى نجمة تغني 🎵", "وجدت في نهايته باباً مكتوباً عليه: مرحباً يا مغامر 🚪"] },
    { start: "اشترى أبي سيارة جديدة، لكنها بدأت تتحدث معي...",
      ends: ["قالت: هيا بنا نسافر إلى الغيوم ☁️", "قالت: دعنا نساعد الحيوانات في الغابة 🦁", "قالت: سنتعلم معاً كيف نرسم خريطة الكون 🌌"] },
    { start: "في المدرسة، وجدت كتاباً يفتح نفسه بنفسه...",
      ends: ["خرجت منه شخصيات من كل الكتب 📖", "ظهرت منه خريطة إلى مكتبة سحرية 🏛️", "كان يحكي قصة طفل يشبهني تماماً ✨"] }
  ],

  manners: [
    { q: "ماذا نقول عند الدخول إلى البيت؟", c: ["السلام عليكم", "لا شيء"], a: 0 },
    { q: "كيف نتصرف مع الصغار؟", c: ["نرحم ونرشد", "نسخر منهم"], a: 0 },
    { q: "عند الأكل، ماذا نفعل؟", c: ["نقول بسم الله ونأكل بيميننا", "نأكل بشراهة"], a: 0 },
    { q: "هل نكذب على أصدقائنا؟", c: ["لا، الصدق أفضل", "نعم دائماً"], a: 0 },
    { q: "ماذا نفعل إذا رأينا زميلاً حزيناً؟", c: ["نواسيه ونساعده", "نضحك عليه"], a: 0 },
    { q: "كيف نحافظ على نظافة الأسنان؟", c: ["نفرشها كل يوم", "لا نفرشها أبداً"], a: 0 },
    { q: "متى نقول: جزاك الله خيراً؟", c: ["عندما يساعدنا أحد", "عندما نغضب"], a: 0 },
    { q: "ماذا نفعل بالماء؟", c: ["نحافظ عليه ولا نهدره", "نتركه يسيل كثيراً"], a: 0 }
  ],

  // Dream professions: names in each language, what the job does (Arabic), and its tools
  professions: [
    { emoji: "👨‍⚕️", what: "يفحص المرضى ويعالجهم", tools: ["🩺","💊"], names: { en: "Doctor", fr: "Médecin", es: "Médico", de: "Arzt", tr: "Doktor", ru: "Врач", ar: "طبيب", it: "Medico" } },
    { emoji: "🚗", what: "يقود السيارة بأمان ويوصل الناس", tools: ["🚗","🛣️"], names: { en: "Driver", fr: "Chauffeur", es: "Conductor", de: "Fahrer", tr: "Şoför", ru: "Водитель", ar: "سائق", it: "Autista" } },
    { emoji: "🧑‍⚕️", what: "يعتني بالمرضى ويعطيهم الدواء", tools: ["💉","🩹"], names: { en: "Nurse", fr: "Infirmier", es: "Enfermera", de: "Krankenpfleger", tr: "Hemşire", ru: "Медсестра", ar: "ممرض", it: "Infermiere" } },
    { emoji: "🦷", what: "يعتني بأسنان الناس ويعالجها", tools: ["🦷","🪥"], names: { en: "Dentist", fr: "Dentiste", es: "Dentista", de: "Zahnarzt", tr: "Diş hekimi", ru: "Стоматолог", ar: "طبيب أسنان", it: "Dentista" } },
    { emoji: "👩‍🏫", what: "يعلّم الطلاب ويساعدهم على التعلم", tools: ["📚","✏️"], names: { en: "Teacher", fr: "Professeur", es: "Maestra", de: "Lehrer", tr: "Öğretmen", ru: "Учитель", ar: "معلم", it: "Insegnante" } },
    { emoji: "⚽", what: "يلعب كرة القدم ويسجل الأهداف", tools: ["⚽","🥅"], names: { en: "Football player", fr: "Joueur de football", es: "Futbolista", de: "Fußballspieler", tr: "Futbolcu", ru: "Футболист", ar: "لاعب كرة القدم", it: "Calciatore" } },
    { emoji: "🏀", what: "يلعب كرة السلة ويسجل في السلة", tools: ["🏀","🏆"], names: { en: "Basketball player", fr: "Joueur de basket", es: "Jugador de baloncesto", de: "Basketballspieler", tr: "Basketbolcu", ru: "Баскетболист", ar: "لاعب كرة السلة", it: "Cestista" } },
    { emoji: "👷", what: "يصمم المباني والجسور والمشاريع", tools: ["📐","🛠️"], names: { en: "Engineer", fr: "Ingénieur", es: "Ingeniero", de: "Ingenieur", tr: "Mühendis", ru: "Инженер", ar: "مهندس", it: "Ingegnere" } },
    { emoji: "⚡", what: "يصمم الدوائر الكهربائية ويصلحها", tools: ["⚡","🔌"], names: { en: "Electrical engineer", fr: "Ingénieur électricien", es: "Ingeniero eléctrico", de: "Elektroingenieur", tr: "Elektrik mühendisi", ru: "Инженер-электрик", ar: "مهندس كهرباء", it: "Ingegnere elettrico" } },
    { emoji: "🔧", what: "يصمم الآلات والمحركات ويصلحها", tools: ["🔧","⚙️"], names: { en: "Mechanical engineer", fr: "Ingénieur mécanicien", es: "Ingeniero mecánico", de: "Maschinenbauingenieur", tr: "Makine mühendisi", ru: "Инженер-механик", ar: "مهندس ميكانيكي", it: "Ingegnere meccanico" } },
    { emoji: "✈️", what: "يقود الطائرة ويسافر بالركاب", tools: ["✈️","🧭"], names: { en: "Pilot", fr: "Pilote", es: "Piloto", de: "Pilot", tr: "Pilot", ru: "Пилот", ar: "طيار", it: "Pilota" } },
    { emoji: "👨‍🍳", what: "يطبخ ويصنع أطيب الوجبات", tools: ["🍳","🥄"], names: { en: "Chef", fr: "Cuisinier", es: "Cocinero", de: "Koch", tr: "Aşçı", ru: "Повар", ar: "طاهٍ", it: "Cuoco" } },
    { emoji: "🧑‍🌾", what: "يزرع الأرض ويعتني بالحيوانات", tools: ["🌾","🚜"], names: { en: "Farmer", fr: "Agriculteur", es: "Agricultor", de: "Bauer", tr: "Çiftçi", ru: "Фермер", ar: "فلاح", it: "Contadino" } },
    { emoji: "👮", what: "يحافظ على الأمن ويساعد الناس", tools: ["🚓","👮"], names: { en: "Police officer", fr: "Policier", es: "Policía", de: "Polizist", tr: "Polis", ru: "Полицейский", ar: "شرطي", it: "Poliziotto" } },
    { emoji: "🧑‍🚒", what: "يطفئ الحرائق وينقذ الناس", tools: ["🚒","🧯"], names: { en: "Firefighter", fr: "Pompier", es: "Bombero", de: "Feuerwehrmann", tr: "İtfaiyeci", ru: "Пожарный", ar: "رجل إطفاء", it: "Pompiere" } },
    { emoji: "🧑‍🔬", what: "يجري التجارب ويكتشف أشياء جديدة", tools: ["🔬","🧪"], names: { en: "Scientist", fr: "Scientifique", es: "Científico", de: "Wissenschaftler", tr: "Bilim insanı", ru: "Учёный", ar: "عالم", it: "Scienziato" } }
  ],

  // Family members: emoji, Arabic meaning, names in each language
  family: [
    { emoji: "👨", ar: "أب", names: { en: "Father", fr: "Père", es: "Padre", de: "Vater", tr: "Baba", ru: "Отец", ar: "أب", it: "Padre" } },
    { emoji: "👩", ar: "أم", names: { en: "Mother", fr: "Mère", es: "Madre", de: "Mutter", tr: "Anne", ru: "Мать", ar: "أم", it: "Madre" } },
    { emoji: "👦", ar: "أخ", names: { en: "Brother", fr: "Frère", es: "Hermano", de: "Bruder", tr: "Erkek kardeş", ru: "Брат", ar: "أخ", it: "Fratello" } },
    { emoji: "👧", ar: "أخت", names: { en: "Sister", fr: "Sœur", es: "Hermana", de: "Schwester", tr: "Kız kardeş", ru: "Сестра", ar: "أخت", it: "Sorella" } },
    { emoji: "👴", ar: "جد", names: { en: "Grandfather", fr: "Grand-père", es: "Abuelo", de: "Großvater", tr: "Dede", ru: "Дедушка", ar: "جد", it: "Nonno" } },
    { emoji: "👵", ar: "جدة", names: { en: "Grandmother", fr: "Grand-mère", es: "Abuela", de: "Großmutter", tr: "Babaanne", ru: "Бабушка", ar: "جدة", it: "Nonna" } },
    { emoji: "🧔", ar: "عم", names: { en: "Uncle", fr: "Oncle", es: "Tío", de: "Onkel", tr: "Amca", ru: "Дядя", ar: "عم", it: "Zio" } },
    { emoji: "👩‍🦱", ar: "عمة", names: { en: "Aunt", fr: "Tante", es: "Tía", de: "Tante", tr: "Teyze", ru: "Тётя", ar: "عمة", it: "Zia" } },
    { emoji: "👶", ar: "طفل", names: { en: "Baby", fr: "Bébé", es: "Bebé", de: "Baby", tr: "Bebek", ru: "Малыш", ar: "رضيع", it: "Bambino" } }
  ],

  prayerQuiz: [
    { q: "ما الصلاة التي تكون بعد غروب الشمس؟", c: ["الفجر", "المغرب", "الظهر"], a: 1 },
    { q: "ما أول صلاة في اليوم؟", c: ["الفجر", "العصر", "العشاء"], a: 0 },
    { q: "ما الصلاة التي تكون ليلاً؟", c: ["العشاء", "الظهر", "العصر"], a: 0 },
    { q: "ماذا نقول عند بداية الصلاة؟", c: ["الله أكبر", "سبحان الله", "الحمد لله"], a: 0 },
    { q: "ماذا نقول في الركوع؟", c: ["سبحان ربي العظيم", "سبحان ربي الأعلى", "رب اغفر لي"], a: 0 },
    { q: "ماذا نقول في السجود؟", c: ["سبحان ربي الأعلى", "سبحان ربي العظيم", "الله أكبر"], a: 0 }
  ]
};
