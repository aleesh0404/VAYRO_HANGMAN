/* ============================================================
   VAYRO_HANGMAN — script.js
   Updated word lists with poetic hints
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────── */
/*  WORD DATA — updated with your beautiful descriptions        */
/* ──────────────────────────────────────────────────────────── */
const WORD_DATA = {
  food: {
    label: 'FOOD',
    emoji: '🍕',
    words: [
      { word: 'PIZZA', hint: 'a circle divided yet shared as one' },
      { word: 'BURGER', hint: 'a tower you must hold before it falls apart' },
      { word: 'PASTA', hint: 'twisted, long, or short yet always comforting' },
      { word: 'SUSHI', hint: 'raw yet refined, simple yet precise' },
      { word: 'RAMEN', hint: 'a bowl where warmth solves everything' },
      { word: 'MOMO', hint: 'small parcels hiding surprises inside' },
      { word: 'DALBHAT', hint: 'simple fuel that powers a nation daily' },
      { word: 'BIRYANI', hint: 'layers that tell stories of spice' },
      { word: 'TACOS', hint: 'folded hands holding flavor tightly' },
      { word: 'NACHOS', hint: 'chaos on a plate that somehow works' },
      { word: 'SANDWICH', hint: 'two sides holding something in between' },
      { word: 'STEAK', hint: 'strength lies in how it’s cut and cooked' },
      { word: 'SALAD', hint: 'a mix where freshness leads' },
      { word: 'SOUP', hint: 'liquid comfort for restless days' },
      { word: 'FRIES', hint: 'thin gold that disappears too quickly' },
      { word: 'HOTDOG', hint: 'a straight line wrapped in softness' },
      { word: 'PANCAKE', hint: 'flat yet fluffy morning joy' },
      { word: 'WAFFLE', hint: 'squares holding sweetness in pockets' },
      { word: 'DONUT', hint: 'a circle missing its center' },
      { word: 'CAKE', hint: 'built in layers for celebration' },
      { word: 'ICECREAM', hint: 'cold that melts into happiness' },
      { word: 'CHOCOLATE', hint: 'bitterness transformed into desire' },
      { word: 'CHEESE', hint: 'aged patience turned edible' },
      { word: 'BUTTERCHICKEN', hint: 'richness hiding behind spice' },
      { word: 'FRIEDRICE', hint: 'yesterday reborn into today' },
      { word: 'NOODLES', hint: 'strands tangled like thoughts' },
      { word: 'SPRINGROLL', hint: 'crisp outside, soft inside' },
      { word: 'DUMPLING', hint: 'secrets wrapped in dough' },
      { word: 'LASAGNA', hint: 'layers stacked like stories' },
      { word: 'SPAGHETTI', hint: 'long lines that never stay neat' },
      { word: 'OMELETTE', hint: 'eggs reshaped into possibility' },
      { word: 'SCRAMBLEDEGGS', hint: 'broken yet better' },
      { word: 'TOAST', hint: 'bread transformed by heat' },
      { word: 'CURRY', hint: 'a storm of flavors in liquid form' },
      { word: 'KEBAB', hint: 'fire meets meat on a stick' },
      { word: 'SHAWARMA', hint: 'spinning flavors carved into wraps' },
      { word: 'FALAFEL', hint: 'humble grains turned into gold' },
      { word: 'HUMMUS', hint: 'smoothness from crushed strength' },
      { word: 'POPCORN', hint: 'kernels that explode into lightness' },
      { word: 'CHIPS', hint: 'thin slices of addictive crunch' },
      { word: 'BACON', hint: 'crispy lines of temptation' },
      { word: 'SAUSAGE', hint: 'meat shaped into consistency' },
      { word: 'PUDDING', hint: 'softness that needs no effort' },
      { word: 'CUSTARD', hint: 'patience thickened into cream' },
      { word: 'BROWNIE', hint: 'dense sweetness with a dark side' },
      { word: 'MILKSHAKE', hint: 'drink that feels like dessert' },
      { word: 'SMOOTHIE', hint: 'fruits blended into energy' },
      { word: 'YOGURT', hint: 'time transforms milk into tang' },
      { word: 'CHEESECAKE', hint: 'where cheese forgets it’s savory' },
      { word: 'APPLEPIE', hint: 'warmth wrapped in crust' }
    ]
  },
  animals: {
    label: 'ANIMALS',
    emoji: '🦁',
    words: [
      { word: 'LION', hint: 'rules without needing a crown' },
      { word: 'TIGER', hint: 'walks silently but speaks in stripes' },
      { word: 'ELEPHANT', hint: 'remembers what others forget' },
      { word: 'GIRAFFE', hint: 'sees far without moving' },
      { word: 'ZEBRA', hint: 'black or white depends on how you look' },
      { word: 'MONKEY', hint: 'never still, always curious' },
      { word: 'GORILLA', hint: 'strength that rarely needs to prove itself' },
      { word: 'BEAR', hint: 'sleeps long yet wakes powerful' },
      { word: 'WOLF', hint: 'survives best not alone but together' },
      { word: 'FOX', hint: 'wins not by strength but by mind' },
      { word: 'DOG', hint: 'loyalty you cannot buy' },
      { word: 'CAT', hint: 'stays close but never owned' },
      { word: 'COW', hint: 'gives more than it takes' },
      { word: 'GOAT', hint: 'climbs where others hesitate' },
      { word: 'SHEEP', hint: 'follows without question' },
      { word: 'HORSE', hint: 'runs with freedom others admire' },
      { word: 'CAMEL', hint: 'carries survival across emptiness' },
      { word: 'KANGAROO', hint: 'moves forward but never backward easily' },
      { word: 'PANDA', hint: 'survives on simplicity alone' },
      { word: 'KOALA', hint: 'sleeps more than it lives' },
      { word: 'DEER', hint: 'alert to every whisper' },
      { word: 'RABBIT', hint: 'fear gives it speed' },
      { word: 'SQUIRREL', hint: 'plans ahead for unseen days' },
      { word: 'RAT', hint: 'thrives where others fail' },
      { word: 'MOUSE', hint: 'small but never unnoticed' },
      { word: 'BAT', hint: 'sees without seeing' },
      { word: 'EAGLE', hint: 'flies where others only dream' },
      { word: 'OWL', hint: 'watches when the world sleeps' },
      { word: 'PARROT', hint: 'speaks without understanding' },
      { word: 'PENGUIN', hint: 'flies through water instead' },
      { word: 'SHARK', hint: 'never stops moving to survive' },
      { word: 'WHALE', hint: 'sings beneath unseen depths' },
      { word: 'DOLPHIN', hint: 'intelligence hidden in play' },
      { word: 'OCTOPUS', hint: 'escapes through impossible spaces' },
      { word: 'CRAB', hint: 'never walks the obvious path' },
      { word: 'LOBSTER', hint: 'grows by leaving its shell' },
      { word: 'FROG', hint: 'lives between two worlds' },
      { word: 'SNAKE', hint: 'moves without legs yet faster than fear' },
      { word: 'LIZARD', hint: 'loses part to survive whole' },
      { word: 'CROCODILE', hint: 'waits longer than its prey expects' },
      { word: 'ALLIGATOR', hint: 'patience is its weapon' },
      { word: 'TURTLE', hint: 'carries its home everywhere' },
      { word: 'TORTOISE', hint: 'slow but always arriving' },
      { word: 'ANT', hint: 'small yet builds empires' },
      { word: 'BEE', hint: 'works for a sweetness it rarely enjoys' },
      { word: 'BUTTERFLY', hint: 'beauty born from change' },
      { word: 'SPIDER', hint: 'builds traps with patience' },
      { word: 'SCORPION', hint: 'small but feared for its end' },
      { word: 'HYENA', hint: 'laughter that means danger' },
      { word: 'LEOPARD', hint: 'hides in plain sight' }
    ]
  },
  countries: {
    label: 'COUNTRIES',
    emoji: '🌍',
    words: [
      { word: 'NEPAL', hint: 'where the sky touches earth but few can breathe easily' },
      { word: 'INDIA', hint: 'a land where many languages speak as one' },
      { word: 'CHINA', hint: 'a wall so long it once tried to touch forever' },
      { word: 'JAPAN', hint: 'the sun greets this land before the rest' },
      { word: 'BRAZIL', hint: 'a forest so vast it breathes for the planet' },
      { word: 'CANADA', hint: 'cold lands guarded by a red leaf' },
      { word: 'FRANCE', hint: 'where iron rises and love is whispered' },
      { word: 'GERMANY', hint: 'precision lives where engines are born' },
      { word: 'ITALY', hint: 'shaped like a boot stepping into the sea' },
      { word: 'SPAIN', hint: 'where rhythm speaks through feet and fire' },
      { word: 'PORTUGAL', hint: 'watches the ocean from europe’s edge' },
      { word: 'AUSTRALIA', hint: 'a world where animals carry their young in pockets' },
      { word: 'NEWZEALAND', hint: 'where small heroes once carried rings' },
      { word: 'USA', hint: 'many states but one identity debated' },
      { word: 'MEXICO', hint: 'where spice and sun meet ancient stones' },
      { word: 'ARGENTINA', hint: 'where dance tells stories of passion' },
      { word: 'CHILE', hint: 'stretched thin between mountains and sea' },
      { word: 'PERU', hint: 'where clouds hide ancient cities' },
      { word: 'EGYPT', hint: 'where kings sleep beneath stone triangles' },
      { word: 'SOUTHAFRICA', hint: 'where wild kingdoms still roam free' },
      { word: 'NIGERIA', hint: 'where crowds grow faster than silence' },
      { word: 'KENYA', hint: 'where runners are born from the earth' },
      { word: 'MOROCCO', hint: 'where markets maze through time' },
      { word: 'TURKEY', hint: 'split between two worlds yet whole' },
      { word: 'GREECE', hint: 'where old ideas shaped the modern mind' },
      { word: 'NORWAY', hint: 'where cliffs fall into silent waters' },
      { word: 'SWEDEN', hint: 'where simplicity builds global ideas' },
      { word: 'FINLAND', hint: 'where quiet minds find deep happiness' },
      { word: 'DENMARK', hint: 'small land, big stories of bricks and kings' },
      { word: 'POLAND', hint: 'rises strong despite history’s storms' },
      { word: 'NETHERLANDS', hint: 'where land lives below the sea' },
      { word: 'BELGIUM', hint: 'sweetness hides in every bite' },
      { word: 'SWITZERLAND', hint: 'where time is always precise' },
      { word: 'AUSTRIA', hint: 'where music once ruled empires' },
      { word: 'HUNGARY', hint: 'divided by a river yet united' },
      { word: 'CZECHREPUBLIC', hint: 'where towers watch over stories' },
      { word: 'SLOVAKIA', hint: 'quiet mountains whisper old tales' },
      { word: 'ROMANIA', hint: 'where night legends refuse to die' },
      { word: 'BULGARIA', hint: 'ancient roots beneath modern soil' },
      { word: 'SERBIA', hint: 'where crossroads shaped identity' },
      { word: 'CROATIA', hint: 'where sea meets stone in harmony' },
      { word: 'SLOVENIA', hint: 'small but rich in green silence' },
      { word: 'UKRAINE', hint: 'fields stretch like golden oceans' },
      { word: 'RUSSIA', hint: 'too vast to fully know' },
      { word: 'MONGOLIA', hint: 'where horses outnumber roads' },
      { word: 'THAILAND', hint: 'smiles hide deeper traditions' },
      { word: 'VIETNAM', hint: 'where resilience flows like rivers' },
      { word: 'INDONESIA', hint: 'scattered lands forming one voice' },
      { word: 'PHILIPPINES', hint: 'islands dancing with the sea' },
      { word: 'MALAYSIA', hint: 'towers rise where cultures meet' }
    ]
  },
  cities: {
    label: 'CITIES',
    emoji: '🏙️',
    words: [
      { word: 'KATHMANDU', hint: 'valley where temples outnumber silence' },
      { word: 'DELHI', hint: 'history and chaos breathe together' },
      { word: 'MUMBAI', hint: 'dreams rise beside the sea' },
      { word: 'TOKYO', hint: 'where tradition meets neon lights' },
      { word: 'BEIJING', hint: 'power sits behind ancient gates' },
      { word: 'SHANGHAI', hint: 'future rises from the river' },
      { word: 'BANGKOK', hint: 'where streets never truly sleep' },
      { word: 'SINGAPORE', hint: 'small land, perfect order' },
      { word: 'DUBAI', hint: 'desert turned into ambition' },
      { word: 'DOHA', hint: 'wealth built on quiet sands' },
      { word: 'LONDON', hint: 'time echoes through every street' },
      { word: 'PARIS', hint: 'romance lives under iron shadows' },
      { word: 'BERLIN', hint: 'rebuilt stronger after division' },
      { word: 'ROME', hint: 'where ruins still rule' },
      { word: 'MADRID', hint: 'energy beats through plazas' },
      { word: 'LISBON', hint: 'watches oceans remember history' },
      { word: 'AMSTERDAM', hint: 'water flows through every path' },
      { word: 'BRUSSELS', hint: 'politics meets sweetness' },
      { word: 'VIENNA', hint: 'elegance shaped by music' },
      { word: 'PRAGUE', hint: 'a fairytale frozen in time' },
      { word: 'BUDAPEST', hint: 'two cities sharing one soul' },
      { word: 'WARSAW', hint: 'rises again no matter what' },
      { word: 'OSLO', hint: 'calm lives beside cold waters' },
      { word: 'STOCKHOLM', hint: 'islands holding a city together' },
      { word: 'HELSINKI', hint: 'silence shaped into design' },
      { word: 'COPENHAGEN', hint: 'simple living done right' },
      { word: 'MOSCOW', hint: 'power hidden behind cold walls' },
      { word: 'KYIV', hint: 'strength tested through time' },
      { word: 'ATHENS', hint: 'where ideas were first born' },
      { word: 'ISTANBUL', hint: 'stands with one foot in each world' },
      { word: 'CAIRO', hint: 'watches over ancient mysteries' },
      { word: 'NAIROBI', hint: 'city surrounded by wild life' },
      { word: 'LAGOS', hint: 'energy that never slows' },
      { word: 'CAPETOWN', hint: 'beauty at the edge of land' },
      { word: 'JOHANNESBURG', hint: 'gold once defined it' },
      { word: 'NEWYORK', hint: 'a city that never pauses' },
      { word: 'LOSANGELES', hint: 'where dreams are filmed' },
      { word: 'CHICAGO', hint: 'wind shapes its identity' },
      { word: 'TORONTO', hint: 'diversity builds its strength' },
      { word: 'VANCOUVER', hint: 'nature meets modern life' },
      { word: 'SYDNEY', hint: 'sails define its harbor' },
      { word: 'MELBOURNE', hint: 'culture hides in every corner' },
      { word: 'AUCKLAND', hint: 'bridges connect its beauty' },
      { word: 'RIODEJANEIRO', hint: 'celebration never ends' },
      { word: 'SAOPAULO', hint: 'size defines its chaos' },
      { word: 'BUENOSAIRES', hint: 'passion flows through streets' },
      { word: 'LIMA', hint: 'history sits above the sea' },
      { word: 'SANTIAGO', hint: 'mountains guard the city' },
      { word: 'MEXICOCITY', hint: 'built on ancient ground' },
      { word: 'JAKARTA', hint: 'movement never stops here' }
    ]
  }
};

