import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState(''); // State to manage the display text

  const play = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = e.currentTarget.querySelector("audio");
    if (audio) {
      audio.play();
      setDisplayText(audio.title); // Set the display text to the title of the audio
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const keyDown = event.key.toUpperCase();
    const drumPad = document.getElementById(keyDown);

    if (drumPad) {
      const audio = drumPad.querySelector("audio");
      if (audio) {
        audio.play();
        setDisplayText(audio.title); // Set the display text to the title of the audio
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container text-center mt-5" id="drum-machine">
      <div id="display" className="mb-4 p-3 border bg-light">
        {displayText || 'Play a sound!'} {/* Display the title or a default message */}
      </div>

      <div className="row">
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="Q" onClick={play}>
            Q
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q" title="Heater 1"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="W" onClick={play}>
            W
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W" title="Heater 2"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="E" onClick={play}>
            E
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E" title="Heater 3"></audio>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="A" onClick={play}>
            A
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A" title="Heater 4"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="S" onClick={play}>
            S
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S" title="Clap"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="D" onClick={play}>
            D
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D" title="Open HH"></audio>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="Z" onClick={play}>
            Z
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z" title="Kick and Hat"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="X" onClick={play}>
            X
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X" title="Kick"></audio>
          </div>
        </div>
        <div className="col-4">
          <div className="drum-pad btn btn-dark btn-lg" id="C" onClick={play}>
            C
            <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C" title="Closed HH"></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
