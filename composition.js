/*
# Learning Goals

- Demonstrate the need for composition in object oriented program
- Implement a class that is coupled to another class through composition

*/

class MusicPlayer {
  constructor(){
    this.songsPlayed = []
    this.playing = false
  }

  pause(){
    this.playing = false
  }

  isCurrentlyPlaying(){
    return this.playing
  }

  playSong(song){
    this.playing = true
    console.log(`Now Playing: ${song.summary()}`)
    this.songsPlayed.push(song)
  }
}

class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
  }

  summary() {
    return `${this.artist} - "${this.title}"`
  }
}

let launchora = new MusicPlayer()
let bestSongEver = new Song('Never Gonna Give You Up', 'Rick Astley')
launchora.playSong(bestSongEver)

debugger
launchora.pause()
debugger
