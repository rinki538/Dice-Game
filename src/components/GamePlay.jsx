import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const WINNING_SCORE = 10; 

  const [score, setScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [turn, setTurn] = useState("user");
  const [winner, setWinner] = useState("");

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // 🎲 USER TURN
  const roleDice = () => {
    if (turn !== "user" || winner) return;

    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => {
        const newScore = prev + randomNumber;

        if (newScore >= WINNING_SCORE) {
          setWinner("user");
        }

        return newScore;
      });
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
    setTurn("ai");

    setTimeout(aiTurn, 1000);
  };

  // 🤖 AI TURN
  const aiTurn = () => {
    if (winner) return;

    const aiNumber = generateRandomNumber(1, 7);
    setCurrentDice(aiNumber);

    if (aiNumber > 3) {
      setAiScore((prev) => {
        const newScore = prev + aiNumber;

        if (newScore >= WINNING_SCORE) {
          setWinner("ai");
        }

        return newScore;
      });
    } else {
      setAiScore((prev) => prev - 2);
    }

    setTurn("user");
  };

  const resetScore = () => {
    setScore(0);
    setAiScore(0);
    setWinner("");
  };

  return (
    <MainContainer>
      {/* 🧠 SCORE BOARD */}
      <div className="score-board">
        <div className="score user">
          <p>You</p>
          <h1>{score}</h1>
        </div>

        <div className="score ai">
          <p>AI</p>
          <h1>{aiScore}</h1>
        </div>
      </div>

      {/* 🏆 WINNER MESSAGE */}
      {winner && (
        <h1 className="winner">
          {winner === "user" ? "🎉 You Win!" : "🎉 AI Wins!"}
        </h1>
      )}

      <div className="top_section">
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        turn={turn}
        selectedNumber={selectedNumber}
        winner={winner}
      />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .score-board {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto 20px;
  }

  .score {
    text-align: center;
    padding: 15px 25px;
    border-radius: 10px;
  }

  .user {
    border: 1px solid #00b4ff;
  }

  .ai {
    border: 1px solid #ff4d4d;
  }

  .winner {
    text-align: center;
    margin: 20px 0;
    font-size: 28px;
    color: #00b4ff;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;