const starterHighFrequencyWords = [
  "the",
  "and",
  "said",
  "come",
  "what",
  "they",
  "have",
  "here",
  "there",
  "were",
  "little",
  "like",
  "some",
  "one",
  "could",
  "would",
  "people",
  "your",
  "from",
  "because",
];

const phonicsSkills = [
  {
    id: "short-a",
    title: "Short A",
    focus: "short a like in cat",
    summary: "Listen for the short a sound in the middle of simple words.",
    examples: [
      { word: "cat", note: "short a in the middle" },
      { word: "map", note: "short a in the middle" },
      { word: "jam", note: "short a in the middle" },
      { word: "flag", note: "short a inside a blend" },
    ],
    sentences: ["The cat sat on the mat.", "Dad had a black backpack."],
    quizQuestions: [
      { prompt: "Which word has the short a sound?", options: ["pen", "map", "cone", "sun"], answer: "map" },
      { prompt: "Which word has the same middle sound as cat?", options: ["jam", "bike", "rope", "seed"], answer: "jam" },
      { prompt: "Pick the short a word.", options: ["flag", "cube", "rain", "fish"], answer: "flag" },
    ],
  },
  {
    id: "short-e",
    title: "Short E",
    focus: "short e like in bed",
    summary: "Practice hearing the quick short e sound in the middle of words.",
    examples: [
      { word: "bed", note: "short e in the middle" },
      { word: "hen", note: "short e in the middle" },
      { word: "jet", note: "short e in the middle" },
      { word: "step", note: "short e inside a blend" },
    ],
    sentences: ["The red hen pecked the seed.", "Ben set the pen on the desk."],
    quizQuestions: [
      { prompt: "Which word has short e?", options: ["hen", "bike", "boat", "sun"], answer: "hen" },
      { prompt: "Which word sounds like bed in the middle?", options: ["step", "road", "coat", "light"], answer: "step" },
      { prompt: "Pick the short e word.", options: ["jet", "cube", "play", "farm"], answer: "jet" },
    ],
  },
  {
    id: "short-i",
    title: "Short I",
    focus: "short i like in pig",
    summary: "Listen for the short i sound in quick, short words.",
    examples: [
      { word: "pig", note: "short i in the middle" },
      { word: "fish", note: "short i in the middle" },
      { word: "sit", note: "short i in the middle" },
      { word: "stick", note: "short i inside a blend" },
    ],
    sentences: ["The pig is in the big pen.", "Sit still and zip the bag."],
    quizQuestions: [
      { prompt: "Which word has short i?", options: ["pig", "cake", "road", "sun"], answer: "pig" },
      { prompt: "Pick the word with the same vowel sound as fish.", options: ["stick", "boat", "seed", "park"], answer: "stick" },
      { prompt: "Which word belongs in short i practice?", options: ["sit", "hope", "train", "blue"], answer: "sit" },
    ],
  },
  {
    id: "short-o",
    title: "Short O",
    focus: "short o like in hop",
    summary: "Hear the short o sound in the middle of words like hot and frog.",
    examples: [
      { word: "hop", note: "short o in the middle" },
      { word: "sock", note: "short o in the middle" },
      { word: "frog", note: "short o in a blend" },
      { word: "shop", note: "short o after sh" },
    ],
    sentences: ["The frog sat on the log.", "Mom got a hot pot."],
    quizQuestions: [
      { prompt: "Which word has short o?", options: ["sock", "seed", "cube", "light"], answer: "sock" },
      { prompt: "Which word has the same vowel sound as hop?", options: ["frog", "rain", "bike", "turn"], answer: "frog" },
      { prompt: "Pick the short o word.", options: ["shop", "train", "sheep", "bird"], answer: "shop" },
    ],
  },
  {
    id: "short-u",
    title: "Short U",
    focus: "short u like in sun",
    summary: "Practice hearing the short u sound in words with quick middle vowels.",
    examples: [
      { word: "sun", note: "short u in the middle" },
      { word: "bug", note: "short u in the middle" },
      { word: "drum", note: "short u inside a blend" },
      { word: "truck", note: "short u inside a blend" },
    ],
    sentences: ["The bug sat under the sun.", "The truck went up the hill."],
    quizQuestions: [
      { prompt: "Which word has short u?", options: ["bug", "boat", "seed", "park"], answer: "bug" },
      { prompt: "Which word has the same middle sound as sun?", options: ["drum", "light", "rain", "home"], answer: "drum" },
      { prompt: "Pick the short u word.", options: ["truck", "cake", "coin", "shore"], answer: "truck" },
    ],
  },
  {
    id: "sneaky-h",
    title: "Sneaky H Teams",
    focus: "h joins another letter to make a new sound",
    summary: "Notice how h changes the sound in sh, ch, th, wh, and ph words.",
    examples: [
      { word: "ship", note: "sh says one sound" },
      { word: "chin", note: "ch says one sound" },
      { word: "thin", note: "th says one sound" },
      { word: "phone", note: "ph can say f" },
    ],
    sentences: ["The ship is near the shop.", "I can chat with the thin chimp."],
    quizQuestions: [
      { prompt: "Which word starts with sh?", options: ["ship", "chin", "thin", "phone"], answer: "ship" },
      { prompt: "Which word uses ph to say f?", options: ["whale", "phone", "chin", "shell"], answer: "phone" },
      { prompt: "Pick the word with th.", options: ["thin", "shop", "cheese", "whip"], answer: "thin" },
    ],
  },
  {
    id: "beginning-blends",
    title: "Beginning Blends",
    focus: "two starting sounds slide together",
    summary: "Practice hearing both sounds at the beginning of a word.",
    examples: [
      { word: "flag", note: "f and l blend together" },
      { word: "crab", note: "c and r blend together" },
      { word: "slide", note: "s and l blend together" },
      { word: "stop", note: "s and t blend together" },
    ],
    sentences: ["The crab hid under the rock.", "Slide the blue flag down."],
    quizQuestions: [
      { prompt: "Which word starts with the blend cr?", options: ["stop", "flag", "crab", "play"], answer: "crab" },
      { prompt: "Pick the word with a beginning blend.", options: ["slide", "apple", "under", "open"], answer: "slide" },
      { prompt: "Which word starts with st?", options: ["drum", "stop", "green", "fork"], answer: "stop" },
    ],
  },
  {
    id: "ending-blends",
    title: "Ending Blends",
    focus: "two ending sounds stay close together",
    summary: "Listen for the final sounds in words like hand, fast, and nest.",
    examples: [
      { word: "milk", note: "lk at the end" },
      { word: "hand", note: "nd at the end" },
      { word: "fast", note: "st at the end" },
      { word: "nest", note: "st at the end" },
    ],
    sentences: ["I held your hand on the path.", "The bird made a nest fast."],
    quizQuestions: [
      { prompt: "Which word ends with nd?", options: ["milk", "hand", "nest", "flag"], answer: "hand" },
      { prompt: "Pick the word with an ending blend.", options: ["fast", "apple", "open", "zebra"], answer: "fast" },
      { prompt: "Which word ends with lk?", options: ["milk", "rain", "chin", "home"], answer: "milk" },
    ],
  },
  {
    id: "double-endings",
    title: "CK, FF, LL, SS",
    focus: "some short-vowel words end with double letters",
    summary: "Notice common endings after a short vowel sound.",
    examples: [
      { word: "duck", note: "ck after a short vowel" },
      { word: "puff", note: "ff after a short vowel" },
      { word: "bell", note: "ll after a short vowel" },
      { word: "grass", note: "ss after a short vowel" },
    ],
    sentences: ["The duck sat by the grass.", "Ring the bell and huff and puff."],
    quizQuestions: [
      { prompt: "Which word ends with ck?", options: ["duck", "bell", "grass", "puff"], answer: "duck" },
      { prompt: "Pick the word with ll at the end.", options: ["bell", "duck", "ship", "train"], answer: "bell" },
      { prompt: "Which word ends with ss?", options: ["cube", "grass", "bird", "float"], answer: "grass" },
    ],
  },
  {
    id: "magic-e",
    title: "Magic E",
    focus: "silent e makes the vowel say its name",
    summary: "Watch how a short vowel word changes when silent e is added.",
    examples: [
      { word: "cape", note: "a says its name" },
      { word: "bike", note: "i says its name" },
      { word: "home", note: "o says its name" },
      { word: "cube", note: "u says its name" },
    ],
    sentences: ["The bike is beside the gate.", "I hope to ride home late."],
    quizQuestions: [
      { prompt: "Which word uses magic e?", options: ["cap", "home", "hop", "cub"], answer: "home" },
      { prompt: "Pick the word where i says its name.", options: ["bike", "fish", "hill", "stick"], answer: "bike" },
      { prompt: "Which word changed from cap to cape?", options: ["cape", "clip", "cot", "mud"], answer: "cape" },
    ],
  },
  {
    id: "bossy-r",
    title: "Bossy R",
    focus: "r changes the vowel sound",
    summary: "Listen for r-controlled vowel patterns like ar, or, ir, er, and ur.",
    examples: [
      { word: "car", note: "ar pattern" },
      { word: "fork", note: "or pattern" },
      { word: "bird", note: "ir pattern" },
      { word: "turn", note: "ur pattern" },
    ],
    sentences: ["The bird flew over the park.", "Turn the cart by the barn."],
    quizQuestions: [
      { prompt: "Which word has ar?", options: ["car", "fork", "bird", "turn"], answer: "car" },
      { prompt: "Pick the word with the or sound.", options: ["fork", "ship", "rain", "cube"], answer: "fork" },
      { prompt: "Which word has the er sound made by ir?", options: ["bird", "boat", "smile", "flag"], answer: "bird" },
    ],
  },
  {
    id: "vowel-teams",
    title: "Vowel Teams",
    focus: "two vowels work together to make one sound",
    summary: "Practice common long-vowel teams like ai, ee, oa, and ay.",
    examples: [
      { word: "rain", note: "ai says long a" },
      { word: "seed", note: "ee says long e" },
      { word: "boat", note: "oa says long o" },
      { word: "play", note: "ay says long a" },
    ],
    sentences: ["The boat will float in the rain.", "We can play in the green field."],
    quizQuestions: [
      { prompt: "Which word has oa?", options: ["seed", "rain", "boat", "play"], answer: "boat" },
      { prompt: "Pick the word with ee.", options: ["tree", "frog", "drum", "park"], answer: "tree" },
      { prompt: "Which word has ay at the end?", options: ["road", "train", "play", "chin"], answer: "play" },
    ],
  },
  {
    id: "tricky-y",
    title: "Tricky Y",
    focus: "y can sound like long i or long e",
    summary: "Practice hearing when y says /i/ and when it says /e/ at the end of a word.",
    examples: [
      { word: "my", note: "y says long i" },
      { word: "fly", note: "y says long i" },
      { word: "happy", note: "y says long e" },
      { word: "sunny", note: "y says long e" },
    ],
    sentences: ["My happy puppy ran by.", "The sunny sky is bright."],
    quizQuestions: [
      { prompt: "Which word ends with y saying long e?", options: ["fly", "my", "happy", "cry"], answer: "happy" },
      { prompt: "Pick the word where y says long i.", options: ["sunny", "funny", "fly", "puppy"], answer: "fly" },
      { prompt: "Which word has y saying long e?", options: ["lucky", "sky", "dry", "shy"], answer: "lucky" },
    ],
  },
  {
    id: "glued-sounds",
    title: "Glued Sounds",
    focus: "ang, ing, ong, and ung stay together",
    summary: "These chunks are often taught as glued sounds because they stay close together.",
    examples: [
      { word: "ring", note: "ing chunk" },
      { word: "hang", note: "ang chunk" },
      { word: "song", note: "ong chunk" },
      { word: "lung", note: "ung chunk" },
    ],
    sentences: ["Sing a song and ring the bell.", "Hang the string on the hook."],
    quizQuestions: [
      { prompt: "Which word has ing?", options: ["hang", "ring", "song", "lung"], answer: "ring" },
      { prompt: "Pick the word with ong.", options: ["song", "flag", "tree", "bike"], answer: "song" },
      { prompt: "Which word has ang?", options: ["hang", "ship", "cloud", "park"], answer: "hang" },
    ],
  },
  {
    id: "oi-oy",
    title: "OI And OY",
    focus: "oi is usually in the middle and oy is often at the end",
    summary: "Hear the same sound in coin, soil, boy, and toy.",
    examples: [
      { word: "coin", note: "oi in the middle" },
      { word: "soil", note: "oi in the middle" },
      { word: "boy", note: "oy at the end" },
      { word: "toy", note: "oy at the end" },
    ],
    sentences: ["The boy found a coin.", "The toy was in the soil."],
    quizQuestions: [
      { prompt: "Which word uses oi?", options: ["boy", "toy", "coin", "day"], answer: "coin" },
      { prompt: "Pick the word that ends with oy.", options: ["soil", "joy", "boil", "coin"], answer: "joy" },
      { prompt: "Which word has the same sound as boy?", options: ["train", "toy", "seed", "home"], answer: "toy" },
    ],
  },
  {
    id: "ou-ow",
    title: "OU And OW",
    focus: "ou and ow can both say the ou sound",
    summary: "Practice the loud ou sound in words like cloud, shout, cow, and brown.",
    examples: [
      { word: "cloud", note: "ou sound in the middle" },
      { word: "shout", note: "ou sound in the middle" },
      { word: "cow", note: "ow sound at the end" },
      { word: "brown", note: "ow sound in the middle" },
    ],
    sentences: ["The brown cow stood by the house.", "Do not shout in the crowd."],
    quizQuestions: [
      { prompt: "Which word has ou?", options: ["cow", "cloud", "toy", "seed"], answer: "cloud" },
      { prompt: "Pick the word with ow saying ou.", options: ["brown", "snow", "grow", "rain"], answer: "brown" },
      { prompt: "Which word has the same vowel sound as shout?", options: ["cow", "boat", "tree", "bird"], answer: "cow" },
    ],
  },
  {
    id: "soft-c-soft-g",
    title: "Soft C And Soft G",
    focus: "c can say s and g can say j before e, i, and y",
    summary: "Practice softer sounds in words like city, cent, gem, and giant.",
    examples: [
      { word: "city", note: "soft c says s" },
      { word: "cent", note: "soft c says s" },
      { word: "gem", note: "soft g says j" },
      { word: "giant", note: "soft g says j" },
    ],
    sentences: ["The giant gem is in the city.", "I found one cent on the path."],
    quizQuestions: [
      { prompt: "Which word has soft c?", options: ["cat", "city", "cup", "clap"], answer: "city" },
      { prompt: "Pick the word with soft g.", options: ["goat", "gum", "gem", "grab"], answer: "gem" },
      { prompt: "Which word starts with soft c?", options: ["cent", "cake", "corn", "crab"], answer: "cent" },
    ],
  },
  {
    id: "ending-le",
    title: "Ending LE",
    focus: "many words end with consonant plus le",
    summary: "Notice how the ending sounds like ul in words like table and candle.",
    examples: [
      { word: "table", note: "ble ending" },
      { word: "candle", note: "dle ending" },
      { word: "little", note: "tle ending" },
      { word: "puzzle", note: "zle ending" },
    ],
    sentences: ["Set the candle on the table.", "The little puzzle was simple."],
    quizQuestions: [
      { prompt: "Which word ends with le?", options: ["table", "train", "storm", "bright"], answer: "table" },
      { prompt: "Pick the word with the same ending style as candle.", options: ["little", "snow", "frog", "boat"], answer: "little" },
      { prompt: "Which word belongs in ending le practice?", options: ["puzzle", "seed", "coin", "park"], answer: "puzzle" },
    ],
  },
  {
    id: "oo-sounds",
    title: "OO Sounds",
    focus: "oo can sound like moon or book",
    summary: "Practice the long oo and short oo sounds in common words.",
    examples: [
      { word: "moon", note: "long oo" },
      { word: "food", note: "long oo" },
      { word: "book", note: "short oo" },
      { word: "foot", note: "short oo" },
    ],
    sentences: ["Look at the moon over the school.", "Put the book by your foot."],
    quizQuestions: [
      { prompt: "Which word has long oo?", options: ["book", "foot", "moon", "rock"], answer: "moon" },
      { prompt: "Pick the word with short oo.", options: ["food", "book", "train", "hope"], answer: "book" },
      { prompt: "Which word has the same vowel sound as moon?", options: ["foot", "food", "bird", "cow"], answer: "food" },
    ],
  },
  {
    id: "aw-au",
    title: "AW And AU",
    focus: "aw and au often say the same broad vowel sound",
    summary: "Listen for the same sound in saw, claw, August, and pause.",
    examples: [
      { word: "saw", note: "aw at the end" },
      { word: "claw", note: "aw at the end" },
      { word: "August", note: "au at the start" },
      { word: "pause", note: "au in the middle" },
    ],
    sentences: ["I saw the claw mark on the box.", "Pause in August when it is hot."],
    quizQuestions: [
      { prompt: "Which word uses aw?", options: ["saw", "pause", "coin", "home"], answer: "saw" },
      { prompt: "Pick the word with au.", options: ["claw", "August", "seed", "bird"], answer: "August" },
      { prompt: "Which word has the same vowel sound as saw?", options: ["pause", "tree", "cube", "ship"], answer: "pause" },
    ],
  },
  {
    id: "kn-wr",
    title: "KN And WR",
    focus: "some beginning letters stay silent",
    summary: "Learn that kn can start with a silent k and wr can start with a silent w.",
    examples: [
      { word: "knee", note: "k is silent" },
      { word: "knock", note: "k is silent" },
      { word: "write", note: "w is silent" },
      { word: "wrap", note: "w is silent" },
    ],
    sentences: ["Write your name on the paper.", "Knock on the door with your knee bent."],
    quizQuestions: [
      { prompt: "Which word starts with silent k?", options: ["knee", "kite", "cake", "keep"], answer: "knee" },
      { prompt: "Pick the word with silent w.", options: ["white", "write", "wish", "wagon"], answer: "write" },
      { prompt: "Which word belongs in silent-letter practice?", options: ["wrap", "frog", "moon", "ship"], answer: "wrap" },
    ],
  },
];

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "short-vowels", label: "Short Vowels" },
  { id: "teams-blends", label: "Teams And Blends" },
  { id: "long-vowels", label: "Long Vowels" },
  { id: "tricky-patterns", label: "Tricky Patterns" },
  { id: "word-endings", label: "Word Endings" },
];

