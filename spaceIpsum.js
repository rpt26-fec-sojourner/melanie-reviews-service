var nouns = [
'Space','Earth','Solar System','Jupiter','Mars','quarter moon','Neptune','moon','gibbous moon','Mercury','Pluto','half moon','Saturn','Venus','crescent moon','Uranus','planet','axial tilt','waning','waxing','asteroid belt','asteroid','black hole','big bang theory','astronaut','comet','binary star','astronomer','astronomy','elliptical orbit','density','constellation','deep space','cosmonaut','cosmos','dwarf planet','crater','day','dwarf star','dust','equinox','inner planets','eclipse','ecliptic','inferior planets','galaxy','lunar','falling star','meteorite','meteor','meteor shower','meteoroid','lens','gravity','full moon','inertia','Milky Way','mass','magnitude','outer planets','nebula','orbit','shooting star','rocket','solar','space exploration','solstice','star','total eclipse','umbra','space','vernal equinox','sky','satellite','solar system','new moon','penumbra','solar wind','light-year','rings','partial eclipse','observatory','phase','orbital inclination','universe','zodiac','space station','sun','starlight','telescope'
];

var adjectives = [
  'adorable','adventurous', 'aggressive', 'agreeable', 'alert', 'alive', 'amused', 'angry', 'annoyed', 'annoying', 'anxious', 'arrogant', 'ashamed', 'attractive', 'average', 'awful', 'bad', 'beautiful', 'better', 'bewildered', 'black', 'bloody', 'blue', 'blue-eyed', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'crazy', 'creepy', 'crowded', 'cruel', 'curious', 'cute', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dull', 'eager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'ill', 'important', 'impossible', 'inexpensive', 'innocent', 'inquisitive', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'open', 'outrageous', 'outstanding', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful', 'precious', 'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super', 'talented', 'tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful', 'thoughtful', 'thoughtless', 'tired', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset', 'uptight', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wide-eyed', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous'
];

var verbs = [
  'loved', 'hated', 'adored', 'was appalled by', 'was flabbergasted by', 'couldn\'t deal with', 'was mesmorized by', 'couldn\'t help but be entertained by', 'loathed'
]

var exclamations = [
  'Wow!', 'Oh my goodness.', 'Gadzooks!', 'Holy Houston, Batman.', 'AMAZING!', 'NEVER AGAIN.', 'My new fave!'
]

var sentenceGenerator = function(num) {
  var noun = nouns[Math.floor(Math.random() * nouns.length)];
  var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  var verb = verbs[Math.floor(Math.random() * verbs.length)];
  var noun2 = nouns[Math.floor(Math.random() * nouns.length)];
  var adjective2 = adjectives[Math.floor(Math.random() * adjectives.length)];

  if (num === 1) {
    return 'The ' + noun + ' was ' + adjective + ', but I ' + verb + ' the ' + noun2 + '.';
  } else if (num === 2) {
    return 'My family ' + verb + ' the ' + adjective + ' ' + noun + '!';
  } else if (num === 3) {
    return adjective.toUpperCase() + ' ' + noun + '!';
  } else if (num === 4) {
    return 'I ' + verb + ' the ' + adjective + ', ' + adjective2 + ' ' + noun + ' that was visible from every window.';
  } else {
    return exclamations[Math.floor(Math.random() * exclamations.length)];
  }
}

