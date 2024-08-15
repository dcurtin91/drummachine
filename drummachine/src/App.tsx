
import './App.css'

function App() {
  


  const play = (e: React.MouseEvent<HTMLDivElement>) => {
   
    const audio = e.currentTarget.querySelector("audio");
    if (audio) {
      audio.play();
    }
  }

  return (
    <>
      <div id="drum-machine">
        
      <div id="display"></div>

      <div className="drum-pad" id="heater1" onClick={play}>
      <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
        Q
      </div>
      </div>
    </>
  )
}

export default App
