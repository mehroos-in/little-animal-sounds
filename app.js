'use strict';

// Real animal photographs with source and location details in credits.html.
const animals = [
  {name:'Cat', noise:'Meow!', emoji:'🐱', color:'#ffe6d2', sound:'assets/clean-audio/cat.ogg'},
  {name:'Dog', noise:'Woof!', emoji:'🐶', color:'#ece6ff', sound:'assets/clean-audio/dog.ogg'},
  {name:'Cow', noise:'Moo!', emoji:'🐮', color:'#f9e5ee', sound:null},
  {name:'Lion', noise:'Roar!', emoji:'🦁', color:'#fff0c6', sound:'assets/clean-audio/lion.ogg'},
  {name:'Elephant', noise:'Trumpet!', emoji:'🐘', color:'#ddf1f5', sound:'assets/clean-audio/elephant.ogg'},
  {name:'Duck', noise:'Quack!', emoji:'🦆', color:'#e8f1d5', sound:'assets/clean-audio/duck.ogg'},
  {name:'Sheep', noise:'Baa!', emoji:'🐑', color:'#fbe4eb', sound:'assets/clean-audio/sheep.ogg'},
  {name:'Crow', noise:'Caw!', emoji:'🐦‍⬛', color:'#e6eaf9', sound:'assets/clean-audio/crow.ogg'},
  {name:'Pigeon', noise:'Coo!', emoji:'🕊️', color:'#e8eef5', sound:null, photos:['Pigeon Close up 5058.JPG','Rock Pigeon bird.JPG'], photoNotes:['Rock pigeon · head/face close-up · Kolkata, India','Rock pigeon · full-body view · New Delhi, India']},
  {name:'Cuckoo', noise:'Koo-oo!', emoji:'🐦', color:'#f7ead3', sound:'assets/clean-audio/cuckoo.ogg'},
  {name:'Rooster', noise:'Cock-a-doodle-doo!', emoji:'🐓', color:'#ffecd4', sound:'assets/clean-audio/rooster.ogg', category:'Birds'},
  {name:'Tiger', noise:'Roar!', emoji:'🐅', color:'#ffe5bf', sound:null, category:'Wild Animals'},
  {name:'Peacock', noise:'Kee-ow!', emoji:'🦚', color:'#d8f2ea', category:'Birds', sound:'assets/clean-audio/peacock.ogg'},
  {name:'Owl', noise:'Chirr!', emoji:'🦉', color:'#f4eadb', category:'Birds', sound:'assets/clean-audio/owl.ogg'},
  {name:'Goat', noise:'Maa!', emoji:'🐐', color:'#e6f0da', category:'Domestic Animals', sound:'assets/clean-audio/goat.ogg'},
  {name:'Cheetah', noise:'Chirp!', emoji:'🐆', color:'#fff0cf', category:'Wild Animals', sound:'assets/clean-audio/cheetah.ogg', photos:['Kushki face.jpg','Kooshki (Iranian Cheetah) 02.jpg'], photoNotes:['Asiatic cheetah · face portrait · Iran','Asiatic cheetah · full-body view · Iran']},

  {name:'Rabbit', noise:'Squeak!', emoji:'🐰', color:'#f7e5ed', category:'Wild Animals', photos:['Indian hare by N A Nazeer.jpg','Indian Hare at Pench National Park, India.jpg'], photoNotes:['Indian hare · head/profile view · India','Indian hare · full-body view · Pench National Park, Madhya Pradesh, India'], sound:null},
  {name:'Horse', noise:'Neigh!', emoji:'🐴', color:'#f4e5d4', category:'Domestic Animals', photos:['HorseIndia.jpg','Indian horse.jpg'], photoNotes:['Horse · India','Indian horse · India'], sound:null},
  {name:'Monkey', noise:'Chatter!', emoji:'🐒', color:'#f5e9d6', category:'Wild Animals', photos:['Langur Monkey Photo.jpg','Langur Monkey.JPG'], photoNotes:['Gray langur · Lonar Crater, Maharashtra, India','Gray langur · Lonar Crater, Maharashtra, India'], sound:null},
  {name:'Deer', noise:'Call!', emoji:'🦌', color:'#e9efd9', category:'Wild Animals', photos:['Spotted deer, chital.jpg','Chital(spotted deer).jpg'], photoNotes:['Spotted deer · Parambikulam Tiger Reserve, Kerala, India','Spotted deer · Bannerghatta National Park, Karnataka, India'], sound:null},
  {name:'Squirrel', noise:'Chirp!', emoji:'🐿️', color:'#f8e8d5', category:'Wild Animals', photos:['Indian Palm Squirrel Portrait.jpg','Indian Palm Squirrel.jpg'], photoNotes:['Indian palm squirrel · Bangalore, India · close portrait','Indian palm squirrel · Mehrangarh Fort, Jodhpur, India'], sound:null},
  {name:'Bear', noise:'Growl!', emoji:'🐻', color:'#eee4d8', category:'Wild Animals', photos:['Sloth Bear or Indian Bear Melursus ursinus DSCN2124 02.jpg','SlothBear1.jpg'], photoNotes:['Sloth bear · Tadoba Andhari Tiger Reserve, Maharashtra, India','Sloth bear · Daroji, Karnataka, India'], sound:null},
  {name:'Parrot', noise:'Squawk!', emoji:'🦜', color:'#dff0dc', category:'Birds', photos:['Parrot from India.jpg','Rose ringed Parakeet . Parrot.jpg'], photoNotes:['Parrot · India · existing CC0 photograph','Rose-ringed parakeet · Raisar, Punjab, India'], sound:null},
  {name:'Sparrow', noise:'Chirp!', emoji:'🐦', color:'#f3eadb', category:'Birds', photos:['Common House Sparrow India.jpg','House Sparrow India.jpg'], photoNotes:['House sparrow · India','House sparrow · Kasauli, Himachal Pradesh, India'], sound:null},
  {name:'Myna', noise:'Chatter!', emoji:'🐦', color:'#f6e8d2', category:'Birds', photos:['Myna-indian.jpg','Common myna (India, 2017).jpg'], photoNotes:['Common myna · New Delhi, India','Common myna · India · 2017'], sound:null},
  {name:'Kingfisher', noise:'Chatter!', emoji:'🐦', color:'#dceef3', category:'Birds', photos:['Common Indian Kingfisher.jpg','The Common Kingfisher.jpg'], photoNotes:['White-throated kingfisher · India','Common kingfisher · India'], sound:null},
  {name:'Eagle', noise:'Screech!', emoji:'🦅', color:'#e8e8e2', category:'Birds', photos:['Eagle (india).jpg','Indian Eagle.jpg'], photoNotes:['Eagle · Guindy National Park, Chennai, India','Grey-headed fish eagle · India'], sound:null},
  {name:'Woodpecker', noise:'Tap-tap!', emoji:'🐦', color:'#f4e5d8', category:'Birds', photos:['Greater flameback woodpecker male.jpg','Greater Flameback Woodpecker (male).jpg'], photoNotes:['Greater flameback woodpecker · India','Yellow-crowned woodpecker · India'], sound:null}
];
const keralaPictures = {
  "Cat": [
    {
      "path": "assets/kerala/cat-1.jpg",
      "note": "Domestic cat · India"
    },
    {
      "path": "assets/kerala/cat-2.jpg",
      "note": "Domestic cat · Kerala"
    }
  ],
  "Dog": [
    {
      "path": "assets/kerala/dog-1.jpg",
      "note": "Kattampally, Kerala"
    },
    {
      "path": "assets/kerala/dog-2.jpg",
      "note": "Indian pariah dog · Punjab"
    }
  ],
  "Cow": [
    {
      "path": "assets/kerala/cow-1.jpg",
      "note": "Thekkady, Kerala"
    },
    {
      "path": "assets/kerala/cow-2.jpg",
      "note": "Vechur cattle · Kerala"
    }
  ],
  "Lion": [
    {
      "path": "assets/kerala/lion-1.jpg",
      "note": "Thiruvananthapuram Zoo, Kerala"
    },
    {
      "path": "assets/kerala/lion-2.jpg",
      "note": "Gir National Park, Gujarat"
    }
  ],
  "Elephant": [
    {
      "path": "assets/kerala/elephant-1.jpg",
      "note": "Marayoor forest, Kerala"
    },
    {
      "path": "assets/kerala/elephant-2.jpg",
      "note": "Marayoor forest, Kerala"
    }
  ],
  "Duck": [
    {
      "path": "assets/kerala/duck-1.jpg",
      "note": "Keoladeo National Park, Rajasthan"
    },
    {
      "path": "assets/kerala/duck-2.jpg",
      "note": "Patiala, Punjab"
    }
  ],
  "Sheep": [
    {
      "path": "assets/kerala/sheep-1.jpg",
      "note": "Palakkad, Kerala"
    },
    {
      "path": "assets/kerala/sheep-2.jpg",
      "note": "Gangabal, Kashmir"
    }
  ],
  "Crow": [
    {
      "path": "assets/kerala/crow-1.jpg",
      "note": "House crow · Batticaloa, Sri Lanka"
    },
    {
      "path": "assets/kerala/crow-2.jpg",
      "note": "Kerala"
    }
  ],
  "Pigeon": [
    {
      "path": "assets/kerala/pigeon-1.jpg",
      "note": "Kerala"
    },
    {
      "path": "assets/kerala/pigeon-2.jpg",
      "note": "Rock pigeon · London, United Kingdom"
    }
  ],
  "Cuckoo": [
    {
      "path": "assets/kerala/cuckoo-1.jpg",
      "note": "Asian koel · Nallankara, Thrissur, Kerala"
    },
    {
      "path": "assets/kerala/cuckoo-2.jpg",
      "note": "Asian koel · Nallankara, Thrissur, Kerala"
    }
  ],
  "Rooster": [
    {
      "path": "assets/kerala/rooster-1.jpg",
      "note": "Kozhikode, Kerala"
    },
    {
      "path": "assets/kerala/rooster-2.jpg",
      "note": "Rooster · Tamil Nadu, India"
    }
  ],
  "Tiger": [
    {
      "path": "assets/kerala/tiger-1.jpg",
      "note": "Thiruvananthapuram Zoo, Kerala"
    },
    {
      "path": "assets/kerala/tiger-2.jpg",
      "note": "Kanha National Park, Madhya Pradesh"
    }
  ],
  "Peacock": [
    {
      "path": "assets/kerala/peacock-1.jpg",
      "note": "Thrissur Zoo, Kerala"
    },
    {
      "path": "assets/kerala/peacock-2.jpg",
      "note": "Fort Kochi, Kerala"
    }
  ],
  "Owl": [
    {
      "path": "assets/kerala/owl-1.jpg",
      "note": "Spotted owlet · Patiala, Punjab, India"
    },
    {
      "path": "assets/kerala/owl-2.jpg",
      "note": "Nallepilly, Kerala"
    }
  ],
  "Goat": [
    {
      "path": "assets/kerala/goat-1.jpg",
      "note": "Kerala"
    },
    {
      "path": "assets/kerala/goat-2.jpg",
      "note": "Domestic goat · India"
    }
  ],
  "Cheetah": [
    {
      "path": "assets/kerala/cheetah-1.jpg",
      "note": "Whipsnade Zoo, England · guest animal"
    },
    {
      "path": "assets/kerala/cheetah-2.jpg",
      "note": "Etosha National Park, Namibia · guest animal"
    }
  ]
};
for (const animal of animals) {
  if (!animal.photos) {
    const pictures = keralaPictures[animal.name];
    animal.photos = pictures.map(p => p.path);
    animal.photoNotes = pictures.map(p => p.note);
  }
  animal.photo = animal.photos[0];
}

