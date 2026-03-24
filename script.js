/* ============================================================
   HANGMAN — script.js (Optimized + Correct Word Tracking)
   ============================================================ */
'use strict';

/* ─── WORD DATA ──────────────────────────────────────────── */
const WORD_DATA = {
  food: {
    label: 'FOOD', emoji: '🍕',
    accent: '#ff8c42', glow: 'rgba(255,140,66,.14)', border: 'rgba(255,140,66,.25)', shine: 'rgba(255,140,66,.1)',
    words: [
      { word:'PIZZA', hint:'a circle divided yet shared as one' },
      { word:'BURGER', hint:'a tower you must hold before it falls apart' },
      { word:'PASTA', hint:'twisted, long, or short yet always comforting' },
      { word:'SUSHI', hint:'raw yet refined, simple yet precise' },
      { word:'RAMEN', hint:'a bowl where warmth solves everything' },
      { word:'MOMO', hint:'small parcels hiding surprises inside' },
      { word:'DALBHAT', hint:'simple fuel that powers a nation daily' },
      { word:'BIRYANI', hint:'layers that tell stories of spice' },
      { word:'TACOS', hint:'folded hands holding flavor tightly' },
      { word:'NACHOS', hint:'chaos on a plate that somehow works' },
      { word:'SANDWICH', hint:'two sides holding something in between' },
      { word:'STEAK', hint:'strength lies in how it’s cut and cooked' },
      { word:'SALAD', hint:'a mix where freshness leads' },
      { word:'SOUP', hint:'liquid comfort for restless days' },
      { word:'FRIES', hint:'thin gold that disappears too quickly' },
      { word:'HOTDOG', hint:'a straight line wrapped in softness' },
      { word:'PANCAKE', hint:'flat yet fluffy morning joy' },
      { word:'WAFFLE', hint:'squares holding sweetness in pockets' },
      { word:'DONUT', hint:'a circle missing its center' },
      { word:'CAKE', hint:'built in layers for celebration' },
      { word:'ICECREAM', hint:'cold that melts into happiness' },
      { word:'CHOCOLATE', hint:'bitterness transformed into desire' },
      { word:'CHEESE', hint:'aged patience turned edible' },
      { word:'BUTTERCHICKEN', hint:'richness hiding behind spice' },
      { word:'FRIEDRICE', hint:'yesterday reborn into today' },
      { word:'NOODLES', hint:'strands tangled like thoughts' },
      { word:'SPRINGROLL', hint:'crisp outside, soft inside' },
      { word:'DUMPLING', hint:'secrets wrapped in dough' },
      { word:'LASAGNA', hint:'layers stacked like stories' },
      { word:'SPAGHETTI', hint:'long lines that never stay neat' },
      { word:'OMELETTE', hint:'eggs reshaped into possibility' },
      { word:'SCRAMBLEDEGGS', hint:'broken yet better' },
      { word:'TOAST', hint:'bread transformed by heat' },
      { word:'CURRY', hint:'a storm of flavors in liquid form' },
      { word:'KEBAB', hint:'fire meets meat on a stick' },
      { word:'SHAWARMA', hint:'spinning flavors carved into wraps' },
      { word:'FALAFEL', hint:'humble grains turned into gold' },
      { word:'HUMMUS', hint:'smoothness from crushed strength' },
      { word:'POPCORN', hint:'kernels that explode into lightness' },
      { word:'CHIPS', hint:'thin slices of addictive crunch' },
      { word:'BACON', hint:'crispy lines of temptation' },
      { word:'SAUSAGE', hint:'meat shaped into consistency' },
      { word:'PUDDING', hint:'softness that needs no effort' },
      { word:'CUSTARD', hint:'patience thickened into cream' },
      { word:'BROWNIE', hint:'dense sweetness with a dark side' },
      { word:'MILKSHAKE', hint:'drink that feels like dessert' },
      { word:'SMOOTHIE', hint:'fruits blended into energy' },
      { word:'YOGURT', hint:'time transforms milk into tang' },
      { word:'CHEESECAKE', hint:'where cheese forgets it’s savory' },
      { word:'APPLEPIE', hint:'warmth wrapped in crust' }
    ]
  },
  animals: {
    label: 'ANIMALS', emoji: '🦁',
    accent: '#2ddc78', glow: 'rgba(45,220,120,.14)', border: 'rgba(45,220,120,.25)', shine: 'rgba(45,220,120,.1)',
    words: [
      { word:'LION', hint:'rules without needing a crown' },
      { word:'TIGER', hint:'walks silently but speaks in stripes' },
      { word:'ELEPHANT', hint:'remembers what others forget' },
      { word:'GIRAFFE', hint:'sees far without moving' },
      { word:'ZEBRA', hint:'black or white depends on how you look' },
      { word:'MONKEY', hint:'never still, always curious' },
      { word:'GORILLA', hint:'strength that rarely needs to prove itself' },
      { word:'BEAR', hint:'sleeps long yet wakes powerful' },
      { word:'WOLF', hint:'survives best not alone but together' },
      { word:'FOX', hint:'wins not by strength but by mind' },
      { word:'DOG', hint:'loyalty you cannot buy' },
      { word:'CAT', hint:'stays close but never owned' },
      { word:'COW', hint:'gives more than it takes' },
      { word:'GOAT', hint:'climbs where others hesitate' },
      { word:'SHEEP', hint:'follows without question' },
      { word:'HORSE', hint:'runs with freedom others admire' },
      { word:'CAMEL', hint:'carries survival across emptiness' },
      { word:'KANGAROO', hint:'moves forward but never backward easily' },
      { word:'PANDA', hint:'survives on simplicity alone' },
      { word:'KOALA', hint:'sleeps more than it lives' },
      { word:'DEER', hint:'alert to every whisper' },
      { word:'RABBIT', hint:'fear gives it speed' },
      { word:'SQUIRREL', hint:'plans ahead for unseen days' },
      { word:'RAT', hint:'thrives where others fail' },
      { word:'MOUSE', hint:'small but never unnoticed' },
      { word:'BAT', hint:'sees without seeing' },
      { word:'EAGLE', hint:'flies where others only dream' },
      { word:'OWL', hint:'watches when the world sleeps' },
      { word:'PARROT', hint:'speaks without understanding' },
      { word:'PENGUIN', hint:'flies through water instead' },
      { word:'SHARK', hint:'never stops moving to survive' },
      { word:'WHALE', hint:'sings beneath unseen depths' },
      { word:'DOLPHIN', hint:'intelligence hidden in play' },
      { word:'OCTOPUS', hint:'escapes through impossible spaces' },
      { word:'CRAB', hint:'never walks the obvious path' },
      { word:'LOBSTER', hint:'grows by leaving its shell' },
      { word:'FROG', hint:'lives between two worlds' },
      { word:'SNAKE', hint:'moves without legs yet faster than fear' },
      { word:'LIZARD', hint:'loses part to survive whole' },
      { word:'CROCODILE', hint:'waits longer than its prey expects' },
      { word:'ALLIGATOR', hint:'patience is its weapon' },
      { word:'TURTLE', hint:'carries its home everywhere' },
      { word:'TORTOISE', hint:'slow but always arriving' },
      { word:'ANT', hint:'small yet builds empires' },
      { word:'BEE', hint:'works for a sweetness it rarely enjoys' },
      { word:'BUTTERFLY', hint:'beauty born from change' },
      { word:'SPIDER', hint:'builds traps with patience' },
      { word:'SCORPION', hint:'small but feared for its end' },
      { word:'HYENA', hint:'laughter that means danger' },
      { word:'LEOPARD', hint:'hides in plain sight' }
    ]
  },
  countries: {
    label: 'COUNTRIES', emoji: '🌍',
    accent: '#05d8f0', glow: 'rgba(5,216,240,.14)', border: 'rgba(5,216,240,.25)', shine: 'rgba(5,216,240,.1)',
    words: [
      { word:'NEPAL', hint:'where the sky touches earth but few can breathe easily' },
      { word:'INDIA', hint:'a land where many languages speak as one' },
      { word:'CHINA', hint:'a wall so long it once tried to touch forever' },
      { word:'JAPAN', hint:'the sun greets this land before the rest' },
      { word:'BRAZIL', hint:'a forest so vast it breathes for the planet' },
      { word:'CANADA', hint:'cold lands guarded by a red leaf' },
      { word:'FRANCE', hint:'where iron rises and love is whispered' },
      { word:'GERMANY', hint:'precision lives where engines are born' },
      { word:'ITALY', hint:'shaped like a boot stepping into the sea' },
      { word:'SPAIN', hint:'where rhythm speaks through feet and fire' },
      { word:'PORTUGAL', hint:'watches the ocean from europe’s edge' },
      { word:'AUSTRALIA', hint:'a world where animals carry their young in pockets' },
      { word:'NEWZEALAND', hint:'where small heroes once carried rings' },
      { word:'USA', hint:'many states but one identity debated' },
      { word:'MEXICO', hint:'where spice and sun meet ancient stones' },
      { word:'ARGENTINA', hint:'where dance tells stories of passion' },
      { word:'CHILE', hint:'stretched thin between mountains and sea' },
      { word:'PERU', hint:'where clouds hide ancient cities' },
      { word:'EGYPT', hint:'where kings sleep beneath stone triangles' },
      { word:'SOUTHAFRICA', hint:'where wild kingdoms still roam free' },
      { word:'NIGERIA', hint:'where crowds grow faster than silence' },
      { word:'KENYA', hint:'where runners are born from the earth' },
      { word:'MOROCCO', hint:'where markets maze through time' },
      { word:'TURKEY', hint:'split between two worlds yet whole' },
      { word:'GREECE', hint:'where old ideas shaped the modern mind' },
      { word:'NORWAY', hint:'where cliffs fall into silent waters' },
      { word:'SWEDEN', hint:'where simplicity builds global ideas' },
      { word:'FINLAND', hint:'where quiet minds find deep happiness' },
      { word:'DENMARK', hint:'small land, big stories of bricks and kings' },
      { word:'POLAND', hint:'rises strong despite history’s storms' },
      { word:'NETHERLANDS', hint:'where land lives below the sea' },
      { word:'BELGIUM', hint:'sweetness hides in every bite' },
      { word:'SWITZERLAND', hint:'where time is always precise' },
      { word:'AUSTRIA', hint:'where music once ruled empires' },
      { word:'HUNGARY', hint:'divided by a river yet united' },
      { word:'CZECHREPUBLIC', hint:'where towers watch over stories' },
      { word:'SLOVAKIA', hint:'quiet mountains whisper old tales' },
      { word:'ROMANIA', hint:'where night legends refuse to die' },
      { word:'BULGARIA', hint:'ancient roots beneath modern soil' },
      { word:'SERBIA', hint:'where crossroads shaped identity' },
      { word:'CROATIA', hint:'where sea meets stone in harmony' },
      { word:'SLOVENIA', hint:'small but rich in green silence' },
      { word:'UKRAINE', hint:'fields stretch like golden oceans' },
      { word:'RUSSIA', hint:'too vast to fully know' },
      { word:'MONGOLIA', hint:'where horses outnumber roads' },
      { word:'THAILAND', hint:'smiles hide deeper traditions' },
      { word:'VIETNAM', hint:'where resilience flows like rivers' },
      { word:'INDONESIA', hint:'scattered lands forming one voice' },
      { word:'PHILIPPINES', hint:'islands dancing with the sea' },
      { word:'MALAYSIA', hint:'towers rise where cultures meet' }
    ]
  },
  cities: {
    label: 'CITIES', emoji: '🏙️',
    accent: '#c084fc', glow: 'rgba(192,132,252,.14)', border: 'rgba(192,132,252,.25)', shine: 'rgba(192,132,252,.1)',
    words: [
      { word:'KATHMANDU', hint:'valley where temples outnumber silence' },
      { word:'DELHI', hint:'history and chaos breathe together' },
      { word:'MUMBAI', hint:'dreams rise beside the sea' },
      { word:'TOKYO', hint:'where tradition meets neon lights' },
      { word:'BEIJING', hint:'power sits behind ancient gates' },
      { word:'SHANGHAI', hint:'future rises from the river' },
      { word:'BANGKOK', hint:'where streets never truly sleep' },
      { word:'SINGAPORE', hint:'small land, perfect order' },
      { word:'DUBAI', hint:'desert turned into ambition' },
      { word:'DOHA', hint:'wealth built on quiet sands' },
      { word:'LONDON', hint:'time echoes through every street' },
      { word:'PARIS', hint:'romance lives under iron shadows' },
      { word:'BERLIN', hint:'rebuilt stronger after division' },
      { word:'ROME', hint:'where ruins still rule' },
      { word:'MADRID', hint:'energy beats through plazas' },
      { word:'LISBON', hint:'watches oceans remember history' },
      { word:'AMSTERDAM', hint:'water flows through every path' },
      { word:'BRUSSELS', hint:'politics meets sweetness' },
      { word:'VIENNA', hint:'elegance shaped by music' },
      { word:'PRAGUE', hint:'a fairytale frozen in time' },
      { word:'BUDAPEST', hint:'two cities sharing one soul' },
      { word:'WARSAW', hint:'rises again no matter what' },
      { word:'OSLO', hint:'calm lives beside cold waters' },
      { word:'STOCKHOLM', hint:'islands holding a city together' },
      { word:'HELSINKI', hint:'silence shaped into design' },
      { word:'COPENHAGEN', hint:'simple living done right' },
      { word:'MOSCOW', hint:'power hidden behind cold walls' },
      { word:'KYIV', hint:'strength tested through time' },
      { word:'ATHENS', hint:'where ideas were first born' },
      { word:'ISTANBUL', hint:'stands with one foot in each world' },
      { word:'CAIRO', hint:'watches over ancient mysteries' },
      { word:'NAIROBI', hint:'city surrounded by wild life' },
      { word:'LAGOS', hint:'energy that never slows' },
      { word:'CAPETOWN', hint:'beauty at the edge of land' },
      { word:'JOHANNESBURG', hint:'gold once defined it' },
      { word:'NEWYORK', hint:'a city that never pauses' },
      { word:'LOSANGELES', hint:'where dreams are filmed' },
      { word:'CHICAGO', hint:'wind shapes its identity' },
      { word:'TORONTO', hint:'diversity builds its strength' },
      { word:'VANCOUVER', hint:'nature meets modern life' },
      { word:'SYDNEY', hint:'sails define its harbor' },
      { word:'MELBOURNE', hint:'culture hides in every corner' },
      { word:'AUCKLAND', hint:'bridges connect its beauty' },
      { word:'RIODEJANEIRO', hint:'celebration never ends' },
      { word:'SAOPAULO', hint:'size defines its chaos' },
      { word:'BUENOSAIRES', hint:'passion flows through streets' },
      { word:'LIMA', hint:'history sits above the sea' },
      { word:'SANTIAGO', hint:'mountains guard the city' },
      { word:'MEXICOCITY', hint:'built on ancient ground' },
      { word:'JAKARTA', hint:'movement never stops here' }
    ]
  },
  movies: {
    label: 'MOVIES', emoji: '🎬',
    accent: '#ffd166', glow: 'rgba(255,209,102,.14)', border: 'rgba(255,209,102,.25)', shine: 'rgba(255,209,102,.1)',
    words: [
      { word:'INCEPTION', hint:'a dream inside a dream where reality slips' },
      { word:'TITANIC', hint:'love sinks with a ship called unsinkable' },
      { word:'AVATAR', hint:'a new world seen through borrowed eyes' },
      { word:'GLADIATOR', hint:'a slave who fights to remember who he was' },
      { word:'INTERSTELLAR', hint:'time bends where space stretches' },
      { word:'JOKER', hint:'laughter hides a breaking mind' },
      { word:'BATMAN', hint:'a man becomes fear to fight fear' },
      { word:'SUPERMAN', hint:'power from another world protects this one' },
      { word:'SPIDERMAN', hint:'responsibility follows a simple bite' },
      { word:'IRONMAN', hint:'a genius builds his own survival' },
      { word:'THOR', hint:'a god learns humility through exile' },
      { word:'HULK', hint:'anger becomes strength uncontrollable' },
      { word:'MATRIX', hint:'reality is not what it seems' },
      { word:'JOHNWICK', hint:'revenge written in silence and bullets' },
      { word:'FROZEN', hint:'love melts what fear freezes' },
      { word:'LIONKING', hint:'a king returns to reclaim his place' },
      { word:'HARRYPOTTER', hint:'magic grows with a chosen child' },
      { word:'LORDOFTHERINGS', hint:'a small ring holds great darkness' },
      { word:'AVENGERS', hint:'heroes unite when one is not enough' },
      { word:'DEADPOOL', hint:'chaos speaks with humor and violence' },
      { word:'TRANSFORMERS', hint:'machines hide in plain sight' },
      { word:'JURASSICPARK', hint:'the past walks again with teeth' },
      { word:'FASTANDFURIOUS', hint:'speed is family’s language' },
      { word:'MISSIONIMPOSSIBLE', hint:'tasks that defy possibility' },
      { word:'BLACKPANTHER', hint:'a hidden kingdom leads with honor' },
      { word:'DOCTORSTRANGE', hint:'time and reality bend to will' },
      { word:'SHREK', hint:'an ogre proves appearances deceive' },
      { word:'FINDINGNEMO', hint:'a journey across the ocean for one' },
      { word:'CARS', hint:'speed defines identity' },
      { word:'COCO', hint:'music bridges life and memory' },
      { word:'ALADDIN', hint:'a wish changes destiny' },
      { word:'TOYSTORY', hint:'toys live when you’re not watching' },
      { word:'TERMINATOR', hint:'the future hunts the past' },
      { word:'ROCKY', hint:'a fighter proves worth through pain' },
      { word:'RAMBO', hint:'war never truly ends' },
      { word:'DUNE', hint:'power lies in sand and prophecy' },
      { word:'OPPENHEIMER', hint:'creation carries destruction within' },
      { word:'BARBIE', hint:'a perfect world questions itself' },
      { word:'GODFATHER', hint:'power flows through family and silence' },
      { word:'SCARFACE', hint:'ambition rises and falls violently' },
      { word:'WOLFOFWALLSTREET', hint:'greed speaks loudly in suits' },
      { word:'PARASITE', hint:'two worlds collide under one roof' },
      { word:'TENET', hint:'time moves both forward and backward' },
      { word:'GRAVITY', hint:'survival depends on staying grounded in space' },
      { word:'UP', hint:'a house flies chasing a promise' },
      { word:'INSIDEOUT', hint:'emotions shape what we become' },
      { word:'MINIONS', hint:'chaos follows small yellow minds' },
      { word:'KUNGFUPANDA', hint:'unlikely hero finds inner strength' },
      { word:'MADMAX', hint:'a road warrior fights for survival in a wasteland' },
      { word:'FIGHTCLUB', hint:'the first rule is you do not talk about it' }
    ]
  },
  persons: {
    label: 'FAMOUS PEOPLE', emoji: '🌟',
    accent: '#ff6ba8', glow: 'rgba(255,107,168,.14)', border: 'rgba(255,107,168,.25)', shine: 'rgba(255,107,168,.1)',
    words: [
      { word:'CRISTIANORONALDO', hint:'a machine built from discipline and goals' },
      { word:'LIONELMESSI', hint:'magic written with a left foot' },
      { word:'ELONMUSK', hint:'dreams of earth are not enough' },
      { word:'BILLGATES', hint:'code turned into empire' },
      { word:'STEVEJOBS', hint:'simplicity hides deep vision' },
      { word:'MARKZUCKERBERG', hint:'connections define his creation' },
      { word:'JEFFBEZOS', hint:'everything delivered from one idea' },
      { word:'DWAYNEJOHNSON', hint:'strength meets charisma' },
      { word:'LEONARDODICAPRIO', hint:'stories told through transformation' },
      { word:'TOMCRUISE', hint:'risk is part of performance' },
      { word:'BRADPITT', hint:'calm intensity defines presence' },
      { word:'ANGELINAJOLIE', hint:'strength beyond the screen' },
      { word:'TAYLORSWIFT', hint:'stories hidden in melodies' },
      { word:'DRAKE', hint:'emotion flows through rhythm' },
      { word:'EMINEM', hint:'words strike faster than fists' },
      { word:'RIHANNA', hint:'music and business blend powerfully' },
      { word:'BEYONCE', hint:'presence defines perfection' },
      { word:'KANYEWEST', hint:'genius and chaos walk together' },
      { word:'NARENDRAMODI', hint:'leadership through strong identity' },
      { word:'BARACKOBAMA', hint:'words inspire beyond borders' },
      { word:'DONALDTRUMP', hint:'controversy defines attention' },
      { word:'VLADIMIRPUTIN', hint:'power maintained through control' },
      { word:'ALBERTEINSTEIN', hint:'imagination explains reality' },
      { word:'ISAACNEWTON', hint:'gravity revealed what pulls us down' },
      { word:'NIKOLATESLA', hint:'ideas ahead of their time' },
      { word:'MARIECURIE', hint:'discovery glows in the dark' },
      { word:'VIRATKOHLI', hint:'aggression fuels excellence' },
      { word:'MSDHONI', hint:'calm defines leadership' },
      { word:'NEYMAR', hint:'flair turns football into art' },
      { word:'KYLIANMBAPPE', hint:'speed writes the future' },
      { word:'PELE', hint:'greatness defined the game' },
      { word:'DIEGOMARADONA', hint:'genius mixed with chaos' },
      { word:'ROGERFEDERER', hint:'elegance shapes victory' },
      { word:'SERENAWILLIAMS', hint:'power dominates the court' },
      { word:'MICHAELJORDAN', hint:'flight changed basketball forever' },
      { word:'LEBRONJAMES', hint:'strength meets intelligence' },
      { word:'USAINBOLT', hint:'speed becomes legend' },
      { word:'GRETATHUNBERG', hint:'voice shakes the powerful' },
      { word:'MRBEAST', hint:'giving creates influence' },
      { word:'ANDREWTATE', hint:'controversy builds attention' },
      { word:'KEANUREEVES', hint:'humility defines fame' },
      { word:'JACKIECHAN', hint:'action meets humor' },
      { word:'BRUCELEE', hint:'philosophy fights through motion' },
      { word:'SELENAGOMEZ', hint:'vulnerability meets fame' },
      { word:'ARIANAGRANDE', hint:'voice reaches impossible highs' },
      { word:'JUSTINBIEBER', hint:'fame found too early' },
      { word:'SHAHRUKHKHAN', hint:'romance defines legacy' },
      { word:'SALMANKHAN', hint:'presence dominates screens' },
      { word:'DEEPIKAPADUKONE', hint:'elegance meets strength' },
      { word:'CHRISHEMSWORTH', hint:'the hammer-wielding god of thunder' }
    ]
  },
  games: {
    label: 'VIDEO GAMES', emoji: '🎮',
    accent: '#60a5fa', glow: 'rgba(96,165,250,.14)', border: 'rgba(96,165,250,.25)', shine: 'rgba(96,165,250,.1)',
    words: [
      { word:'MINECRAFT', hint:'build anything from nothing' },
      { word:'FORTNITE', hint:'survival meets chaos in color' },
      { word:'PUBG', hint:'last one standing wins it all' },
      { word:'CALLOFDUTY', hint:'war told through many battles' },
      { word:'GTA', hint:'crime becomes freedom in a city' },
      { word:'FIFA', hint:'football controlled by fingers' },
      { word:'PES', hint:'realism challenges control' },
      { word:'VALORANT', hint:'precision decides survival' },
      { word:'COUNTERSTRIKE', hint:'tactics define victory' },
      { word:'LEAGUEOFLEGENDS', hint:'strategy wins over strength' },
      { word:'DOTA', hint:'complexity rewards patience' },
      { word:'APEXLEGENDS', hint:'speed and skill decide fate' },
      { word:'OVERWATCH', hint:'teamwork defines success' },
      { word:'CYBERPUNK', hint:'future shines but is broken' },
      { word:'WITCHER', hint:'choices shape destiny' },
      { word:'SKYRIM', hint:'dragons return to test fate' },
      { word:'ELDENRING', hint:'suffering teaches mastery' },
      { word:'DARKSOULS', hint:'death is the lesson' },
      { word:'GODOFWAR', hint:'rage carries a father' },
      { word:'ASSASSINSCREED', hint:'history hides in shadows' },
      { word:'FARCRY', hint:'chaos rules distant lands' },
      { word:'RESIDENTEVIL', hint:'fear survives in darkness' },
      { word:'SILENTHILL', hint:'horror lives in the mind' },
      { word:'DOOM', hint:'demons fear the player' },
      { word:'HALO', hint:'a soldier defends humanity' },
      { word:'DESTINY', hint:'light fights endless darkness' },
      { word:'ROCKETLEAGUE', hint:'cars play football' },
      { word:'AMONGUS', hint:'trust hides betrayal' },
      { word:'FALLGUYS', hint:'chaos in colorful competition' },
      { word:'ROBLOX', hint:'worlds created by players' },
      { word:'TERRARIA', hint:'explore beneath the surface' },
      { word:'CLASHOFCLANS', hint:'build and destroy kingdoms' },
      { word:'CLASHROYALE', hint:'strategy in small battles' },
      { word:'SUBWAYSURFERS', hint:'run without stopping' },
      { word:'TEMPLERUN', hint:'escape what follows' },
      { word:'ANGRYBIRDS', hint:'destruction through small force' },
      { word:'POKEMON', hint:'creatures grow through battle' },
      { word:'ZELDA', hint:'adventure guided by courage' },
      { word:'MARIO', hint:'a plumber saves a princess' },
      { word:'SONIC', hint:'speed defines identity' },
      { word:'NEEDFORSPEED', hint:'racing breaks limits' },
      { word:'FORZA', hint:'realism meets speed' },
      { word:'NBA2K', hint:'basketball becomes digital' },
      { word:'TEKKEN', hint:'fists tell stories' },
      { word:'MORTALKOMBAT', hint:'violence defines victory' },
      { word:'STREETFIGHTER', hint:'skill decides outcome' },
      { word:'PUBGMOBILE', hint:'survival in your pocket' },
      { word:'FREEFIRE', hint:'fast survival battles' },
      { word:'STARCRAFT', hint:'three races battle for galactic dominance' },
      { word:'WORLDOFWARCRAFT', hint:'an online world where alliance and horde clash' }
    ]
  },
  brands: {
    label: 'BRANDS', emoji: '™️',
    accent: '#f97316', glow: 'rgba(249,115,22,.14)', border: 'rgba(249,115,22,.25)', shine: 'rgba(249,115,22,.1)',
    words: [
      { word:'APPLE', hint:'simplicity hides powerful design' },
      { word:'NIKE', hint:'victory begins with a simple swoosh' },
      { word:'ADIDAS', hint:'three lines define identity' },
      { word:'PUMA', hint:'speed inspired by an animal' },
      { word:'GUCCI', hint:'luxury speaks softly but loudly' },
      { word:'PRADA', hint:'fashion built on elegance' },
      { word:'ZARA', hint:'fast fashion moves quickly' },
      { word:'H&M', hint:'style made affordable' },
      { word:'LOUISVUITTON', hint:'travel turned luxury' },
      { word:'CHANEL', hint:'timeless elegance in simplicity' },
      { word:'COCACOLA', hint:'happiness bottled' },
      { word:'PEPSI', hint:'rivalry defines refreshment' },
      { word:'MCDONALDS', hint:'golden arches feed the world' },
      { word:'KFC', hint:'secret spices tell the story' },
      { word:'STARBUCKS', hint:'coffee becomes culture' },
      { word:'AMAZON', hint:'everything starts from here' },
      { word:'GOOGLE', hint:'answers to everything' },
      { word:'MICROSOFT', hint:'software shapes the world' },
      { word:'SAMSUNG', hint:'innovation across everything' },
      { word:'SONY', hint:'entertainment meets technology' },
      { word:'INTEL', hint:'power inside machines' },
      { word:'AMD', hint:'competition drives performance' },
      { word:'TESLA', hint:'future runs on electricity' },
      { word:'BMW', hint:'driving becomes experience' },
      { word:'MERCEDES', hint:'luxury defines motion' },
      { word:'AUDI', hint:'four rings unite performance' },
      { word:'TOYOTA', hint:'reliability wins trust' },
      { word:'HONDA', hint:'engineering meets simplicity' },
      { word:'FORD', hint:'history drives forward' },
      { word:'FERRARI', hint:'speed painted red' },
      { word:'LAMBORGHINI', hint:'aggression in design' },
      { word:'UBER', hint:'rides without owning' },
      { word:'AIRBNB', hint:'homes shared globally' },
      { word:'NETFLIX', hint:'stories streamed endlessly' },
      { word:'SPOTIFY', hint:'music without limits' },
      { word:'TIKTOK', hint:'short videos capture attention' },
      { word:'INSTAGRAM', hint:'moments become stories' },
      { word:'FACEBOOK', hint:'connections define identity' },
      { word:'WHATSAPP', hint:'messages travel instantly' },
      { word:'SNAPCHAT', hint:'moments disappear quickly' },
      { word:'PAYPAL', hint:'money moves digitally' },
      { word:'VISA', hint:'global payments trusted' },
      { word:'MASTERCARD', hint:'transactions everywhere' },
      { word:'SHELL', hint:'energy powers movement' },
      { word:'REDBULL', hint:'energy gives wings' },
      { word:'MONSTER', hint:'power in a can' },
      { word:'LEGO', hint:'creativity built piece by piece' },
      { word:'IKEA', hint:'furniture made simple' },
      { word:'ROLEX', hint:'time measured in prestige' },
      { word:'CARTIER', hint:'jewellery for royalty and rebels' }
    ]
  },
  sports: {
    label: 'SPORTS', emoji: '⚽',
    accent: '#34d399', glow: 'rgba(52,211,153,.14)', border: 'rgba(52,211,153,.25)', shine: 'rgba(52,211,153,.1)',
    words: [
      { word:'FOOTBALL', hint:'feet control the world’s favorite game' },
      { word:'CRICKET', hint:'patience meets precision' },
      { word:'BASKETBALL', hint:'height meets skill in motion' },
      { word:'TENNIS', hint:'one racket decides the rally' },
      { word:'BADMINTON', hint:'speed flies across a net' },
      { word:'VOLLEYBALL', hint:'teamwork keeps it alive' },
      { word:'BASEBALL', hint:'a bat changes everything' },
      { word:'RUGBY', hint:'strength without fear' },
      { word:'AMERICANFOOTBALL', hint:'strategy meets impact' },
      { word:'GOLF', hint:'precision over power' },
      { word:'BOXING', hint:'fists tell the story' },
      { word:'MMA', hint:'all styles become one' },
      { word:'WRESTLING', hint:'strength meets technique' },
      { word:'FORMULAONE', hint:'speed defined by machines' },
      { word:'MOTOGP', hint:'two wheels at extreme limits' },
      { word:'CYCLING', hint:'endurance over distance' },
      { word:'SWIMMING', hint:'speed through water' },
      { word:'ATHLETICS', hint:'pure human performance' },
      { word:'MARATHON', hint:'endurance beyond limits' },
      { word:'TABLETENNIS', hint:'reflex defines victory' },
      { word:'SNOOKER', hint:'angles decide everything' },
      { word:'CHESS', hint:'war without weapons' },
      { word:'ESPORTS', hint:'competition through screens' },
      { word:'HOCKEY', hint:'ice defines the game' },
      { word:'FIELDHOCKEY', hint:'speed on grass' },
      { word:'ARCHERY', hint:'focus hits the target' },
      { word:'SHOOTING', hint:'precision decides outcome' },
      { word:'KARATE', hint:'discipline through strikes' },
      { word:'TAEKWONDO', hint:'kicks define style' },
      { word:'JUDO', hint:'balance defeats strength' },
      { word:'SURFING', hint:'waves become playground' },
      { word:'SKATEBOARDING', hint:'balance defines tricks' },
      { word:'SNOWBOARDING', hint:'glide through snow' },
      { word:'SKIING', hint:'speed down the mountain' },
      { word:'WEIGHTLIFTING', hint:'strength measured in numbers' },
      { word:'BODYBUILDING', hint:'physique becomes art' },
      { word:'GYMNASTICS', hint:'flexibility meets strength' },
      { word:'ROWING', hint:'teamwork moves forward' },
      { word:'CANOEING', hint:'control over water' },
      { word:'SAILING', hint:'wind decides direction' },
      { word:'CLIMBING', hint:'gravity challenged directly' },
      { word:'PARKOUR', hint:'movement without limits' },
      { word:'TRIATHLON', hint:'three sports, one challenge' },
      { word:'PENTATHLON', hint:'versatility defines skill' },
      { word:'FENCING', hint:'speed with blades' },
      { word:'HANDBALL', hint:'fast goals in small space' },
      { word:'KABADDI', hint:'breath controls survival' },
      { word:'POLO', hint:'horses join the game' },
      { word:'ROCKCLIMBING', hint:'upward battle against gravity' },
      { word:'ULTIMATEFRISBEE', hint:'flying disc meets athleticism' }
    ]
  },
  mixed: {
    label: 'MIXED 🔥', emoji: '🔥',
    accent: '#ffd166', glow: 'rgba(255,209,102,.16)', border: 'rgba(255,209,102,.28)', shine: 'rgba(255,209,102,.12)',
    words: []
  }
};

