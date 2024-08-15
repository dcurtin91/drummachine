
import { useEffect } from 'react';
import './App.css'

function App() {
  


  const play = (e: React.MouseEvent<HTMLDivElement>) => {
   
    const audio = e.currentTarget.querySelector("audio");
    if (audio) {
      audio.play();
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
   
    const keyDown = event.key.toUpperCase(); 
    const drumPad = document.getElementById(keyDown);
    
    if (drumPad) {
      const audio = drumPad.querySelector("audio");
    if (audio) {
        audio.play();
    }
  }
};

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  }
}, []);

  return (
    <>
      <div id="drum-machine">
        
      <div id="display"></div>

      <div className="drum-pad" id="Q" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
        Q
      </div>
      <div className="drum-pad" id="W" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
        W
      </div>
      <div className="drum-pad" id="E" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
        E
      </div>
      <div className="drum-pad" id="A" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
        A
      </div>
      <div className="drum-pad" id="S" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
        S
      </div>
      <div className="drum-pad" id="D" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
        D
      </div>
      <div className="drum-pad" id="Z" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
        Z
      </div>
      <div className="drum-pad" id="X" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
        X
      </div>
      <div className="drum-pad" id="C" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
        C
      </div>
      </div>
      
    </>
  )
}

export default App
