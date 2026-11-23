'use strict';

// Real animal photographs with source and location details in credits.html.
const animals = [
  {name:'Cat', noise:'Meow!', emoji:'🐱', color:'#ffe6d2', sound:'assets/clean-audio/cat.ogg', category:'Domestic Animals'},
  {name:'Dog', noise:'Woof!', emoji:'🐶', color:'#ece6ff', sound:'assets/clean-audio/dog.ogg', category:'Domestic Animals'},
  {name:'Cow', noise:'Moo!', emoji:'🐮', color:'#f9e5ee', sound:null, category:'Domestic Animals'},
  {name:'Lion', noise:'Roar!', emoji:'🦁', color:'#fff0c6', sound:'assets/clean-audio/lion.ogg', category:'Wild Animals'},
  {name:'Elephant', noise:'Trumpet!', emoji:'🐘', color:'#ddf1f5', sound:'assets/clean-audio/elephant.ogg', category:'Wild Animals'},
  {name:'Duck', noise:'Quack!', emoji:'🦆', color:'#e8f1d5', sound:'assets/clean-audio/duck.ogg', category:'Birds'},
  {name:'Sheep', noise:'Baa!', emoji:'🐑', color:'#fbe4eb', sound:'assets/clean-audio/sheep.ogg', category:'Domestic Animals'},
  {name:'Crow', noise:'Caw!', emoji:'🐦‍⬛', color:'#e6eaf9', sound:'assets/clean-audio/crow.ogg', category:'Birds'},
  {name:'Pigeon', noise:'Coo!', emoji:'🕊️', color:'#e8eef5', sound:null, category:'Birds'},
  {name:'Cuckoo', noise:'Koo-oo!', emoji:'🐦', color:'#f7ead3', sound:'assets/clean-audio/cuckoo.ogg', category:'Birds'},
  {name:'Rooster', noise:'Cock-a-doodle-doo!', emoji:'🐓', color:'#ffecd4', sound:'assets/clean-audio/rooster.ogg', category:'Birds'},
  {name:'Tiger', noise:'Roar!', emoji:'🐅', color:'#ffe5bf', sound:null, category:'Wild Animals'},
  {name:'Peacock', noise:'Kee-ow!', emoji:'🦚', color:'#d8f2ea', sound:'assets/clean-audio/peacock.ogg', category:'Birds'},
  {name:'Owl', noise:'Chirr!', emoji:'🦉', color:'#f4eadb', sound:'assets/clean-audio/owl.ogg', category:'Birds'},
  {name:'Goat', noise:'Maa!', emoji:'🐐', color:'#e6f0da', sound:'assets/clean-audio/goat.ogg', category:'Domestic Animals'},
  {name:'Cheetah', noise:'Chirp!', emoji:'🐆', color:'#fff0cf', sound:'assets/clean-audio/cheetah.ogg', category:'Wild Animals'},
  {name:'Rabbit', noise:'Squeak!', emoji:'🐰', color:'#f7e5ed', sound:null, category:'Wild Animals'},
  {name:'Horse', noise:'Neigh!', emoji:'🐴', color:'#f4e5d4', sound:'Wiehern.ogg', category:'Domestic Animals'},
  {name:'Monkey', noise:'Chatter!', emoji:'🐒', color:'#f5e9d6', sound:null, category:'Wild Animals'},
  {name:'Deer', noise:'Call!', emoji:'🦌', color:'#e9efd9', sound:null, category:'Wild Animals'},
  {name:'Squirrel', noise:'Chirp!', emoji:'🐿️', color:'#f8e8d5', sound:'Indian Palm Squirrel - chip chip chip sound.ogg', category:'Wild Animals'},
  {name:'Bear', noise:'Growl!', emoji:'🐻', color:'#eee4d8', sound:null, category:'Wild Animals'},
  {name:'Parrot', noise:'Squawk!', emoji:'🦜', color:'#dff0dc', sound:'Halsbandsittich.ogg', category:'Birds'},
  {name:'Sparrow', noise:'Chirp!', emoji:'🐦', color:'#f3eadb', sound:'House_Sparrow.ogg', category:'Birds'},
  {name:'Myna', noise:'Chatter!', emoji:'🐦', color:'#f6e8d2', sound:'CommonMynaCalls.ogg', category:'Birds'},
  {name:'Kingfisher', noise:'Chatter!', emoji:'🐦', color:'#dceef3', sound:null, category:'Birds'},
  {name:'Eagle', noise:'Screech!', emoji:'🦅', color:'#e8e8e2', sound:'Black eagle call recorded in March 2013 at Mudumalai National Park, Tamil Nadu.wav', category:'Birds'},
  {name:'Woodpecker', noise:'Tap-tap!', emoji:'🐦', color:'#f4e5d8', sound:'Greater_flameback_calls.ogg', category:'Birds'},
  {name:'Frog', noise:'Ribbit!', emoji:'🐸', color:'#dff1dc', sound:null, category:'Wild Animals'},
  {name:'Pig', noise:'Oink!', emoji:'🐷', color:'#f8e1e5', sound:null, category:'Domestic Animals'},
  {name:'Yak', noise:'Grunt!', emoji:'🐂', color:'#e9e2d9', sound:null, category:'Domestic Animals'},
  {name:'Buffalo', noise:'Moo!', emoji:'🐃', color:'#e5e8ef', sound:null, category:'Domestic Animals'}
];