const MAIN_CATS   = ['food','animals','countries','cities','movies','persons','games','brands','sports'];
const MAX_LIVES   = 7;
const HANG_IDS    = ['hp1','hp1b','hp2','hp3','hp4','hp5','hp6','hp7'];
const KB_ROWS     = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M']
];

/* ─── STATE ──────────────────────────────────────────────── */
let state = {
  totalScore:  0,
  wins:        0,
  streak:      0,
  bestStreak:  0,
  globalCompletionCount: 0,
  allCompletedFlag: false,
  progress: Object.fromEntries(
    [...MAIN_CATS,'mixed'].map(c => [c, { played:[], score:0 }])
  ),
};

let game = {
  category:     '',
  word:         '',
  hint:         '',
  guessed:      new Set(),
  wrong:        [],
  lives:        MAX_LIVES,
  over:         false,
};

/* ─── PERSISTENCE ────────────────────────────────────────── */
function save() {
  try { localStorage.setItem('wduel2_state', JSON.stringify(state)); } catch(e){}
}
function load() {
  try {
    const raw = localStorage.getItem('wduel2_state');
    if (raw) {
      const d = JSON.parse(raw);
      state = { ...state, ...d };
      // ensure new categories exist
      [...MAIN_CATS,'mixed'].forEach(c => {
        if (!state.progress[c]) state.progress[c] = { played:[], score:0 };
      });
    }
  } catch(e){}
}

