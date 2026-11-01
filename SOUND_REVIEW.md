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

## Rejected / not matched
- https://commons.wikimedia.org/wiki/File:Indian_Palm_Squirrel_-_chip_chip_chip_sound.ogg is labelled *Funambulus tristriatus* (three-striped / jungle palm squirrel), while the app's pictured squirrel is the Indian palm squirrel (*Funambulus palmarum*). Do not assign it without changing the pictured species and explicitly reviewing the educational scope.
- Generic elephant audio is not accepted as an Asian elephant recording unless the species is confirmed.
- Do not substitute unrelated species calls for any app entry.

## Current limitation
The source pages and licence metadata can be checked, but the external media download endpoint is currently inaccessible from the execution environment. Therefore none of the above candidates has been marked audio-verified or added to the app. APK remains on hold.
