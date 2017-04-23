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
  }
}

let launchora = new MusicPlayer()
launchora.playSong('Never Gonna Give You Up')