/* ─── SCREEN TRANSITIONS ─────────────────────────────────── */
const SCREENS = {
  landing:  document.getElementById('landingScreen'),
  category: document.getElementById('categoryScreen'),
  game:     document.getElementById('gameScreen'),
};
function showScreen(name) {
  Object.entries(SCREENS).forEach(([k,el]) => {
    if (k === name) {
      el.classList.remove('exit'); el.classList.add('active');
    } else if (el.classList.contains('active')) {
      el.classList.add('exit');
      setTimeout(() => el.classList.remove('active','exit'), 440);
    }
  });
}

/* ─── THEME ──────────────────────────────────────────────── */
const html = document.documentElement;
function applyTheme(t) {
  html.setAttribute('data-theme', t);
  document.getElementById('themeIcon').textContent  = t === 'dark' ? '🌙' : '☀️';
  document.getElementById('themeLabel').textContent = t === 'dark' ? 'DARK' : 'LIGHT';
  try { localStorage.setItem('wduel2_theme', t); } catch(e){}
}
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ─── CANVAS ANIMATION ───────────────────────────────────── */
function initCanvas() {
  const cv  = document.getElementById('bgCanvas');
  const ctx = cv.getContext('2d');
  let W, H, pts = [];

  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class Dot {
    constructor() { this.reset(true); }
    reset(rand) {
      this.x  = rand ? Math.random()*W : (Math.random() < .5 ? 0 : W);
      this.y  = rand ? Math.random()*H : Math.random()*H;
      this.r  = Math.random()*1.4+.3;
      this.vx = (Math.random()-.5)*.18;
      this.vy = (Math.random()-.5)*.18;
      this.a  = Math.random()*.55+.15;
      this.da = (Math.random()*.005+.001)*(Math.random()<.5?1:-1);
    }
    tick() {
      this.x += this.vx; this.y += this.vy;
      this.a  += this.da;
      if (this.a > .75 || this.a < .1) this.da *= -1;
      if (this.x < -5 || this.x > W+5 || this.y < -5 || this.y > H+5) this.reset(false);
    }
    draw() {
      const dark = html.getAttribute('data-theme') !== 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = dark
        ? `rgba(5,216,240,${this.a})`
        : `rgba(0,110,160,${this.a*.45})`;
      ctx.fill();
    }
  }

  for (let i=0;i<140;i++) pts.push(new Dot());
  (function loop(){ ctx.clearRect(0,0,W,H); pts.forEach(p=>{p.tick();p.draw();}); requestAnimationFrame(loop); })();
}

