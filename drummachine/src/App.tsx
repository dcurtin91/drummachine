
import './App.css'

function App() {
  


  const play = (e: React.MouseEvent<HTMLDivElement>) => {
   
    const audio = e.currentTarget.querySelector("audio");
    if (audio) {
      audio.play();
    }
  }

  const handleKeyPress = (event) => {
    // if key matches element id
  }

  return (
    <>
      <div id="drum-machine">
        
      <div id="display"></div>

      <div className="drum-pad" id="heater1" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
        Q
      </div>
      <div className="drum-pad" id="heater2" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
        W
      </div>
      <div className="drum-pad" id="heater3" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
        E
      </div>
      <div className="drum-pad" id="heater4" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
        A
      </div>
      <div className="drum-pad" id="clap" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
        S
      </div>
      <div className="drum-pad" id="openhh" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
        D
      </div>
      <div className="drum-pad" id="kickhat" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
        Z
      </div>
      <div className="drum-pad" id="kick" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
        X
      </div>
      <div className="drum-pad" id="closedhh" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
        C
      </div>
      </div>
      
    </>
  )
}

export default App