/* Mixed mode pulled in at runtime */
const CATEGORIES = ['food', 'animals', 'countries', 'cities'];
const MAX_LIVES  = 7;
const HANG_PARTS = ['hp1', 'hp1-face', 'hp2', 'hp3', 'hp4', 'hp5', 'hp6', 'hp7'];

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M']
];

/* ──────────────────────────────────────────────────────────── */
/*  STATE                                                        */
/* ──────────────────────────────────────────────────────────── */
let state = {
  totalScore:    0,
  wins:          0,
  streak:        0,
  bestStreak:    0,
  categoryProgress: {
    food: { played: [], score: 0 },
    animals: { played: [], score: 0 },
    countries: { played: [], score: 0 },
    cities: { played: [], score: 0 },
    mixed: { played: [], score: 0 },
  },
  allUnlocked: false,
};

let game = {
  category:      '',
  word:          '',
  hint:          '',
  guessed:       new Set(),
  wrongGuesses:  [],
  livesLeft:     MAX_LIVES,
  over:          false,
};

/* ──────────────────────────────────────────────────────────── */
/*  PERSISTENCE                                                  */
/* ──────────────────────────────────────────────────────────── */
function saveState() {
  try { localStorage.setItem('wordduel_state', JSON.stringify(state)); }
  catch(e) {}
}
function loadState() {
  try {
    const raw = localStorage.getItem('wordduel_state');
    if (raw) {
      const loaded = JSON.parse(raw);
      state = { ...state, ...loaded };
    }
  } catch(e) {}
}