/* ─── LANDING ────────────────────────────────────────────── */
function refreshLanding() {
  document.getElementById('lsScore').textContent  = state.totalScore;
  document.getElementById('lsWins').textContent   = state.wins;
  document.getElementById('lsStreak').textContent = state.bestStreak;
}
document.getElementById('btnStart').addEventListener('click', () => {
  showScreen('category');
  buildCategoryGrid();
});

/* ─── CATEGORY GRID ──────────────────────────────────────── */
function buildCategoryGrid() {
  document.getElementById('catScoreDisplay').textContent = state.totalScore;
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';

  const allCats = [...MAIN_CATS, 'mixed'];
  allCats.forEach((cat, i) => {
    const data  = WORD_DATA[cat];
    const prog  = state.progress[cat];
    const total = cat === 'mixed' ? 999 : WORD_DATA[cat].words.length;
    const done  = prog.played.length;
    const remaining = total - done;
    const stars  = cat === 'mixed' ? calcMixedStars() : (done >= total ? 3 : done >= total/2 ? 2 : done > 0 ? 1 : 0);

    const card = document.createElement('div');
    card.className = 'cat-card' + (cat === 'mixed' ? ' mixed-card' : '');
    card.dataset.cat = cat;
    card.style.cssText = `
      --cc-accent:${data.accent};
      --cc-glow:${data.glow};
      --cc-border:${data.border};
      --cc-shine:${data.shine};
      animation-delay:${i*0.06}s;
    `;

    const starStr   = '⭐'.repeat(stars) + '☆'.repeat(3-stars);
    const doneHTML  = (cat !== 'mixed' && done >= total)
      ? `<div class="cat-done-badge show">DONE ✓</div>` : '';

    card.innerHTML = `
      <span class="cat-emoji">${data.emoji}</span>
      <span class="cat-name">${data.label}</span>
      <span class="cat-sub">${cat === 'mixed' ? 'All categories' : remaining+' / '+total+' words'}</span>
      <div class="cat-stars">${starStr}</div>
      ${doneHTML}
    `;

    card.addEventListener('click', () => startGame(cat));
    grid.appendChild(card);
  });
}