const categoryFor = animal => animal.category || (['Cat','Dog','Cow','Sheep'].includes(animal.name) ? 'Domestic Animals' : ['Lion','Elephant'].includes(animal.name) ? 'Wild Animals' : 'Birds');
const categoryTabs = document.getElementById('category-tabs');
let activeCategory = 'All';
const categories = ['All','Domestic Animals','Wild Animals','Birds'];
function applyCategory(category) {
 activeCategory = category;
 for (const button of grid.children) button.hidden = category !== 'All' && button.dataset.category !== category;
 for (const tab of categoryTabs.children) { const on = tab.dataset.category === category; tab.setAttribute('aria-pressed', String(on)); tab.classList.toggle('active', on); }
 document.querySelector('.count').textContent = (category === 'All' ? animals.length : animals.filter(a=>categoryFor(a)===category).length) + ' friends to discover';
}
for (const category of categories) {
 const tab = document.createElement('button'); tab.type='button'; tab.className='category-tab'; tab.dataset.category=category;tab.textContent=category === 'All'?'🌈 All':category==='Domestic Animals'?'🐶 Domestic Animals':category==='Wild Animals'?'🐅 Wild Animals':'🐦 Birds';
 tab.addEventListener('click',()=>applyCategory(category)); categoryTabs.append(tab);
}
const media = (name, width) => name.startsWith('assets/') ? name : 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(name) + (width ? '?width=' + width : '');
const grid = document.getElementById('animals');
const audio = document.getElementById('sound-player');
const status = document.getElementById('status');
document.querySelector('.count').textContent = animals.length + ' friends to discover';
document.querySelector('.hero-copy p').textContent = 'Explore real animal photographs from across Asia and beyond. Tap to learn and listen!';