const state = {
  page: "home",
  activeSkillId: phonicsSkills[0].id,
  skillFilter: "all",
  lessonTab: "learn",
  wordVault: [],
  currentWordIndex: 0,
  exampleIndexBySkill: {},
  sentenceIndexBySkill: {},
  quizStateBySkill: {},
};

const storageKeys = {
  words: "leo-learns-word-vault",
  activeSkill: "leo-learns-active-skill",
};

const elements = {
  pageTitle: document.querySelector("#page-title"),
  headerSubtitle: document.querySelector("#header-subtitle"),
  pages: [...document.querySelectorAll(".page")],
  navButtons: [...document.querySelectorAll(".nav-btn")],
  pageLinks: [...document.querySelectorAll("[data-page-link]")],
  quickContinue: document.querySelector("#quick-continue"),
  homeStartSkill: document.querySelector("#home-start-skill"),
  skillCount: document.querySelector("#skill-count"),
  homeCurrentSkill: document.querySelector("#home-current-skill"),
  homeCurrentSummary: document.querySelector("#home-current-summary"),
  homeCurrentCategory: document.querySelector("#home-current-category"),
  homePatternScore: document.querySelector("#home-pattern-score"),
  homeWordCount: document.querySelector("#home-word-count"),
  skillFilters: document.querySelector("#skill-filters"),
  skillsList: document.querySelector("#skills-list"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonSummary: document.querySelector("#lesson-summary"),
  lessonCategoryChip: document.querySelector("#lesson-category-chip"),
  lessonFocusChip: document.querySelector("#lesson-focus-chip"),
  lessonTabs: [...document.querySelectorAll("[data-lesson-tab]")],
  lessonPanels: [...document.querySelectorAll("[data-lesson-panel]")],
  learnFocusTitle: document.querySelector("#learn-focus-title"),
  learnDescription: document.querySelector("#learn-description"),
  learnTip: document.querySelector("#learn-tip"),
  learnTags: document.querySelector("#learn-tags"),
  hearSkill: document.querySelector("#hear-skill"),
  examplePosition: document.querySelector("#example-position"),
  exampleWord: document.querySelector("#example-word"),
  exampleNote: document.querySelector("#example-note"),
  hearExample: document.querySelector("#hear-example"),
  prevExample: document.querySelector("#prev-example"),
  nextExample: document.querySelector("#next-example"),
  sentencePosition: document.querySelector("#sentence-position"),
  sentenceText: document.querySelector("#sentence-text"),
  hearSentence: document.querySelector("#hear-sentence"),
  prevSentence: document.querySelector("#prev-sentence"),
  nextSentence: document.querySelector("#next-sentence"),
  quizStatus: document.querySelector("#quiz-status"),
  quizPrompt: document.querySelector("#quiz-prompt"),
  quizOptions: document.querySelector("#quiz-options"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  nextQuestion: document.querySelector("#next-question"),
  restartCheck: document.querySelector("#restart-check"),
  wordProgress: document.querySelector("#word-progress"),
  currentWord: document.querySelector("#current-word"),
  wordStageNote: document.querySelector("#word-stage-note"),
  hearCurrentWord: document.querySelector("#hear-current-word"),
  prevWord: document.querySelector("#prev-word"),
  nextWord: document.querySelector("#next-word"),
  shuffleWords: document.querySelector("#shuffle-words"),
  wordPreview: document.querySelector("#word-preview"),
  wordListInput: document.querySelector("#word-list-input"),
  saveWordList: document.querySelector("#save-word-list"),
  loadDefaultList: document.querySelector("#load-default-list"),
  parentFeedback: document.querySelector("#parent-feedback"),
};

function getSkill(skillId = state.activeSkillId) {
  return phonicsSkills.find((skill) => skill.id === skillId) ?? phonicsSkills[0];
}

function getSkillCategoryId(skillId) {
  if (["short-a", "short-e", "short-i", "short-o", "short-u"].includes(skillId)) {
    return "short-vowels";
  }

  if (["sneaky-h", "beginning-blends", "ending-blends", "glued-sounds"].includes(skillId)) {
    return "teams-blends";
  }

  if (["magic-e", "vowel-teams", "oi-oy", "ou-ow", "oo-sounds", "aw-au"].includes(skillId)) {
    return "long-vowels";
  }

  if (["bossy-r", "tricky-y", "soft-c-soft-g", "kn-wr"].includes(skillId)) {
    return "tricky-patterns";
  }

  if (["double-endings", "ending-le"].includes(skillId)) {
    return "word-endings";
  }

  return "all";
}

function getSkillCategoryLabel(skillId) {
  const categoryId = getSkillCategoryId(skillId);
  return skillCategories.find((category) => category.id === categoryId)?.label ?? "Phonics Skill";
}

function ensureSkillState(skillId) {
  if (typeof state.exampleIndexBySkill[skillId] !== "number") {
    state.exampleIndexBySkill[skillId] = 0;
  }

  if (typeof state.sentenceIndexBySkill[skillId] !== "number") {
    state.sentenceIndexBySkill[skillId] = 0;
  }

  if (!state.quizStateBySkill[skillId]) {
    state.quizStateBySkill[skillId] = {
      index: 0,
      correct: 0,
      answered: false,
      finished: false,
      lastScore: null,
    };
  }

  return state.quizStateBySkill[skillId];
}

function pickVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en-us")) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ??
    null
  );
}