function calcMixedStars() {
  const p = state.progress.mixed;
  return p.played.length >= 15 ? 3 : p.played.length >= 7 ? 2 : p.played.length > 0 ? 1 : 0;
}

document.getElementById('backToLanding').addEventListener('click', () => {
  showScreen('landing'); refreshLanding();
});

/* ─── GAME INIT ──────────────────────────────────────────── */
function startGame(cat) {
  game.category = cat;
  pickWord();
  showScreen('game');
  renderGame();
}

function pickWord() {
  let pool;
  if (game.category === 'mixed') {
    pool = MAIN_CATS.flatMap(c => WORD_DATA[c].words);
  } else {
    pool = WORD_DATA[game.category].words;
  }
  const played    = state.progress[game.category].played;
  let available   = pool.filter(w => !played.includes(w.word));
  if (!available.length) {
    // All words in this category have been played – reset played array for this category
    state.progress[game.category].played = [];
    available = pool;
    save();
  }
  const pick       = available[Math.floor(Math.random()*available.length)];
  game.word        = pick.word;
  game.hint        = pick.hint;
  game.guessed     = new Set();
  game.wrong       = [];
  game.lives       = MAX_LIVES;
  game.over        = false;
}

/* ─── RENDER GAME ────────────────────────────────────────── */
function renderGame() {
  const data = WORD_DATA[game.category];
  document.getElementById('catTag').textContent    = data.label;
  document.getElementById('gScoreVal').textContent = state.totalScore;
  document.getElementById('hintText').textContent  = game.hint;
  document.getElementById('wordMeta').textContent  =
    `${game.word.length} letter${game.word.length!==1?'s':''} — Category: ${data.label}`;

  renderHearts();
  renderHangParts();
  renderSlots();
  renderKeyboard();
  renderWrong();
}