/* ──────────────────────────────────────────────────────────── */
/*  SOUND (Web Audio API — subtle tones)                         */
/* ──────────────────────────────────────────────────────────── */
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) {}
  }
  return audioCtx;
}

function playTone(freq, type, duration, vol = 0.08) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type      = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function playSound(type) {
  if (type === 'correct') { playTone(660, 'sine', 0.18, 0.06); }
  if (type === 'wrong')   { playTone(180, 'sawtooth', 0.2, 0.06); }
  if (type === 'win')     {
    playTone(523, 'sine', 0.12, 0.08);
    setTimeout(() => playTone(659, 'sine', 0.12, 0.08), 120);
    setTimeout(() => playTone(784, 'sine', 0.25, 0.08), 240);
  }
  if (type === 'lose')    {
    playTone(330, 'sawtooth', 0.15, 0.07);
    setTimeout(() => playTone(220, 'sawtooth', 0.3, 0.07), 160);
  }
}

function playClick() {
  playTone(880, 'sine', 0.05, 0.03);
}

/* ──────────────────────────────────────────────────────────── */
/*  SCREEN TRANSITIONS                                           */
/* ──────────────────────────────────────────────────────────── */
const screens = {
  landing:  document.getElementById('landingScreen'),
  category: document.getElementById('categoryScreen'),
  game:     document.getElementById('gameScreen'),
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    if (key === name) {
      el.classList.remove('exit');
      el.classList.add('active');
    } else {
      if (el.classList.contains('active')) {
        el.classList.add('exit');
        setTimeout(() => { el.classList.remove('active', 'exit'); }, 450);
      }
    }
  });
}