function speakText(text, rate = 0.78) {
  if (!window.speechSynthesis) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickVoice();
  utterance.rate = rate;
  utterance.pitch = 1;

  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function setFeedback(element, message = "", type = "") {
  element.textContent = message;
  element.classList.remove("success", "error");

  if (type) {
    element.classList.add(type);
  }
}

function normalizeWords(rawText) {
  return [...new Set(
    rawText
      .split(/[\s,]+/)
      .map((word) => word.trim().toLowerCase())
      .filter(Boolean),
  )];
}

function saveWordVault(words) {
  localStorage.setItem(storageKeys.words, JSON.stringify(words));
}

function loadWordVault() {
  const saved = localStorage.getItem(storageKeys.words);

  if (!saved) {
    return [...starterHighFrequencyWords];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : [...starterHighFrequencyWords];
  } catch (error) {
    return [...starterHighFrequencyWords];
  }
}

function saveActiveSkill(skillId) {
  localStorage.setItem(storageKeys.activeSkill, skillId);
}

function loadActiveSkill() {
  const savedSkillId = localStorage.getItem(storageKeys.activeSkill);
  return phonicsSkills.some((skill) => skill.id === savedSkillId) ? savedSkillId : phonicsSkills[0].id;
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function getScoreLabel(skillId = state.activeSkillId) {
  const quizState = ensureSkillState(skillId);
  const total = getSkill(skillId).quizQuestions.length;

  if (quizState.lastScore === null) {
    return "No score yet";
  }

  return `${quizState.lastScore}/${total} correct`;
}

function updateHeader() {
  const skill = getSkill();
  const pageConfig = {
    home: { title: "Home", subtitle: "One clear skill at a time." },
    skills: { title: "Skills", subtitle: "Choose the reading pattern you want to teach." },
    lesson: { title: skill.title, subtitle: "Learn, practice, and check the same exact skill." },
    words: { title: "Words", subtitle: "Simple high-frequency word practice." },
    parent: { title: "Parent", subtitle: "Update the word list on this device." },
  };

  elements.pageTitle.textContent = pageConfig[state.page]?.title ?? "Leo Learns!";
  elements.headerSubtitle.textContent = pageConfig[state.page]?.subtitle ?? "";
  elements.quickContinue.textContent = `Current: ${skill.title}`;
}

function navigate(pageName) {
  state.page = pageName;

  elements.pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageName);
  });

  elements.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pageLink === pageName);
  });

  updateHeader();
  renderHome();

  if (pageName === "skills") {
    renderSkillFilters();
    renderSkillsList();
  }

  if (pageName === "lesson") {
    renderLesson();
  }

  if (pageName === "words") {
    renderWordCards();
  }

  if (pageName === "parent") {
    elements.wordListInput.value = state.wordVault.join("\n");
  }
}