function renderHearts() {
  const row = document.getElementById('livesHearts');
  row.innerHTML = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    const s = document.createElement('span');
    s.className = 'hrt' + (i >= game.lives ? ' gone' : '');
    s.textContent = i < game.lives ? '❤️' : '🖤';
    row.appendChild(s);
  }
  document.getElementById('livesNum').textContent = game.lives;
}

function renderHangParts() {
  HANG_IDS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute('opacity', i < game.wrong.length ? '1' : '0');
    el.classList.toggle('show', i < game.wrong.length);
  });
}

function renderSlots() {
  const container = document.getElementById('wordSlots');
  container.innerHTML = '';
  const words = game.word.split(' ');

  words.forEach((w, wi) => {
    [...w].forEach(letter => {
      const slot = document.createElement('div');
      slot.className = 'wslot';
      slot.dataset.letter = letter;

      const ltr = document.createElement('div');
      ltr.className = 'wslot-letter';
      ltr.textContent = game.guessed.has(letter) ? letter : '';

      const line = document.createElement('div');
      line.className = 'wslot-line' + (game.guessed.has(letter) ? ' lit' : '');

      slot.appendChild(ltr);
      slot.appendChild(line);
      container.appendChild(slot);
    });
    // Space between words
    if (wi < words.length - 1) {
      const sp = document.createElement('div');
      sp.className = 'wslot space-slot';
      container.appendChild(sp);
    }
  });
}