/* ──────────────────────────────────────────────────────────── */
/*  THEME TOGGLE                                                 */
/* ──────────────────────────────────────────────────────────── */
const html       = document.documentElement;
const themeToggle= document.getElementById('themeToggle');
const themeIcon  = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeIcon.textContent  = '🌙';
    themeLabel.textContent = 'DARK';
  } else {
    themeIcon.textContent  = '☀️';
    themeLabel.textContent = 'LIGHT';
  }
  try { localStorage.setItem('wordduel_theme', theme); } catch(e) {}
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
  playClick();
});

/* ──────────────────────────────────────────────────────────── */
/*  BACKGROUND CANVAS ANIMATION                                  */
/* ──────────────────────────────────────────────────────────── */
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Star {
    constructor() { this.reset(); }
    reset() {
      this.x     = Math.random() * W;
      this.y     = Math.random() * H;
      this.r     = Math.random() * 1.5 + 0.3;
      this.vx    = (Math.random() - 0.5) * 0.15;
      this.vy    = (Math.random() - 0.5) * 0.15;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.da    = (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1);
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      this.alpha += this.da;
      if (this.alpha > 0.8 || this.alpha < 0.1) this.da *= -1;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      const isDark = html.getAttribute('data-theme') !== 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(6,214,240,${this.alpha})`
        : `rgba(0,120,180,${this.alpha * 0.5})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 130; i++) particles.push(new Star());

  function frame() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(frame);
  }
  frame();
}