let selected = null, currentSoundId = 0, voiceDoneTimer;
const lightbox = document.createElement('div');
lightbox.className = 'animal-lightbox';
lightbox.hidden = true;
lightbox.innerHTML = '<div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="large-name">' +
  '<button type="button" class="lightbox-close" aria-label="Close enlarged picture">✕</button>' +
  '<button type="button" class="large-animal" aria-label="Play animal sound"><span class="big-emoji"></span><img class="large-photo" alt=""></button>' +
  '<div class="picture-choices" role="group" aria-label="Choose a picture"><button type="button" class="picture-one" aria-label="Picture 1" aria-pressed="true"><img alt="" aria-hidden="true"><span>Picture 1</span></button><button type="button" class="picture-two" aria-label="Picture 2" aria-pressed="false"><img alt="" aria-hidden="true"><span>Picture 2</span></button></div>' +
  '<div class="large-label" id="large-name"></div><p class="lightbox-instruction">Tap the big picture for the real sound! 🔊</p>' +
  '<p class="picture-note"></p>' +
  '<div class="swap-navigation"><button class="swap-prev" type="button" aria-label="Previous animal">❮ Previous</button><span class="swap-count" aria-live="off"></span><button class="swap-next" type="button" aria-label="Next animal">Next ❯</button></div>' +
  '</div>';