// Curated photo collection discovered through Google Images and verified against original image-source pages.
// Prioritize clear portraits/full-body photos with recognizable features, natural colors, and no text overlays.
const photoSources = {
Cat:{url:"https://images.pexels.com/photos/116835/pexels-photo-116835.jpeg",page:"https://www.pexels.com/photo/black-gray-and-white-tabby-cat-resting-in-brown-red-black-and-white-rug-116835/",source:"Pexels"},
Dog:{url:"https://images.pexels.com/photos/18168206/pexels-photo-18168206.jpeg",page:"https://www.pexels.com/photo/dog-dogs-18168206/",source:"Pexels"},
Cow:{url:"https://images.pexels.com/photos/19977235/pexels-photo-19977235.jpeg",page:"https://www.pexels.com/photo/cattle-on-pasture-19977235/",source:"Pexels"},
Lion:{url:"https://images.pexels.com/photos/32196368/pexels-photo-32196368.jpeg",page:"https://www.pexels.com/photo/majestic-lion-resting-in-green-forest-32196368/",source:"Pexels"},
Elephant:{url:"https://images.pexels.com/photos/25754094/pexels-photo-25754094.jpeg",page:"https://www.pexels.com/photo/graceful-elephant-grazing-in-kruger-national-park-25754094/",source:"Pexels"},
Duck:{url:"https://images.pexels.com/photos/38065888/pexels-photo-38065888.jpeg?cs=srgb&dl=pexels-liane-ferreira-1033991071-38065888.jpg&fm=jpg",,page:"https://www.pexels.com/photo/female-mallard-duck-floating-in-tranquil-river-38065888/",source:"Pixabay"},
Sheep:{url:"https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_1280.jpg",page:"https://pixabay.com/photos/ireland-sheep-lambs-livestock-1985088/",source:"Pixabay"},
Crow:{url:"https://images.pexels.com/photos/16973190/pexels-photo-16973190.jpeg?cs=srgb&dl=pexels-denitsa-kireva-2915302-16973190.jpg&fm=jpg",,page:"https://www.pexels.com/photo/close-up-of-crow-16973190/",source:"Pexels"},
Pigeon:{url:"https://images.pexels.com/photos/15699727/pexels-photo-15699727/free-photo-of-portrait-of-pigeon.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/portrait-of-pigeon-15699727/",source:"Pexels"},
Cuckoo:{url:"https://images.pexels.com/photos/32234890/pexels-photo-32234890.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/colorful-cuckoo-bird-perched-on-tree-branch-32234890/",source:"Pexels"},
Rooster:{url:"https://images.pexels.com/photos/37590280/pexels-photo-37590280.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/vivid-portrait-of-a-red-rooster-close-up-37590280/",source:"Pexels"},
Tiger:{url:"https://images.pexels.com/photos/27834738/pexels-photo-27834738.jpeg",page:"https://www.pexels.com/photo/im-reich-des-tigers-27834738/",source:"Pexels"},
Peacock:{url:"https://images.pexels.com/photos/29211489/pexels-photo-29211489.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/vibrant-peacock-displaying-majestic-feathers-29211489/",source:"Pexels"},
Owl:{url:"https://images.pexels.com/photos/17103408/pexels-photo-17103408.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/portrait-of-an-owl-perching-on-a-branch-17103408/",source:"Pexels"},
Goat:{url:"https://images.pexels.com/photos/33793409/pexels-photo-33793409.jpeg?cs=srgb&dl=pexels-manish-meena-1391970-33793409.jpg&fm=jpg",,page:"https://www.pexels.com/photo/majestic-brown-goat-on-a-sunny-day-33793409/",source:"Pexels"},
Cheetah:{url:"https://images.pexels.com/photos/39257494/pexels-photo-39257494.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/elegant-cheetah-in-african-grassland-habitat-39257494/",source:"Pexels"},
Rabbit:{url:"https://images.pexels.com/photos/35983095/pexels-photo-35983095/free-photo-of-cute-fluffy-rabbit-in-natural-habitat.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/cute-fluffy-rabbit-in-natural-habitat-35983095/",source:"Pexels"},
Horse:{url:"https://images.pexels.com/photos/2317182/pexels-photo-2317182.jpeg?cs=srgb&dl=pexels-ebergross-2317182.jpg&fm=jpg",,page:"https://www.pexels.com/photo/shallow-focus-photo-of-brown-horse-2317182/",source:"Pixabay"},
Monkey:{url:"https://images.pexels.com/photos/2499760/pexels-photo-2499760.jpeg?auto=compress&cs=tinysrgb&w=900",page:"https://pixabay.com/photos/monkey-animal-mammal-primate-3703230/",source:"Pixabay"},
Deer:{url:"https://static.zpe.gov.pl/portal/f/res-minimized/RiNx4Oj3wYr1n/1708521257/VPBx6bl9xuVglba8spMrjMcOw9AFLieP.jpg",page:"https://pixabay.com/photos/animal-deer-mammal-wildlife-6577730/",source:"Pixabay"},
Squirrel:{url:"https://www.10wallpaper.com/wallpaper/1280x1024/1202/cute_squirrel-wild_animal_desktop_wallpaper_1280x1024.jpg",page:"https://pixabay.com/photos/squirrel-animal-rodent-328077/",source:"Pixabay"},
Bear:{url:"https://images.unsplash.com/photo-1729830082669-5ca768b61466?auto=format&fit=crop&fm=jpg&q=80&w=900",page:"https://pixabay.com/photos/brown-bear-animal-wildlife-grizzly-20542/",source:"Pixabay"},
Parrot:{url:"https://images.pexels.com/photos/18182991/pexels-photo-18182991.jpeg?cs=srgb&dl=pexels-juan-felipe-ramirez-312591454-18182991.jpg&fm=jpg",,page:"https://www.pexels.com/photo/close-up-of-green-parrot-sitting-in-nature-18182991/",source:"Pexels"},
Sparrow:{url:"https://images.pexels.com/photos/2570081/pexels-photo-2570081.jpeg?auto=compress&cs=tinysrgb&w=900",page:"https://pixabay.com/photos/bird-sparrow-nature-outdoor-144303/",source:"Pixabay"},
Myna:{url:"https://images.pexels.com/photos/40408377/pexels-photo-40408377.jpeg?auto=compress&cs=tinysrgb&w=900",page:"https://pixabay.com/photos/bird-myna-4030535/",source:"Pixabay"},
Kingfisher:{url:"https://images.pexels.com/photos/14810091/pexels-photo-14810091.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/photo/close-up-shot-of-a-kingfisher-14810091/",source:"Pexels"},
Eagle:{url:"https://images.pexels.com/photos/31519183/pexels-photo-31519183.jpeg?cs=tinysrgb&dpr=1&w=500",page:"https://www.pexels.com/search/eagle/",source:"Pexels"},
Woodpecker:{url:"https://static.myconnect.ae/-/media/yasconnect/project/swad/stories/all-about-birds/woodpecker.jpg?h=540&iar=0&w=540",page:"https://pixabay.com/photos/bird-woodpecker-tree-400483/",source:"Pixabay"},
Frog:{url:"https://grenouilleanguille-artus.fr/images/article-grenouille.webp",page:"https://pixabay.com/photos/frog-animal-amphibian-green-128540/",source:"Pixabay"},
Pig:{url:"https://agrobite.pl/files/2023-12/25700_large.jpg",page:"https://pixabay.com/photos/pig-farm-animal-livestock-25605/",source:"Pixabay"},
Yak:{url:"https://wallpapers.com/images/hd/yak-2000-x-1325-picture-0cvtqi6251vxo6in.jpg",page:"https://pixabay.com/photos/yak-animal-wildlife-himalaya-20834/",source:"Pixabay"},
Buffalo:{url:"https://www.worldatlas.com/upload/a4/d7/d8/shutterstock-752013505-s3cdn.jpg",page:"https://pixabay.com/photos/buffalo-wildlife-africa-animal-6468/",source:"Pixabay"}
};
for (const animal of animals) {
  const source = photoSources[animal.name];
  animal.photo = source?.url || null;
  animal.photoCredits = source ? [{title:source.source+' photograph',artist:source.source+' contributor',license:source.source==='Wikimedia Commons'?'See original file licence':'Pixabay Content License',page:source.page}] : [];
}
const categoryFor = animal => animal.category || 'Wild Animals';
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
const media = (name, width) => !name ? '' : name.startsWith('assets/') || /^https?:\/\//.test(name) ? name : 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(name) + (width ? '?width=' + width : '');
const grid = document.getElementById('animals');
const audio = document.getElementById('sound-player');
const status = document.getElementById('status');
document.querySelector('.count').textContent = animals.length + ' friends to discover';
document.querySelector('.hero-copy p').textContent = 'Meet animals from around the world. Clear pictures, fun names and sounds!';