/* ──────────────────────────────────────────────────────────── */
/*  LANDING SCREEN                                               */
/* ──────────────────────────────────────────────────────────── */
function updateLandingStats() {
  document.getElementById('lsScore').textContent  = state.totalScore;
  document.getElementById('lsWins').textContent   = state.wins;
  document.getElementById('lsStreak').textContent = state.bestStreak;
}

document.getElementById('btnStart').addEventListener('click', () => {
  playClick();
  showScreen('category');
  renderCategoryScreen();
});

/* ──────────────────────────────────────────────────────────── */
/*  CATEGORY SCREEN                                              */
/* ──────────────────────────────────────────────────────────── */
function renderCategoryScreen() {
  document.getElementById('catScoreVal').textContent = state.totalScore;
  checkMixedUnlock();

  CATEGORIES.forEach(cat => {
    const prog  = state.categoryProgress[cat];
    const total = WORD_DATA[cat].words.length;
    const done  = prog.played.length;

    // Update word count display
    const subEl = document.getElementById(`cat-sub-${cat}`);
    if (subEl) subEl.textContent = `${total} words`;

    // Stars
    const stEl = document.getElementById(`st-${cat}`);
    if (stEl) {
      const pct = done / total;
      const stars = pct >= 1 ? 3 : pct >= 0.5 ? 2 : pct > 0 ? 1 : 0;
      stEl.innerHTML = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    }

    // Complete badge
    const cbEl = document.getElementById(`cb-${cat}`);
    if (cbEl) {
      if (done >= total) {
        cbEl.textContent = 'DONE';
        cbEl.classList.add('done');
      } else {
        cbEl.textContent = '';
        cbEl.classList.remove('done');
      }
    }
  });

  // Mixed stars
  const mst = document.getElementById('st-mixed');
  if (mst) {
    const mp = state.categoryProgress.mixed;
    const ms = mp.played.length >= 10 ? 3 : mp.played.length >= 5 ? 2 : mp.played.length > 0 ? 1 : 0;
    mst.innerHTML = '⭐'.repeat(ms) + '☆'.repeat(3 - ms);
  }
}

