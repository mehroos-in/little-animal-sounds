# Sound audit — 2026-11-01

## Acceptance rule

A recording is **not approved for the app** until all of the following are checked:

1. The recording page identifies the exact species (or a clearly matching species used in the app).
2. The recording itself has been auditioned to confirm the audible call is recognisable and not dominated by unrelated ambience.
3. The original file is downloaded and checked for playback, duration, clipping, and intelligibility.
4. The source page confirms the reuse licence and the required creator attribution.
5. The final short excerpt is listened to again after conversion and before the app is updated.

Metadata or a filename alone is not an audio verification. Do not mark a candidate as approved merely because a category page lists it.

## Candidate recordings found — not yet approved

The Wikimedia Commons category [Sounds of birds recorded in India](https://commons.wikimedia.org/wiki/Category:Sounds_of_birds_recorded_in_India) lists the following exact-species candidates. The category listing confirms the displayed species/file names, recording locations and durations, but each individual file page, licence and actual audio still need review:

| App animal | Candidate recording | Location / duration shown | Status |
|---|---|---|---|
| Pigeon | Blue rock pigeon song | Sangli, India · 7.5 s | Candidate only |
| Myna | Common myna call | Dandoba Hill, Sangli · 9.6 s | Candidate only |
| Sparrow | House sparrow call | Sangli · 20 s | Candidate only |
| Kingfisher | Common kingfisher call | Anjarle, Ratnagiri · 2.3 s | Candidate only |
| Peacock | Indian peafowl call | Sagareshwar Sanctuary, Sangli · 12 s | Candidate only |
| Woodpecker | Greater flameback call | Kulgi, Karnataka · 6.0 s | Candidate only |
| Eagle | Black eagle call | Mudumalai National Park, Tamil Nadu · 8.8 s | Candidate only |
| Woodpecker (alternate) | Common flameback call | Castle Rock, Karnataka · 16 s | Candidate only |

The candidate listing is useful for discovery, not proof that the audio is suitable. The file page and licence must be checked individually, and the audio must be heard before use.

### Mammal candidate

A Commons file page documents **A three-striped palm squirrel (Funambulus palmarum) chirping**, recorded from a terrace in Bengaluru, Karnataka, India, on 16 January 2016 by Subhashish Panigrahi. The page gives a duration of 94.66 seconds and a **CC BY-SA 4.0** licence. This is a strong species/location match for the app's Indian palm squirrel, but the file has not yet been auditioned or technically checked, so it remains **candidate only**.

Source: https://commons.wikimedia.org/wiki/File:A_three-striped_palm_squirrel_(Funambulus_palmarum)_chirping_16January2015.oga

## Still requiring a suitable source

No recording is approved here for cow, Bengal tiger, Indian hare/rabbit, horse, langur/monkey, chital/deer, sloth bear, or the other new animals unless an exact species-matched source can be found and auditioned. Do not use a different tiger subspecies or unrelated mammal as a substitute.

## Current implementation rule

Keep any unverified recording disabled in the app. Do not change `app.js` audio mappings or add a sound file until the complete acceptance rule above has passed. Preserve source URL, recordist, location, duration, licence, attribution, edit notes and final approved excerpt details in `credits.html`.