function updateSlots() {
  const slots = document.querySelectorAll('.wslot[data-letter]');
  slots.forEach(slot => {
    const letter = slot.dataset.letter;
    const ltr    = slot.querySelector('.wslot-letter');
    const line   = slot.querySelector('.wslot-line');
    if (game.guessed.has(letter) && !ltr.textContent) {
      ltr.textContent = letter;
      ltr.classList.add('revealed');
      line.classList.add('lit');
    }
  });
}

function renderKeyboard() {
  const kb = document.getElementById('keyboard');
  kb.innerHTML = '';
  KB_ROWS.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    row.forEach(l => {
      const btn = document.createElement('button');
      btn.className = 'kb-key';
      btn.textContent = l;
      btn.dataset.letter = l;
      if (game.guessed.has(l)) {
        btn.classList.add('used', game.word.includes(l) ? 'cor' : 'wrg');
      }
      btn.addEventListener('click', () => guess(l));
      rowEl.appendChild(btn);
    });
    kb.appendChild(rowEl);
  });
}

function renderWrong() {
  const box = document.getElementById('wrongChips');
  box.innerHTML = '';
  game.wrong.forEach(l => {
    const c = document.createElement('span');
    c.className = 'wchip';
    c.textContent = l;
    box.appendChild(c);
  });
}

/* ─── GUESS HANDLER ──────────────────────────────────────── */
function guess(letter) {
  if (game.over || game.guessed.has(letter)) return;
  game.guessed.add(letter);

  const correct = game.word.replace(/ /g,'').includes(letter);
  const btn = document.querySelector(`.kb-key[data-letter="${letter}"]`);

  if (correct) {
    btn?.classList.add('cor','used','kpop');
    sound('correct');
  } else {
    btn?.classList.add('wrg','used','kshake');
    game.wrong.push(letter);
    game.lives--;
    sound('wrong');

    // Show next hangman part
    const idx = game.wrong.length - 1;
    if (idx < HANG_IDS.length) {
      const el = document.getElementById(HANG_IDS[idx]);
      if (el) {
        el.setAttribute('opacity','1');
        el.classList.add('show','swing');
        setTimeout(() => el.classList.remove('swing'), 550);
      }
    }
  }

  updateSlots();
  renderHearts();
  renderWrong();
  document.getElementById('gScoreVal').textContent = state.totalScore;

  // Check end
  const wordLetters = [...new Set(game.word.replace(/ /g,''))];
  const allDone = wordLetters.every(l => game.guessed.has(l));

  if (allDone) {
    // Immediately end game without extra delay (reduces lag)
    endGame(true);
  } else if (game.lives <= 0) {
    wordLetters.forEach(l => game.guessed.add(l));
    updateSlots();
    endGame(false);
  }
}

// Physical keyboard
document.addEventListener('keydown', e => {
  if (!SCREENS.game.classList.contains('active')) return;
  const l = e.key.toUpperCase();
  if (/^[A-Z]$/.test(l)) guess(l);
});