function checkMixedUnlock() {
  const allDone = CATEGORIES.every(cat => {
    const prog  = state.categoryProgress[cat];
    return prog.played.length >= WORD_DATA[cat].words.length;
  });
  state.allUnlocked = allDone;

  const mixedCard   = document.getElementById('mixedCard');
  const lockOverlay = document.getElementById('lockOverlay');
  if (allDone) {
    mixedCard.classList.remove('locked');
    mixedCard.classList.add('unlocked');
    if (lockOverlay) lockOverlay.style.display = 'none';
  } else {
    mixedCard.classList.add('locked');
    mixedCard.classList.remove('unlocked');
    if (lockOverlay) lockOverlay.style.display = 'flex';
  }
}

// Category card clicks
document.getElementById('catGrid').addEventListener('click', (e) => {
  const card = e.target.closest('.cat-card');
  if (!card) return;
  if (card.classList.contains('locked')) return;
  playClick();
  const cat = card.dataset.cat;
  startCategoryGame(cat);
});

document.getElementById('backToLanding').addEventListener('click', () => {
  playClick();
  showScreen('landing');
  updateLandingStats();
});

/* ──────────────────────────────────────────────────────────── */
/*  GAME INITIALIZATION                                          */
/* ──────────────────────────────────────────────────────────── */
function startCategoryGame(cat) {
  game.category = cat;
  pickWord(cat);
  showScreen('game');
  renderGameUI();
}

function pickWord(cat) {
  let pool;
  if (cat === 'mixed') {
    pool = CATEGORIES.flatMap(c => WORD_DATA[c].words);
  } else {
    pool = WORD_DATA[cat].words;
  }

  const played = state.categoryProgress[cat].played;
  let available = pool.filter(w => !played.includes(w.word));

  if (available.length === 0) {
    state.categoryProgress[cat].played = [];
    available = pool;
    saveState();
  }

  const choice = available[Math.floor(Math.random() * available.length)];
  game.word   = choice.word;
  game.hint   = choice.hint;
  game.guessed      = new Set();
  game.wrongGuesses = [];
  game.livesLeft    = MAX_LIVES;
  game.over         = false;
}

/* ──────────────────────────────────────────────────────────── */
/*  RENDER GAME UI                                               */
/* ──────────────────────────────────────────────────────────── */
function renderGameUI() {
  const catData = game.category === 'mixed'
    ? { label: 'MIXED', emoji: '🔥' }
    : WORD_DATA[game.category];

  document.getElementById('catPill').textContent     = catData.label;
  document.getElementById('gScore').textContent      = state.totalScore;
  document.getElementById('hintVal').textContent     = game.hint;
  document.getElementById('wordInfo').textContent    =
    `${game.word.length} letter${game.word.length !== 1 ? 's' : ''}`;

  renderHearts();
  renderHangman();
  renderWordSlots();
  renderKeyboard();
  renderWrongList();
  updateLivesText();
}

