import styled from "styled-components";
import { useRef } from "react";

const RoleDice = ({ roleDice, currentDice, turn, selectedNumber, winner }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
  
    if (turn !== "user" || winner) return;

    // 🔊 Play sound ONLY if number selected
    if (selectedNumber !== undefined && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    roleDice();
  };

  return (
    <DiceContainer>
      <div
        className="dice"
        onClick={handleClick}
        style={{
          opacity: turn === "user" && !winner ? 1 : 0.5,
          pointerEvents: turn === "user" && !winner ? "auto" : "none",
        }}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>

      <audio ref={audioRef} src="/audio/dice.mp3" />

      <p>
        {winner
          ? "Game Over 🎯"
          : turn === "user"
          ? "Click on Dice to roll"
          : "AI is playing... 🤖"}
      </p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;