document.body.append(lightbox);
const bigButton = lightbox.querySelector('.large-animal');
const bigImage = lightbox.querySelector('.large-photo');
const bigEmoji = lightbox.querySelector('.big-emoji');
const bigName = lightbox.querySelector('.large-label');
const closeButton = lightbox.querySelector('.lightbox-close');
const swapPrev = lightbox.querySelector('.swap-prev');
const swapNext = lightbox.querySelector('.swap-next');
const pictureOne = lightbox.querySelector('.picture-one');
const pictureTwo = lightbox.querySelector('.picture-two');

function choosePicture(index) {
  if (!selected || index < 0 || index >= selected.animal.photos.length) return;
  selected.photoIndex = index;
  bigImage.hidden = false;
  bigImage.src = media(selected.animal.photos[index]);
  bigImage.alt = selected.animal.name + ', clear photograph ' + (index + 1) + ' of 2';
  pictureOne.setAttribute('aria-pressed', String(index === 0));
  pictureTwo.hidden = selected.animal.photos.length < 2;
  lightbox.querySelector('.picture-choices').hidden = selected.animal.photos.length < 2;
  pictureTwo.setAttribute('aria-pressed', String(index === 1));
  lightbox.querySelector('.picture-note').textContent = selected.animal.photoNotes?.[index] || '';
}
pictureOne.addEventListener('click', () => choosePicture(0));
pictureTwo.addEventListener('click', () => choosePicture(1));