function renderHearts() {
  const row = document.getElementById('heartRow');
  row.innerHTML = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    const h = document.createElement('span');
    h.className = 'heart-icon' + (i >= game.livesLeft ? ' lost' : '');
    h.textContent = i < game.livesLeft ? '❤️' : '🖤';
    row.appendChild(h);
  }
}

function updateLivesText() {
  document.getElementById('livesNum').textContent = game.livesLeft;
}

function renderHangman() {
  const wrongCount = game.wrongGuesses.length;
  HANG_PARTS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (i < wrongCount) {
      el.setAttribute('opacity', '1');
      el.classList.add('visible');
    } else {
      el.setAttribute('opacity', '0');
      el.classList.remove('visible');
    }
  });
}

function renderWordSlots() {
  const container = document.getElementById('wordSlots');
  container.innerHTML = '';
  [...game.word].forEach(letter => {
    const slot = document.createElement('div');
    slot.className = 'word-slot';

    const lDiv = document.createElement('div');
    lDiv.className = 'slot-letter';
    lDiv.id = `slot-${letter}-${Math.random().toString(36).slice(2,6)}`;

    const line = document.createElement('div');
    line.className = 'slot-line' + (game.guessed.has(letter) ? ' revealed' : '');

    if (game.guessed.has(letter)) {
      lDiv.textContent = letter;
    } else {
      lDiv.textContent = '';
    }

    slot.appendChild(lDiv);
    slot.appendChild(line);
    container.appendChild(slot);
  });
}

function updateWordSlots() {
  const container = document.getElementById('wordSlots');
  const slots     = container.querySelectorAll('.word-slot');
  [...game.word].forEach((letter, i) => {
    const slotLetterDiv = slots[i].querySelector('.slot-letter');
    const slotLine      = slots[i].querySelector('.slot-line');
    if (game.guessed.has(letter)) {
      if (!slotLetterDiv.textContent) {
        slotLetterDiv.textContent = letter;
        slotLetterDiv.style.animation = 'none';
        void slotLetterDiv.offsetWidth;
        slotLetterDiv.style.animation = '';
      }
      slotLine.classList.add('revealed');
    }
  });
}

function renderKeyboard() {
  const kbWrap = document.getElementById('keyboard');
  kbWrap.innerHTML = '';
  KEYBOARD_ROWS.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'kb-row';
    row.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'kb-key';
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener('click', () => {
        playClick();
        handleGuess(letter);
      });

      if (game.guessed.has(letter)) {
        if (game.word.includes(letter)) {
          btn.classList.add('correct', 'used');
        } else {
          btn.classList.add('wrong', 'used');
        }
      }
      rowDiv.appendChild(btn);
    });
    kbWrap.appendChild(rowDiv);
  });
}

function renderWrongList() {
  const container = document.getElementById('wrongList');
  container.innerHTML = '';
  game.wrongGuesses.forEach(letter => {
    const chip = document.createElement('span');
    chip.className = 'wrong-letter-chip';
    chip.textContent = letter;
    container.appendChild(chip);
  });
}

/* ──────────────────────────────────────────────────────────── */
/*  INPUT HANDLING                                               */
/* ──────────────────────────────────────────────────────────── */
function handleGuess(letter) {
  if (game.over) return;
  if (game.guessed.has(letter)) return;

  game.guessed.add(letter);
  const isCorrect = game.word.includes(letter);

  const btn = document.querySelector(`.kb-key[data-letter="${letter}"]`);
  if (btn) {
    btn.classList.add('used', 'pop');
    if (isCorrect) {
      btn.classList.add('correct');
      playSound('correct');
    } else {
      btn.classList.add('wrong', 'shake-wrong');
      game.wrongGuesses.push(letter);
      game.livesLeft--;
      playSound('wrong');

      const idx = game.wrongGuesses.length - 1;
      if (idx < HANG_PARTS.length) {
        const partEl = document.getElementById(HANG_PARTS[idx]);
        if (partEl) {
          partEl.setAttribute('opacity', '1');
          partEl.classList.add('visible', 'shake');
          setTimeout(() => partEl.classList.remove('shake'), 500);
        }
      }
    }
  }

  updateWordSlots();
  renderHearts();
  renderWrongList();
  updateLivesText();
  document.getElementById('gScore').textContent = state.totalScore;

  const allRevealed = [...game.word].every(l => game.guessed.has(l));
  if (allRevealed) {
    setTimeout(() => endGame(true), 500);
  } else if (game.livesLeft <= 0) {
    [...game.word].forEach(l => game.guessed.add(l));
    updateWordSlots();
    setTimeout(() => endGame(false), 600);
  }
}

