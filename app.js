'use strict';
const animals=[
['cat','Cat','Meow, meow!','🐱','#ffe6d2','Cat_closeup.jpg','Meow.ogg'],
['dog','Dog','Woof, woof!','🐶','#ece6ff','Dog-1123016_960_720.jpg','Barking_of_a_dog.ogg'],
['cow','Cow','Moooo!','🐮','#f9e5ee','Cow_head_1.jpg','Single_Cow_Moo.ogg'],
['lion','Lion','Rooooar!','🦁','#fff0c6','Male_lion_walking.jpg','Lion_raring-sound1TamilNadu178.ogg'],
['elephant','Elephant','Pawooo!','🐘','#ddf1f5','Closeup_on_face_of_African_elephant_at_Oakland_Zoo_(11549184055).jpg','Elephant_voice_-_trumpeting.ogg'],
['duck','Duck','Quack, quack!','🦆','#e8f1d5','Mallard_duck_close-up.jpg','Ducks_landing_in_water.ogg'],
['sheep','Sheep','Baaaa!','🐑','#fbe4eb','Sheep_bleating.jpg','Sheep_bleating.ogg'],
['crow','Crow','Caw, caw!','🐦‍⬛','#e6eaf9','Adult_and_baby_crow.jpg','Crow.ogg']
];
const commons=(file)=>'https://commons.wikimedia.org/wiki/Special:Redirect/file/'+encodeURIComponent(file);
const grid=document.querySelector('#animals'),status=document.querySelector('#status');
const audio=document.querySelector('#sound-player');
let playing=null;
for(const [id,name,noise,emoji,color,photo,sound] of animals){
 let button=document.createElement('button');button.type='button';button.className='animal';
 button.style.setProperty('--card',color);
 button.setAttribute('aria-label','Play '+name+' sound');
 button.innerHTML='<span class="photo"><span class="fallback">'+emoji+'</span><img loading="lazy" alt="Photo of '+name+'" src="'+commons(photo)+'"></span><span class="animal-info"><span><strong class="animal-name">'+name+'</strong><small class="animal-noise">'+noise+'</small></span><span class="play">▶</span></span>';
 button.querySelector('img').onerror=e=>e.target.style.display='none';
 button.addEventListener('click',async()=>{
  try{audio.pause();audio.removeAttribute('src');audio.load();}catch(e){}
  document.querySelectorAll('.animal').forEach(x=>x.classList.remove('playing'));
  button.classList.add('playing');playing=button;
  status.textContent=emoji+' '+name+' says '+noise;
  audio.src=commons(sound);audio.load();
  try{await audio.play()}catch(e){if(playing===button){status.textContent='Sound unavailable for '+name+'. Check internet and tap again.';button.classList.remove('playing')}}
 });
 grid.append(button);
}
audio.addEventListener('error',()=>{if(playing){playing.classList.remove('playing');status.textContent='Recording unavailable. Try another animal.'}});
audio.addEventListener('ended',()=>{if(playing)playing.classList.remove('playing')});
audio.addEventListener('timeupdate',()=>{if(audio.currentTime>5){audio.pause();if(playing)playing.classList.remove('playing')}});
