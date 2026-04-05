import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import Navbar from "./components/Navbar";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  const goHome = () => setIsGameStarted(false);
  const goPlay = () => setIsGameStarted(true);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>
      <Navbar
        goHome={goHome}
        goPlay={goPlay}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </div>
  );
}

export default App;