document.addEventListener('keydown', (e) => {
  if (!screens.game.classList.contains('active')) return;
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter) && !game.over) {
    playClick();
    handleGuess(letter);
  }
});

/* ──────────────────────────────────────────────────────────── */
/*  GAME END                                                      */
/* ──────────────────────────────────────────────────────────── */
function endGame(won) {
  game.over = true;
  let pts = 0;

  if (won) {
    pts = 10 + (game.livesLeft * 5);
    state.totalScore += pts;
    state.wins++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    playSound('win');
  } else {
    state.streak = 0;
    playSound('lose');
  }

  const prog = state.categoryProgress[game.category];
  if (!prog.played.includes(game.word)) {
    prog.played.push(game.word);
    if (won) prog.score += pts;
  }
  saveState();

  showResultModal(won, pts);
}

/* ──────────────────────────────────────────────────────────── */
/*  RESULT MODAL                                                 */
/* ──────────────────────────────────────────────────────────── */
function showResultModal(won, pts) {
  const overlay  = document.getElementById('resultModal');
  const emo      = document.getElementById('modalEmo');
  const title    = document.getElementById('modalH');
  const sub      = document.getElementById('modalP');
  const reveal   = document.getElementById('modalReveal');
  const ptsEl    = document.getElementById('modalPts');
  const burst    = document.getElementById('modalBurst');

  if (won) {
    emo.textContent        = ['🎉','🎊','🏆','⭐','🔥'][Math.floor(Math.random()*5)];
    title.textContent      = 'You Got It!';
    title.className        = 'modal-h win-color';
    sub.textContent        = `Lives remaining: ${game.livesLeft} — Streak: ${state.streak}`;
    ptsEl.textContent      = `+${pts} points  •  Total: ${state.totalScore}`;
    reveal.textContent     = game.word;
    spawnConfetti(burst);
  } else {
    emo.textContent        = '💀';
    title.textContent      = 'Game Over';
    title.className        = 'modal-h lose-color';
    sub.textContent        = 'Better luck next time!';
    ptsEl.textContent      = `Total score: ${state.totalScore}`;
    reveal.textContent     = `The word was: ${game.word}`;
  }

  overlay.classList.remove('hidden');
}

function spawnConfetti(parent) {
  parent.innerHTML = '';
  const colors = ['#ffd166','#06d6f0','#ff6b9d','#2ddc78','#a855f7','#ffffff'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      top: ${Math.random()*20}%;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      width: ${Math.random()*8+4}px;
      height: ${Math.random()*8+4}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${Math.random()*1+0.8}s;
      animation-delay: ${Math.random()*0.4}s;
    `;
    parent.appendChild(p);
  }
}

document.getElementById('btnNext').addEventListener('click', () => {
  playClick();
  document.getElementById('resultModal').classList.add('hidden');
  pickWord(game.category);
  renderGameUI();
  renderCategoryScreen();
});

document.getElementById('btnCats').addEventListener('click', () => {
  playClick();
  document.getElementById('resultModal').classList.add('hidden');
  showScreen('category');
  renderCategoryScreen();
});

document.getElementById('backToCats').addEventListener('click', () => {
  playClick();
  showScreen('category');
  renderCategoryScreen();
});

/* ──────────────────────────────────────────────────────────── */
/*  INIT                                                         */
/* ──────────────────────────────────────────────────────────── */
function init() {
  loadState();
  try {
    const savedTheme = localStorage.getItem('wordduel_theme') || 'dark';
    applyTheme(savedTheme);
  } catch(e) { applyTheme('dark'); }

  updateLandingStats();
  initCanvas();
  showScreen('landing');
}

init();
