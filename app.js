'use strict';

// Photos and real animal calls: Wikimedia Commons. Attribution links in credits.html.
const animals = [
  {name:'Cat', noise:'Meow!', emoji:'🐱', color:'#ffe6d2', photo:'Cat_closeup.jpg', sound:'Meow.ogg'},
  {name:'Dog', noise:'Woof!', emoji:'🐶', color:'#ece6ff', photo:'Golden-retriever-dog.jpg', sound:'Barking_of_a_dog.ogg'},
  {name:'Cow', noise:'Moo!', emoji:'🐮', color:'#f9e5ee', photo:'Cow_head_1.jpg', sound:'Single_Cow_Moo.ogg'},
  {name:'Lion', noise:'Roar!', emoji:'🦁', color:'#fff0c6', photo:'Male_lion_walking.jpg', sound:'Lion_raring-sound1TamilNadu178.ogg'},
  {name:'Elephant', noise:'Trumpet!', emoji:'🐘', color:'#ddf1f5', photo:'African_elephant_shakes_its_trunk.jpg', sound:'Elephant_voice_-_trumpeting.ogg'},
  {name:'Duck', noise:'Quack!', emoji:'🦆', color:'#e8f1d5', photo:'Mallard_duck_close-up.jpg', sound:'Anas_platyrhynchos_-_Mallard_-_XC62258.ogg'},
  {name:'Sheep', noise:'Baa!', emoji:'🐑', color:'#fbe4eb', photo:'Sheep_bleating.jpg', sound:'Sheep_bleating.ogg'},
  {name:'Crow', noise:'Caw!', emoji:'🐦‍⬛', color:'#e6eaf9', photo:'House_Crow_perched,_blue_sky_in_the_background.jpg', sound:'Crow.ogg'},
  {name:'Pigeon', noise:'Coo!', emoji:'🕊️', color:'#e8eef5', photo:'Pigeon_portrait_4861.jpg', sound:'Dove_cooing.ogg'},
  {name:'Cuckoo', noise:'Cuckoo!', emoji:'🐦', color:'#f7ead3', photo:'Common_Cuckoo_-_Cuculus_canorus.jpg', sound:'Common_Cuckoo_(Cuculus_canorus)_(W1CDR0001463_BD1).ogg'}
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
  '</div>';
document.body.append(lightbox);
const bigButton = lightbox.querySelector('.large-animal');
const bigImage = lightbox.querySelector('.large-photo');
const bigEmoji = lightbox.querySelector('.big-emoji');
const bigName = lightbox.querySelector('.large-label');
const closeButton = lightbox.querySelector('.lightbox-close');

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
bigButton.addEventListener('click', playRealSound);
closeButton.addEventListener('click', closeLarge);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLarge(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLarge(); });
audio.addEventListener('error', () => { if (selected && audio.src) status.textContent = 'Recording could not play. Tap again to retry.'; });
status.textContent = 'Tap a picture to hear the name, then tap the BIG picture to hear the sound!';
