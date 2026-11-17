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

// Each animal gets one clear, globally sourced photograph from Wikimedia Commons.
// Photos are fetched online; the app starts with a friendly emoji while loading.
const commonsSearchTerms = {
  Cat:'domestic cat face portrait clear animal',
  Dog:'domestic dog face portrait clear animal',
  Cow:'cow face portrait cattle',
  Lion:'African lion face portrait',
  Elephant:'African elephant full body wildlife',
  Duck:'mallard duck full body',
  Sheep:'sheep face portrait',
  Crow:'carrion crow bird',
  Pigeon:'rock pigeon bird portrait',
  Cuckoo:'common cuckoo bird',
  Rooster:'rooster chicken full body',
  Tiger:'Bengal tiger face portrait',
  Peacock:'Indian peafowl peacock full body',
  Owl:'owl face portrait bird',
  Goat:'goat face portrait',
  Cheetah:'cheetah full body wildlife',
  Rabbit:'European rabbit full body',
  Horse:'horse face portrait',
  Monkey:'rhesus macaque monkey',
  Deer:'red deer stag full body',
  Squirrel:'squirrel face portrait',
  Bear:'brown bear full body wildlife',
  Parrot:'macaw parrot full body',
  Sparrow:'house sparrow bird',
  Myna:'common myna bird',
  Kingfisher:'common kingfisher bird',
  Eagle:'bald eagle full body bird',
  Woodpecker:'great spotted woodpecker bird',
  Frog:'green frog full body amphibian',
  Pig:'domestic pig face portrait',
  Yak:'domestic yak full body',
  Buffalo:'water buffalo full body'
};
const commonsLicenseAllowed = value =>
  /^(CC BY(?:-SA)?(?:\s|$)|CC0|Public domain)/i.test(value || '') &&
  !/-NC\b/i.test(value || '');

function cleanCommonsText(value) {
  return String(value || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

async function refreshCommonsPhotos(animal) {
  const term = commonsSearchTerms[animal.name];
  if (!term) return false;
  const params = new URLSearchParams({
    action:'query', format:'json', origin:'*', generator:'search',
    gsrsearch:'filetype:bitmap ' + term, gsrnamespace:'6', gsrlimit:'40',
    gsrsort:'relevance', prop:'imageinfo', iiprop:'url|extmetadata|size',
    iiurlwidth:'1000'
  });
  try {
    const response = await fetch('https://commons.wikimedia.org/w/api.php?' + params.toString());
    if (!response.ok) throw new Error('Photo service returned ' + response.status);
    const data = await response.json();
    const candidates = Object.values(data.query?.pages || {}).map(page => {
      const info = page.imageinfo?.[0], meta = info?.extmetadata || {};
      if (!info?.thumburl || !info?.descriptionurl) return null;
      const license = cleanCommonsText(meta.LicenseShortName?.value);
      const title = cleanCommonsText(page.title.replace(/^File:/, ''));
      const description = cleanCommonsText(meta.ImageDescription?.value);
      const artist = cleanCommonsText(meta.Artist?.value) || 'Photographer not listed';
      const evidence = (title + ' ' + description).toLowerCase();
      const tokens = term.toLowerCase().split(/\s+/).filter(word => word.length > 3 && !['full','body','face','portrait','clear','animal','wildlife'].includes(word));
      const relevance = tokens.reduce((score, token) => score + (evidence.includes(token) ? 2 : 0), 0);
      const width = Number(info.width || 0), height = Number(info.height || 0);
      return {url:info.thumburl, page:info.descriptionurl, title, artist, license, width, height, relevance};
    }).filter(item =>
      item &&
      commonsLicenseAllowed(item.license) &&
      item.width >= 500 && item.height >= 350 &&
      item.relevance >= 2
    );
    candidates.sort((a,b) =>
      b.relevance - a.relevance ||
      (b.width * b.height) - (a.width * a.height)
    );
    const chosen = candidates[0];
    if (!chosen) throw new Error('No suitable openly licensed image found');
    animal.photo = chosen.url;
    animal.photoCredits = [chosen];
    const card = grid.children[animals.indexOf(animal)];
    if (card) {
      const img = card.querySelector('img');
      img.src = chosen.url;
      img.hidden = false;
      img.alt = 'Clear photograph of a ' + animal.name;
      img.onerror = () => { img.hidden = true; };
      card.querySelector('.animal-noise').textContent = animal.sound ? 'Photo ready · Tap to learn' : 'Photo ready · Sound coming soon';
    }
    if (selected?.animal === animal) choosePicture();
    return true;
  } catch (error) {
    const card = grid.children[animals.indexOf(animal)];
    if (card) card.querySelector('.animal-noise').textContent = 'Photo unavailable · Emoji shown';
    return false;
  }
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
  image.loading = 'lazy';
  image.alt = 'Photograph of ' + animal.name;
  image.onerror = () => { image.hidden = true; };
  photo.append(emoji, image);
  const info = document.createElement('span'); info.className = 'animal-info';
  const labelGroup = document.createElement('span');
  const name = document.createElement('strong'); name.className = 'animal-name'; name.textContent = animal.name;
  const noise = document.createElement('small'); noise.className = 'animal-noise'; noise.textContent = animal.sound ? 'Loading photo · Tap to learn' : 'Loading photo · Sound coming soon';
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
// Fetch globally sourced photos in small batches. Keep the emoji visible if a photo cannot be loaded.
(async () => {
  let loaded = 0;
  for (let i = 0; i < animals.length; i += 4) {
    const results = await Promise.all(animals.slice(i, i + 4).map(refreshCommonsPhotos));
    loaded += results.filter(Boolean).length;
  }
  status.textContent = loaded + ' of ' + animals.length + ' animal photos loaded. Tap any animal to explore!';
})();
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