/* ─── GAME END ───────────────────────────────────────────── */
function endGame(won) {
  game.over = true;
  let pts = 0;
  if (won) {
    pts = 10 + game.lives * 5;
    state.totalScore += pts;
    state.wins++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    sound('win');

    // Record the solved word ONLY on win
    const prog = state.progress[game.category];
    if (!prog.played.includes(game.word)) {
      prog.played.push(game.word);
      if (won) prog.score += pts;
      save();

      // After adding the word, check if this category is now complete
      const catTotal = game.category === 'mixed' ? 999 : WORD_DATA[game.category].words.length;
      if (game.category !== 'mixed' && prog.played.length === catTotal) {
        showToast(`🎉 ${WORD_DATA[game.category].label} completed! 🎉`);
      }

      // Now check if all categories are completed
      checkAllCategoriesCompleted();
    }
  } else {
    state.streak = 0;
    sound('lose');
    // Do NOT record the word when losing
    // (no addition to played array)
  }

  save();
  showModal(won, pts);
}

/* ─── CHECK ALL CATEGORIES COMPLETED (excluding mixed) ──── */
function checkAllCategoriesCompleted() {
  let allCompleted = true;
  for (const cat of MAIN_CATS) {
    const total = WORD_DATA[cat].words.length;
    const played = state.progress[cat].played.length;
    if (played < total) {
      allCompleted = false;
      break;
    }
  }
  if (allCompleted && !state.allCompletedFlag) {
    state.allCompletedFlag = true;
    state.globalCompletionCount++;
    save();

    // Determine award based on completion count
    let award = '';
    if (state.globalCompletionCount === 1) award = '🏆 GOLD TROPHY 🏆';
    else if (state.globalCompletionCount === 2) award = '🥈 SILVER MEDAL 🥈';
    else if (state.globalCompletionCount === 3) award = '🥉 BRONZE MEDAL 🥉';
    else award = `🎖️ RANK ${state.globalCompletionCount} MEDAL 🎖️`;

    showCompletionModal(award);
    // Reset category progress for replay (but keep mixed progress separate)
    for (const cat of MAIN_CATS) {
      state.progress[cat].played = [];
    }
    save();
    // Refresh category grid if visible
    if (SCREENS.category.classList.contains('active')) {
      buildCategoryGrid();
    }
  }
}

function showCompletionModal(award) {
  const modal = document.getElementById('resultModal');
  document.getElementById('modalEmo').textContent = award.includes('GOLD') ? '🏆' : award.includes('SILVER') ? '🥈' : award.includes('BRONZE') ? '🥉' : '🎖️';
  const titleEl = document.getElementById('modalTitle');
  titleEl.textContent = 'VICTORY!';
  titleEl.className = 'modal-title win';
  document.getElementById('modalDesc').textContent = `You completed all categories!`;
  document.getElementById('modalWord').textContent = award;
  document.getElementById('modalPts').textContent = `Total Score: ${state.totalScore}`;
  document.getElementById('btnNext').style.display = 'none';
  document.getElementById('btnBackCats').textContent = '🏆 CLAIM REWARD 🏆';
  modal.classList.remove('hidden');
  spawnConfetti(document.getElementById('confettiZone'));
  // Override modal button behaviour
  const claimBtn = document.getElementById('btnBackCats');
  const originalClick = claimBtn.onclick;
  claimBtn.onclick = () => {
    modal.classList.add('hidden');
    showScreen('category');
    buildCategoryGrid();
    // restore original if needed
    claimBtn.onclick = originalClick;
  };
}

/* ─── TOAST FUNCTION ─────────────────────────────────────── */
function showToast(message, duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

/* ─── MODAL ──────────────────────────────────────────────── */
function showModal(won, pts) {
  const modal = document.getElementById('resultModal');
  document.getElementById('modalEmo').textContent   = won
    ? ['🎉','🏆','🔥','⭐','🎊'][Math.floor(Math.random()*5)] : '💀';
  const titleEl = document.getElementById('modalTitle');
  titleEl.textContent = won ? 'You Got It!' : 'Game Over!';
  titleEl.className   = 'modal-title ' + (won ? 'win' : 'lose');
  document.getElementById('modalDesc').textContent  = won
    ? `${game.lives} live${game.lives!==1?'s':''} left · Streak: ${state.streak}`
    : 'Better luck next time!';
  document.getElementById('modalWord').textContent  = won
    ? game.word : `The word was: ${game.word}`;
  document.getElementById('modalPts').textContent   = won
    ? `+${pts} pts · Total: ${state.totalScore}` : `Total: ${state.totalScore}`;
  document.getElementById('btnNext').style.display = 'inline-flex';
  document.getElementById('btnBackCats').textContent = 'Categories';

  if (won) spawnConfetti(document.getElementById('confettiZone'));
  modal.classList.remove('hidden');
}

function spawnConfetti(zone) {
  zone.innerHTML = '';
  const cols = ['#ffd166','#05d8f0','#ff6ba8','#2ddc78','#c084fc','#f97316','#fff'];
  for (let i=0;i<35;i++) {
    const p = document.createElement('div');
    p.className = 'cp';
    const size = Math.random()*9+4;
    p.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*15}%;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      width:${size}px;height:${size}px;
      border-radius:${Math.random()>.5?'50%':'3px'};
      animation-duration:${Math.random()*.9+.7}s;
      animation-delay:${Math.random()*.35}s;
    `;
    zone.appendChild(p);
  }
}

document.getElementById('btnNext').addEventListener('click', () => {
  document.getElementById('resultModal').classList.add('hidden');
  pickWord(); renderGame(); buildCategoryGrid();
});
document.getElementById('btnBackCats').addEventListener('click', () => {
  document.getElementById('resultModal').classList.add('hidden');
  showScreen('category'); buildCategoryGrid();
});
document.getElementById('backToCats').addEventListener('click', () => {
  showScreen('category'); buildCategoryGrid();
});

/* ─── SOUND ──────────────────────────────────────────────── */
let actx = null;
function getCtx() {
  if (!actx) try { actx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){}
  return actx;
}
function tone(f, type, dur, vol=0.07) {
  const ctx = getCtx(); if (!ctx) return;
  try {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = type; o.frequency.setValueAtTime(f, ctx.currentTime);
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime+dur);
    o.start(); o.stop(ctx.currentTime+dur);
  } catch(e){}
}
function sound(type) {
  if (type==='correct') tone(680,'sine',.17);
  if (type==='wrong')   tone(165,'sawtooth',.22);
  if (type==='win')     { tone(523,'sine',.12); setTimeout(()=>tone(659,'sine',.12),110); setTimeout(()=>tone(784,'sine',.28),220); }
  if (type==='lose')    { tone(320,'sawtooth',.16); setTimeout(()=>tone(200,'sawtooth',.3),160); }
}

/* ─── INIT ───────────────────────────────────────────────── */
function init() {
  load();
  try { applyTheme(localStorage.getItem('wduel2_theme')||'dark'); }
  catch(e){ applyTheme('dark'); }
  refreshLanding();
  initCanvas();
  showScreen('landing');
}

init();