function stopEverything() {
  currentSoundId += 1;
  clearTimeout(voiceDoneTimer);
  try { window.AndroidSpeech?.stop?.(); } catch (_) {}
  try { window.speechSynthesis?.cancel(); } catch (_) {}
  try { audio.pause(); audio.removeAttribute('src'); audio.load(); } catch (_) {}
}
function closeLarge() {
  stopEverything();
  lightbox.hidden = true;
  document.body.classList.remove('modal-open');
  if (selected?.button) selected.button.focus();
  selected = null;
}
function sayName(name) {
  if (window.AndroidSpeech && typeof window.AndroidSpeech.say === 'function') {
    window.AndroidSpeech.say(name);
    return;
  }
  if (!('speechSynthesis' in window)) {
    status.textContent = 'Voice not supported by this browser. Read the name on screen.';
    return;
  }
  const phrase = new SpeechSynthesisUtterance(name);
  phrase.lang = 'en-IN';
  phrase.rate = 0.78;
  phrase.pitch = 1.04;
  window.speechSynthesis.speak(phrase);
}
function openLarge(animal, button) {
  stopEverything();
  selected = { animal, button, photoIndex: 0 };
  choosePicture(0);
  pictureOne.querySelector('img').src = media(animal.photos[0]);
  pictureTwo.querySelector('img').src = animal.photos[1] ? media(animal.photos[1]) : '';
  pictureTwo.hidden = animal.photos.length < 2;
  lightbox.querySelector('.picture-choices').hidden = animal.photos.length < 2;
  bigEmoji.textContent = animal.emoji;
  bigName.textContent = animal.name;
  const visibleAnimals = animals.filter(a => activeCategory === 'All' || categoryFor(a) === activeCategory);
  lightbox.querySelector('.swap-count').textContent = (visibleAnimals.indexOf(animal) + 1) + ' / ' + visibleAnimals.length;
  lightbox.querySelector('.lightbox-instruction').textContent = animal.sound ? 'Tap the big picture for the real sound! 🔊' : 'Real sound recording coming soon';
  lightbox.hidden = false;
  document.body.classList.add('modal-open');
  status.textContent = '🗣️ ' + animal.name + ' — tap enlarged image to hear its sound.';
  bigButton.setAttribute('aria-label', 'Play real ' + animal.name + ' sound');
  bigImage.onerror = () => { bigImage.hidden = true; };
  sayName(animal.name);
  bigButton.focus({preventScroll:true});
}
async function playRealSound() {
  if (!selected) return;
  const animal = selected.animal;
  stopEverything();
  const id = ++currentSoundId;
  status.textContent = '🔊 ' + animal.name + ': ' + animal.noise;
  lightbox.querySelector('.lightbox-instruction').textContent = '🔊 ' + animal.noise + ' — tap again to replay';
  if (!animal.sound) {
    status.textContent = animal.name + ' recording is not added yet. The name is spoken aloud; a real call recording will be added later.';
    lightbox.querySelector('.lightbox-instruction').textContent = 'Real sound recording coming soon';
    return;
  }
  try {
    audio.src = media(animal.sound);
    audio.load();
    await audio.play();
  } catch (_) {
    if (currentSoundId !== id) return;
    status.textContent = 'Recording unavailable. Check internet and try again.';
    lightbox.querySelector('.lightbox-instruction').textContent = 'Sound unavailable — tap to retry';
  }
}
for (const animal of animals) {
  const button = document.createElement('button');
  button.className = 'animal';
  button.dataset.category = categoryFor(animal);
  button.type = 'button';
  button.style.setProperty('--card', animal.color);
  button.setAttribute('aria-label', animal.name + '. Tap to hear the name and enlarge the picture.');
  const photo = document.createElement('span'); photo.className = 'photo';
  const emoji = document.createElement('span'); emoji.className = 'fallback'; emoji.textContent = animal.emoji;
  const image = document.createElement('img');
  image.src = media(animal.photo, 480);
  image.loading = 'lazy';
  image.alt = 'Photograph of ' + animal.name;
  image.onerror = () => { image.hidden = true; };
  photo.append(emoji, image);
  const info = document.createElement('span'); info.className = 'animal-info';
  const labelGroup = document.createElement('span');
  const name = document.createElement('strong'); name.className = 'animal-name'; name.textContent = animal.name;
  const noise = document.createElement('small'); noise.className = 'animal-noise'; noise.textContent = animal.photos.length + ' photos' + (animal.sound ? ' · Tap to learn' : ' · Recording pending');
  labelGroup.append(name, noise);
  const play = document.createElement('span'); play.className = 'play'; play.textContent = '🗣️';
  info.append(labelGroup, play);
  button.append(photo, info);
  button.addEventListener('click', () => {
    lightbox.querySelector('.lightbox-instruction').textContent = animal.sound ? 'Tap the big picture for the real sound! 🔊' : 'Real sound recording coming soon';
    openLarge(animal, button);
  });
  grid.append(button);
}
applyCategory('All');
function swapAnimal(step) {
  if (!selected) return;
  const visibleAnimals = animals.filter(a => activeCategory === 'All' || categoryFor(a) === activeCategory);
  const current = visibleAnimals.indexOf(selected.animal);
  const next = visibleAnimals[(current + step + visibleAnimals.length) % visibleAnimals.length];
  openLarge(next, grid.children[animals.indexOf(next)]);
}
swapPrev.addEventListener('click', () => swapAnimal(-1));
swapNext.addEventListener('click', () => swapAnimal(1));
let startX = null, startY = null;
const swipeArea = lightbox.querySelector('.large-animal');
swipeArea.addEventListener('touchstart', e => {
  if (e.touches.length !== 1) return;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, {passive:true});
swipeArea.addEventListener('touchend', e => {
  if (startX === null || !e.changedTouches.length) return;
  const deltaX = e.changedTouches[0].clientX - startX;
  const deltaY = e.changedTouches[0].clientY - startY;
  startX = null;
  if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
    if (e.cancelable) e.preventDefault();
    swapAnimal(deltaX < 0 ? 1 : -1);
  }
}, {passive:false});
bigButton.addEventListener('click', playRealSound);
closeButton.addEventListener('click', closeLarge);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLarge(); });
window.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Tab') {
    const controls = [closeButton, bigButton, pictureOne, pictureTwo, swapPrev, swapNext];
    const index = controls.indexOf(document.activeElement);
    e.preventDefault();
    controls[(index + (e.shiftKey ? -1 : 1) + controls.length) % controls.length].focus();
  }
  if (e.key === 'Escape') closeLarge();
  else if (e.key === 'ArrowLeft') swapAnimal(-1);
  else if (e.key === 'ArrowRight') swapAnimal(1);
});
audio.addEventListener('error', () => { if (selected && audio.src) status.textContent = 'Recording could not play. Tap again to retry.'; });
status.textContent = 'Tap a picture to hear the name, then tap the BIG picture to hear the sound!';
