'use strict';

// India-based animal photographs and species-matched bird calls from Wikimedia Commons. See credits.html for attribution.
const animals = [
  {name:'Cat', noise:'Meow!', emoji:'🐱', color:'#ffe6d2', photo:'Sitting Cat 02.jpg', sound:'Meow.ogg'},
  {name:'Dog', noise:'Woof!', emoji:'🐶', color:'#ece6ff', photo:'Cute Indog Puppy 01.jpg', sound:'Barking_of_a_dog.ogg'},
  {name:'Cow', noise:'Moo!', emoji:'🐮', color:'#f9e5ee', photo:'Indian Cow.jpg', sound:'Single_Cow_Moo.ogg'},
  {name:'Lion', noise:'Roar!', emoji:'🦁', color:'#fff0c6', photo:'Asiatic Lion.jpg', sound:'Lion_raring-sound1TamilNadu178.ogg'},
  {name:'Elephant', noise:'Trumpet!', emoji:'🐘', color:'#ddf1f5', photo:'Indian Elephant.jpeg', sound:'Elephant_voice_-_trumpeting.ogg'},
  {name:'Duck', noise:'Quack!', emoji:'🦆', color:'#e8f1d5', photo:'Indian Spot-billed duck.jpg', sound:'Anas poecilorhyncha - Indian Spot-billed Duck - XC114233.ogg'},
  {name:'Sheep', noise:'Baa!', emoji:'🐑', color:'#fbe4eb', photo:'Cute lambs.jpg', sound:'Sheep_bleating.ogg'},
  {name:'Crow', noise:'Caw!', emoji:'🐦‍⬛', color:'#e6eaf9', photo:'Indian Crow.jpg', sound:'Crow.ogg'},
  {name:'Pigeon', noise:'Coo!', emoji:'🕊️', color:'#e8eef5', photo:'Indian pigeon 1.jpg', sound:'Dove_cooing.ogg'},
  {name:'Cuckoo', noise:'Cuckoo!', emoji:'🐦', color:'#f7ead3', photo:'Indian Cuckoo.jpg', sound:'IndianCuckoo.ogg'}
];

const media = (name, width) => 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(name) + (width ? '?width=' + width : '');
const grid = document.getElementById('animals');
const audio = document.getElementById('sound-player');
const status = document.getElementById('status');
document.querySelector('.count').textContent = animals.length + ' friends to discover';
document.querySelector('.hero-copy p').textContent = 'First tap: name. Second tap: real sound.';

let selected = null, currentSoundId = 0, voiceDoneTimer;
const lightbox = document.createElement('div');
lightbox.className = 'animal-lightbox';
lightbox.hidden = true;
lightbox.innerHTML = '<div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="large-name">' +
  '<button type="button" class="lightbox-close" aria-label="Close enlarged picture">✕</button>' +
  '<button type="button" class="large-animal" aria-label="Play animal sound"><span class="big-emoji"></span><img class="large-photo" alt=""></button>' +
  '<div class="large-label" id="large-name"></div><p class="lightbox-instruction">Tap the big picture for the real sound! 🔊</p>' +
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

function stopEverything() {
  currentSoundId += 1;
  clearTimeout(voiceDoneTimer);
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
  if (!('speechSynthesis' in window)) {
    status.textContent = 'Voice not supported by this browser. Read the name on screen.';
    return;
  }
  const phrase = new SpeechSynthesisUtterance(name);
  phrase.lang = 'en-US';
  phrase.rate = 0.78;
  phrase.pitch = 1.04;
  window.speechSynthesis.speak(phrase);
}
function openLarge(animal, button) {
  stopEverything();
  selected = { animal, button };
  bigImage.hidden = false;
  bigImage.src = media(animal.photo, 980);
  bigImage.alt = 'Large clear photograph of a ' + animal.name.toLowerCase();
  bigEmoji.textContent = animal.emoji;
  bigName.textContent = animal.name;
  lightbox.querySelector('.swap-count').textContent = (animals.indexOf(animal) + 1) + ' / ' + animals.length;
  lightbox.querySelector('.lightbox-instruction').textContent = 'Tap the big picture for the real sound! 🔊';
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
  const noise = document.createElement('small'); noise.className = 'animal-noise'; noise.textContent = 'Tap to learn';
  labelGroup.append(name, noise);
  const play = document.createElement('span'); play.className = 'play'; play.textContent = '🗣️';
  info.append(labelGroup, play);
  button.append(photo, info);
  button.addEventListener('click', () => {
    lightbox.querySelector('.lightbox-instruction').textContent = 'Tap the big picture for the real sound! 🔊';
    openLarge(animal, button);
  });
  grid.append(button);
}
function swapAnimal(step) {
  if (!selected) return;
  const current = animals.indexOf(selected.animal);
  const nextIndex = (current + step + animals.length) % animals.length;
  const next = animals[nextIndex];
  openLarge(next, grid.children[nextIndex]);
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
  if (e.key === 'Escape') closeLarge();
  else if (e.key === 'ArrowLeft') swapAnimal(-1);
  else if (e.key === 'ArrowRight') swapAnimal(1);
});
audio.addEventListener('error', () => { if (selected && audio.src) status.textContent = 'Recording could not play. Tap again to retry.'; });
status.textContent = 'Tap a picture to hear the name, then tap the BIG picture to hear the sound!';