function setLessonTab(tabName) {
  state.lessonTab = tabName;

  elements.lessonTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.lessonTab === tabName);
  });

  elements.lessonPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.lessonPanel === tabName);
  });
}

function openSkill(skillId, tabName = "learn") {
  state.activeSkillId = skillId;
  saveActiveSkill(skillId);
  ensureSkillState(skillId);
  setLessonTab(tabName);
  navigate("lesson");
}

function renderHome() {
  const skill = getSkill();
  elements.skillCount.textContent = `${phonicsSkills.length} skills`;
  elements.homeCurrentSkill.textContent = skill.title;
  elements.homeCurrentSummary.textContent = skill.summary;
  elements.homeCurrentCategory.textContent = getSkillCategoryLabel(skill.id);
  elements.homePatternScore.textContent = `Pattern Check: ${getScoreLabel(skill.id)}`;
  elements.homeWordCount.textContent = `${state.wordVault.length} saved ${state.wordVault.length === 1 ? "word" : "words"}`;
}

function renderSkillFilters() {
  elements.skillFilters.innerHTML = "";

  skillCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${state.skillFilter === category.id ? " active" : ""}`;
    button.textContent = category.label;
    button.addEventListener("click", () => {
      state.skillFilter = category.id;
      renderSkillFilters();
      renderSkillsList();
    });
    elements.skillFilters.appendChild(button);
  });
}

function renderSkillsList() {
  elements.skillsList.innerHTML = "";

  const filteredSkills = phonicsSkills.filter((skill) => {
    if (state.skillFilter === "all") {
      return true;
    }
    return getSkillCategoryId(skill.id) === state.skillFilter;
  });

  filteredSkills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-card-header">
        <div>
          <p class="section-label">${getSkillCategoryLabel(skill.id)}</p>
          <h3 class="skill-card-title">${skill.title}</h3>
        </div>
        <div class="lesson-meta">
          <span class="meta-chip">${skill.focus}</span>
          <span class="meta-chip">${getScoreLabel(skill.id)}</span>
        </div>
      </div>
      <p>${skill.summary}</p>
      <div class="skill-examples">
        ${skill.examples.slice(0, 3).map((example) => `<span class="skill-example-pill">${example.word}</span>`).join("")}
      </div>
      <button class="skill-select-btn" type="button">Open Lesson</button>
    `;

    card.querySelector(".skill-select-btn").addEventListener("click", () => {
      openSkill(skill.id, "learn");
    });

    elements.skillsList.appendChild(card);
  });
}

