# Sound verification worklog

Updated: 2026-11-01

## Acceptance rule
A sound is not approved for the app until the actual audio has been listened to, the audible call is checked against the exact species, playback is tested, and the source licence/attribution requirements are recorded. Search-result metadata alone is not audio verification.

## First batch: exact-species source candidates

| App entry | Candidate source | Species / location stated by source | Licence | Review status |
|---|---|---|---|---|
| Sparrow | https://commons.wikimedia.org/wiki/File:House_Sparrow.ogg | House sparrow (*Passer domesticus*), recorded in India | Public domain (uploader dedication) | Metadata checked; audio listening and app test pending |
| Myna | https://commons.wikimedia.org/wiki/File:CommonMynaCalls.ogg | Common myna (*Acridotheres tristis*) | CC BY-SA 2.5 | Metadata checked; audio listening and app test pending |
| Kingfisher | https://commons.wikimedia.org/wiki/File:White-throated_kingfisher_song_recorded_in_April_2022_at_Haripur,_Sangli.wav | White-throated kingfisher, Haripur, Sangli, India | CC BY-SA 4.0 | Metadata checked; audio listening and app test pending |
| Woodpecker | https://commons.wikimedia.org/wiki/File:Greater_flameback_calls.ogg | Greater flameback (*Chrysocolaptes guttacristatus*), Wayanad, India | CC BY-SA 4.0 | Metadata checked; audio listening and app test pending |
| Elephant | https://commons.wikimedia.org/wiki/File:Elephant_voice_-_trumpeting.ogg | Elephant trumpet; uploader description does not establish species | CC0 | Not accepted: exact species not established |
| Cuckoo / koel | https://commons.wikimedia.org/wiki/File:Asian_Koel.wav | Male Asian koel (*Eudynamys scolopaceus*), Mysore, Karnataka, India | CC BY-SA 4.0 | Metadata checked; audio listening and app test pending |
| Peacock | https://commons.wikimedia.org/wiki/File:Indian_Peafowl.ogg | Indian peafowl (*Pavo cristatus*) | Public domain (uploader dedication) | Metadata checked; audio listening and app test pending |



## Expanded Commons search: additional exact-species leads

The following recordings appeared in the Wikimedia Commons India bird-sound category or a species-specific Commons category. Their file listings provide duration and species/name clues, but each individual file page and licence still needs checking before use.

| App entry | Candidate filename / source category | Candidate duration | Status |
|---|---|---:|---|
| Crow | House crow call recorded in October 2022 at Haripur, Sangli.wav | 23 s | Candidate located; individual licence and audio review pending |
| Myna | Common myna call recorded in October 2014 at Dandoba hill, Sangli.wav | 9.6 s | Candidate located; individual licence and audio review pending |
| Myna | Common myna-Acridotheres tristis.wav | 20 s | Species label present; individual licence and audio review pending |
| Sparrow | House sparrow call recorded in June 2013 at Sangli.wav | 20 s | Candidate located; individual licence and audio review pending |
| Kingfisher | Common kingfisher call recorded in December 2015 at Anjarle, Ratnagiri.wav | 2.3 s | Candidate located; exact species is common kingfisher, not white-throated kingfisher |
| Woodpecker | Greater flameback call recorded in February 2010 at Kulgi, Karnataka.wav | 6 s | Candidate located; individual licence and audio review pending |
| Peacock | Indian peafowl call recorded in August 1999 at Sagareshwar Sanctuary, Sangli.wav | 12 s | Candidate located; individual licence and audio review pending |

Search source: https://commons.wikimedia.org/wiki/Category:Sounds_of_birds_recorded_in_India and https://commons.wikimedia.org/wiki/Category:Bird_sound_recordings_by_Sharad_Apte. These category pages establish that the file entries exist; they do not by themselves establish each file's licence or prove the audible content.

## Important distinction
No new audio has been integrated. No candidate in this log is marked as listened-to or sound-verified. The app's Kingfisher entry currently uses two different pictured species (white-throated and common kingfisher), so any future kingfisher sound must be matched to the selected photo/species rather than attached generically.

## Rejected / not matched
- https://commons.wikimedia.org/wiki/File:Indian_Palm_Squirrel_-_chip_chip_chip_sound.ogg is labelled *Funambulus tristriatus* (three-striped / jungle palm squirrel), while the app's pictured squirrel is the Indian palm squirrel (*Funambulus palmarum*). Do not assign it without changing the pictured species and explicitly reviewing the educational scope.
- Generic elephant audio is not accepted as an Asian elephant recording unless the species is confirmed.
- Do not substitute unrelated species calls for any app entry.

## Current limitation
The source pages and licence metadata can be checked, but the external media download endpoint is currently inaccessible from the execution environment. Therefore none of the above candidates has been marked audio-verified or added to the app. APK remains on hold.