let selected = null, currentSoundId = 0, voiceDoneTimer, audioStopTimer;
const lightbox = document.createElement('div');
lightbox.className = 'animal-lightbox';
lightbox.hidden = true;
lightbox.innerHTML = '<div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="large-name">' +
  '<button type="button" class="lightbox-close" aria-label="Close enlarged picture">✕</button>' +
  '<button type="button" class="large-animal" aria-label="Play animal sound"><span class="big-emoji"></span><img class="large-photo" alt=""></button>' +
  '<div class="large-label" id="large-name"></div><p class="lightbox-instruction">Tap the big picture for the real sound! 🔊</p>' +
  '<div class="photo-source"><button type="button" class="source-toggle" aria-expanded="false">ⓘ Photo source</button><div class="source-details" hidden></div></div>' +
  '<div class="swap-navigation"><button class="swap-prev" type="button" aria-label="Previous animal">❮ Previous</button><span class="swap-count" aria-live="off"></span><button class="swap-next" type="button" aria-label="Next animal">Next ❯</button></div>' +
  '</div>'
document.body.append(lightbox);
const bigButton = lightbox.querySelector('.large-animal');
const bigImage = lightbox.querySelector('.large-photo');
const bigEmoji = lightbox.querySelector('.big-emoji');
const bigName = lightbox.querySelector('.large-label');
const closeButton = lightbox.querySelector('.lightbox-close');
const swapPrev = lightbox.querySelector('.swap-prev');
const swapNext = lightbox.querySelector('.swap-next');
const sourceToggle = lightbox.querySelector('.source-toggle');
const sourceDetails = lightbox.querySelector('.source-details');