function renderLearnPanel(skill) {
  elements.learnFocusTitle.textContent = skill.focus;
  elements.learnDescription.textContent = skill.summary;
  elements.learnTip.textContent = "Start by saying the example words yourself. Then tap Hear Focus Words to compare the pattern.";
  elements.learnTags.innerHTML = skill.examples
    .map((example) => `<span class="tag-pill">${example.word}: ${example.note}</span>`)
    .join("");
}

function renderPracticePanel(skill) {
  const exampleIndex = state.exampleIndexBySkill[skill.id] % skill.examples.length;
  const sentenceIndex = state.sentenceIndexBySkill[skill.id] % skill.sentences.length;
  const currentExample = skill.examples[exampleIndex];
  const currentSentence = skill.sentences[sentenceIndex];

  elements.examplePosition.textContent = `Example ${exampleIndex + 1} of ${skill.examples.length}`;
  elements.exampleWord.textContent = currentExample.word;
  elements.exampleNote.textContent = `${currentExample.note}. Leo says the word first, then taps Hear Word.`;
  elements.sentencePosition.textContent = `Sentence ${sentenceIndex + 1} of ${skill.sentences.length}`;
  elements.sentenceText.textContent = currentSentence;
}

function renderCheckPanel(skill) {
  const quizState = ensureSkillState(skill.id);

  if (quizState.finished) {
    elements.quizStatus.textContent = `Finished: ${quizState.lastScore}/${skill.quizQuestions.length} correct`;
    elements.quizPrompt.textContent = "Nice work. You can restart this Pattern Check or go back and practice the lesson again.";
    elements.quizOptions.innerHTML = "";
    setFeedback(elements.quizFeedback, "", "");
    elements.nextQuestion.textContent = "Start Again";
    elements.nextQuestion.disabled = false;
    return;
  }

  const question = skill.quizQuestions[quizState.index];
  elements.quizStatus.textContent = `Question ${quizState.index + 1} of ${skill.quizQuestions.length}`;
  elements.quizPrompt.textContent = question.prompt;
  elements.quizOptions.innerHTML = "";
  setFeedback(elements.quizFeedback, "", "");
  elements.nextQuestion.textContent = quizState.index === skill.quizQuestions.length - 1 ? "See Score" : "Next Question";
  elements.nextQuestion.disabled = !quizState.answered;

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      answerQuestion(option);
    });
    elements.quizOptions.appendChild(button);
  });
}

