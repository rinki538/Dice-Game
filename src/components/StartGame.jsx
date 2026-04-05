import styled from "styled-components";
import { Button } from "../styled/Button";
import { motion } from "framer-motion";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <motion.div
        className="img"
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.08,
          rotate: 8,
          transition: { type: "spring", stiffness: 200 },
        }}
      >
        <img src="/images/dices.png" alt="dice" />
      </motion.div>

      {/* CONTENT */}
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

/* ================= STYLES ================= */

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

 
  .img {
    perspective: 1000px;
  }

  .img img {
    width: 400px;

    animation: float 4s ease-in-out infinite,
               glowPulse 3s ease-in-out infinite,
               slowRotate 10s linear infinite;

    transition: transform 0.3s ease;
  }

  /* FLOAT */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }

@keyframes glowPulse {
  0% {
    filter: drop-shadow(0 0 5px rgba(0, 180, 255, 0.2));
  }
  50% {
    filter: drop-shadow(0 0 25px rgba(0, 180, 255, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 5px rgba(0, 180, 255, 0.2));
  }
}

  /* NEW: SLOW ROTATION */
  @keyframes slowRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* CONTENT */
 .content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;

  h1 {
    font-size: 96px;
    white-space: nowrap;
  }

  /* DEFAULT BUTTON */
  button {
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 16px;

    backdrop-filter: blur(10px);
    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }


  .dark & button {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .dark & button:hover {
    background: linear-gradient(rgba(0, 180, 255, 0.6), rgba(0, 180, 255, 0.3));
    box-shadow: 0 0 20px rgba(0, 180, 255, 0.5);
    transform: translateY(-2px) scale(1.05);
  }

 
  .light & button {
    background: rgba(0, 0, 0, 0.05);
    color: #111;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .light & button:hover {
    background: linear-gradient(135deg, #00b4ff, #0090ff);
    color: white;
    box-shadow: 0 0 20px rgba(0, 180, 255, 0.4);
    transform: translateY(-2px) scale(1.05);
  }
}
background: #070A12;

/* NEON GAMING GRID + LIGHT ENERGY */
background-image:
  linear-gradient(rgba(0, 255, 200, 0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 255, 200, 0.06) 1px, transparent 1px),
  radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15), transparent 40%),
  radial-gradient(circle at 80% 70%, rgba(255, 0, 200, 0.12), transparent 45%),
  radial-gradient(circle at 50% 50%, rgba(0, 120, 255, 0.1), transparent 50%);

background-size: 50px 50px, 50px 50px, 100% 100%, 100% 100%, 100% 100%;
animation: gamingPulse 8s ease-in-out infinite;

/* LIGHT MODE */
.light & {
  background: #f8fafc;
  background-image:
    linear-gradient(rgba(0, 120, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 120, 255, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 20% 30%, rgba(0, 120, 255, 0.12), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255, 0, 150, 0.08), transparent 45%);
}

@keyframes gamingPulse {
  0% {
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.15);
    transform: scale(1.01);
  }
  100% {
    filter: brightness(1);
    transform: scale(1);
  }
}




  /* BUTTON HOVER */
  button:hover {
    transform: translateY(-2px) scale(1.05);
    transition: 0.3s ease;
  }
`;