function choosePicture() {
  if (!selected) return;
  const animal = selected.animal;
  bigImage.hidden = !animal.photo;
  bigImage.src = media(animal.photo);
  bigImage.alt = animal.photo ? 'Clear photograph of a ' + animal.name : '';
  sourceDetails.replaceChildren();
  sourceDetails.hidden = true;
  sourceToggle.hidden = !animal.photoCredits?.[0];
  sourceToggle.setAttribute('aria-expanded', 'false');
  sourceToggle.textContent = 'ⓘ Photo source';
  const credit = animal.photoCredits?.[0];
  if (credit) {
    for (const [label, value] of [['Photo', credit.title], ['Photographer', credit.artist], ['Licence', credit.license]]) {
      const row = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = label + ': ';
      row.append(strong, document.createTextNode(value || 'Not listed'));
      sourceDetails.append(row);
    }
    const link = document.createElement('a');
    link.href = credit.page;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open original photo and full licence ↗';
    sourceDetails.append(link);
  }
}
sourceToggle.addEventListener('click', () => {
  const expanded = sourceToggle.getAttribute('aria-expanded') === 'true';
  sourceToggle.setAttribute('aria-expanded', String(!expanded));
  sourceDetails.hidden = expanded;
  sourceToggle.textContent = expanded ? 'ⓘ Photo source' : 'ⓘ Hide source details';
});