function renderLesson() {
  const skill = getSkill();
  ensureSkillState(skill.id);
  elements.lessonTitle.textContent = skill.title;
  elements.lessonSummary.textContent = skill.summary;
  elements.lessonCategoryChip.textContent = getSkillCategoryLabel(skill.id);
  elements.lessonFocusChip.textContent = skill.focus;
  renderLearnPanel(skill);
  renderPracticePanel(skill);
  renderCheckPanel(skill);
  setLessonTab(state.lessonTab);
}

function resetQuiz(skillId = state.activeSkillId) {
  const quizState = ensureSkillState(skillId);
  quizState.index = 0;
  quizState.correct = 0;
  quizState.answered = false;
  quizState.finished = false;
  renderLesson();
}

function answerQuestion(option) {
  const skill = getSkill();
  const quizState = ensureSkillState(skill.id);

  if (quizState.finished || quizState.answered) {
    return;
  }

  const question = skill.quizQuestions[quizState.index];
  const optionButtons = [...elements.quizOptions.querySelectorAll(".quiz-option")];
  const selectedButton = optionButtons.find((button) => button.textContent === option);

  if (!selectedButton) {
    return;
  }

  if (option === question.answer) {
    selectedButton.classList.add("correct");
    quizState.correct += 1;
    quizState.answered = true;
    setFeedback(elements.quizFeedback, `${option} is correct.`, "success");
    elements.nextQuestion.disabled = false;
    speakText(option, 0.72);
  } else {
    selectedButton.classList.add("wrong");
    setFeedback(elements.quizFeedback, "Try again. Look for the same pattern you practiced.", "error");
  }
}