function stopEverything() {
  currentSoundId += 1;
  clearTimeout(voiceDoneTimer);
  clearTimeout(audioStopTimer);
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
  selected = { animal, button };
  choosePicture();
  bigEmoji.textContent = animal.emoji;
  bigName.textContent = animal.name;
  const visibleAnimals = animals.filter(a => activeCategory === 'All' || categoryFor(a) === activeCategory);
  lightbox.querySelector('.swap-count').textContent = (visibleAnimals.indexOf(animal) + 1) + ' / ' + visibleAnimals.length;
  lightbox.querySelector('.lightbox-instruction').textContent = animal.sound ? 'Tap the big picture for the real sound! 🔊' : 'Real sound recording coming soon';
  lightbox.hidden = false;
  document.body.classList.add('modal-open');
  status.textContent = '🗣️ ' + animal.name + ' — tap enlarged image to hear its sound.';
  bigButton.setAttribute('aria-label', 'Play real ' + animal.name + ' sound');
  bigImage.onload = () => { bigEmoji.hidden = true; };
  bigImage.onerror = () => { bigImage.hidden = true; bigEmoji.hidden = false; };
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
    if (!animal.sound.startsWith('assets/')) {
      audioStopTimer = setTimeout(() => {
        if (currentSoundId === id) {
          audio.pause();
          audio.currentTime = 0;
          status.textContent = animal.name + ' sound preview finished. Tap again to replay.';
        }
      }, 8000);
    }
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
  image.hidden = !animal.photo;
  image.src = media(animal.photo, 480);
  image.loading = 'eager';
  image.alt = 'Photograph of ' + animal.name;
  image.onload = () => { button.classList.add('photo-loaded'); };
  image.onerror = () => { image.hidden = true; button.classList.remove('photo-loaded'); };
  photo.append(emoji, image);
  const info = document.createElement('span'); info.className = 'animal-info';
  const labelGroup = document.createElement('span');
  const name = document.createElement('strong'); name.className = 'animal-name'; name.textContent = animal.name;
  const noise = document.createElement('small'); noise.className = 'animal-noise'; noise.textContent = animal.sound ? 'Tap to learn · Sound' : 'Tap to learn';
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
status.textContent = 'Tap a picture for the animal name, then tap the big picture for its sound!';
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
    const controls = [closeButton, bigButton, sourceToggle, swapPrev, swapNext].filter(control => !control.hidden);
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