function advanceQuestion() {
  const skill = getSkill();
  const quizState = ensureSkillState(skill.id);

  if (quizState.finished) {
    resetQuiz(skill.id);
    return;
  }

  if (!quizState.answered) {
    return;
  }

  if (quizState.index === skill.quizQuestions.length - 1) {
    quizState.lastScore = quizState.correct;
    quizState.finished = true;
    quizState.answered = false;
    renderHome();
    renderLesson();
    return;
  }

  quizState.index += 1;
  quizState.answered = false;
  renderLesson();
}

function renderWordCards() {
  const total = state.wordVault.length;

  if (!total) {
    elements.wordProgress.textContent = "No words loaded";
    elements.currentWord.textContent = "Add words in Parent";
    elements.wordStageNote.textContent = "Save a word list first, then come back here for clean word practice.";
    elements.wordPreview.innerHTML = `<div class="preview-item">No saved words yet</div>`;
    return;
  }

  const safeIndex = ((state.currentWordIndex % total) + total) % total;
  const currentWord = state.wordVault[safeIndex];
  elements.wordProgress.textContent = `Word ${safeIndex + 1} of ${total}`;
  elements.currentWord.textContent = currentWord;
  elements.wordStageNote.textContent = "Leo reads the word first. Then tap Hear Word to compare the pronunciation.";
  elements.wordPreview.innerHTML = state.wordVault
    .slice(0, 12)
    .map((word, index) => `<div class="preview-item${index === safeIndex ? " active" : ""}">${word}</div>`)
    .join("");
}

function bindEvents() {
  elements.pageLinks.forEach((button) => {
    button.addEventListener("click", () => {
      navigate(button.dataset.pageLink);
    });
  });

  elements.quickContinue.addEventListener("click", () => {
    openSkill(state.activeSkillId, state.lessonTab);
  });

  elements.homeStartSkill.addEventListener("click", () => {
    openSkill(state.activeSkillId, "learn");
  });

  elements.lessonTabs.forEach((button) => {
    button.addEventListener("click", () => {
      setLessonTab(button.dataset.lessonTab);
    });
  });

  elements.hearSkill.addEventListener("click", () => {
    const skill = getSkill();
    speakText(skill.examples.map((example) => example.word).join(", "), 0.76);
  });

  elements.hearExample.addEventListener("click", () => {
    const skill = getSkill();
    const currentExample = skill.examples[state.exampleIndexBySkill[skill.id] % skill.examples.length];
    speakText(currentExample.word, 0.72);
  });

  elements.prevExample.addEventListener("click", () => {
    const skill = getSkill();
    state.exampleIndexBySkill[skill.id] = (state.exampleIndexBySkill[skill.id] - 1 + skill.examples.length) % skill.examples.length;
    renderPracticePanel(skill);
  });

  elements.nextExample.addEventListener("click", () => {
    const skill = getSkill();
    state.exampleIndexBySkill[skill.id] = (state.exampleIndexBySkill[skill.id] + 1) % skill.examples.length;
    renderPracticePanel(skill);
  });

  elements.hearSentence.addEventListener("click", () => {
    const skill = getSkill();
    const currentSentence = skill.sentences[state.sentenceIndexBySkill[skill.id] % skill.sentences.length];
    speakText(currentSentence, 0.9);
  });

  elements.prevSentence.addEventListener("click", () => {
    const skill = getSkill();
    state.sentenceIndexBySkill[skill.id] = (state.sentenceIndexBySkill[skill.id] - 1 + skill.sentences.length) % skill.sentences.length;
    renderPracticePanel(skill);
  });

  elements.nextSentence.addEventListener("click", () => {
    const skill = getSkill();
    state.sentenceIndexBySkill[skill.id] = (state.sentenceIndexBySkill[skill.id] + 1) % skill.sentences.length;
    renderPracticePanel(skill);
  });

  elements.nextQuestion.addEventListener("click", () => {
    advanceQuestion();
  });

  elements.restartCheck.addEventListener("click", () => {
    resetQuiz();
  });

  elements.hearCurrentWord.addEventListener("click", () => {
    if (state.wordVault.length) {
      const safeIndex = ((state.currentWordIndex % state.wordVault.length) + state.wordVault.length) % state.wordVault.length;
      speakText(state.wordVault[safeIndex], 0.72);
    }
  });

  elements.prevWord.addEventListener("click", () => {
    if (!state.wordVault.length) {
      return;
    }
    state.currentWordIndex = (state.currentWordIndex - 1 + state.wordVault.length) % state.wordVault.length;
    renderWordCards();
  });

  elements.nextWord.addEventListener("click", () => {
    if (!state.wordVault.length) {
      return;
    }
    state.currentWordIndex = (state.currentWordIndex + 1) % state.wordVault.length;
    renderWordCards();
  });

  elements.shuffleWords.addEventListener("click", () => {
    state.wordVault = shuffle(state.wordVault);
    state.currentWordIndex = 0;
    saveWordVault(state.wordVault);
    renderHome();
    renderWordCards();
  });

  elements.saveWordList.addEventListener("click", () => {
    const words = normalizeWords(elements.wordListInput.value);
    state.wordVault = words;
    state.currentWordIndex = 0;
    saveWordVault(words);
    renderHome();
    renderWordCards();
    setFeedback(elements.parentFeedback, `${words.length} words saved.`, "success");
  });

  elements.loadDefaultList.addEventListener("click", () => {
    elements.wordListInput.value = starterHighFrequencyWords.join("\n");
    setFeedback(elements.parentFeedback, "Starter list loaded into the editor.", "success");
  });
}

function init() {
  state.wordVault = loadWordVault();
  state.activeSkillId = loadActiveSkill();
  phonicsSkills.forEach((skill) => ensureSkillState(skill.id));
  bindEvents();
  renderHome();
  renderSkillFilters();
  renderSkillsList();
  renderLesson();
  renderWordCards();
  updateHeader();
  navigate("home");
}

if (window.speechSynthesis && "onvoiceschanged" in window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    pickVoice();
  };
}

init();
