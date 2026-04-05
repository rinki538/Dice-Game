import styled from "styled-components";
import { useState } from "react";

const Navbar = ({ goHome, goPlay, toggleTheme, theme }) => {
  const [active, setActive] = useState("home");

  return (
    <Nav>
      <Logo>🎲 DiceGame</Logo>

      <div className="nav-container">
        <button
          className={active === "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
            goHome();
          }}
        >
          Home
        </button>

        <button
          className={active === "play" ? "active" : ""}
          onClick={() => {
            setActive("play");
            goPlay();
          }}
        >
          Play Game
        </button>

        <button
          className={active === "theme" ? "active" : ""}
          onClick={() => {
            setActive("theme");
            toggleTheme();
          }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <span className={`slider ${active}`}></span>
      </div>
    </Nav>
  );
};

export default Navbar;

/* ================= STYLES ================= */

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #000;
  color: #fff;
  border-bottom: 1px solid #1a1a1a;

  .nav-container {
    position: relative;
    display: flex;
    gap: 6px;
    padding: 6px;
    border-radius: 40px;
    background: #111;
  }

  .nav-container button {
    position: relative;
    z-index: 2;
    padding: 9px 20px;
    min-width: 110px;
    border: none;
    background: transparent;
    color: #aaa;
    cursor: pointer;
    border-radius: 30px;
    font-size: 14px;

    /* smoother text + transform */
    transition: color 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
  }

  .nav-container button:hover {
    color: #fff;
    transform: translateY(-1px) scale(1.03);
  }

  .nav-container button.active {
    color: #fff;
    font-weight: 500;
  }

  /* ULTRA SMOOTH SLIDER */
  .slider {
    position: absolute;
    top: 6px;
    left: 6px;
    height: calc(100% - 12px);
    width: 110px;
    border-radius: 30px;

    background: linear-gradient(rgba(0, 180, 255, 0.6), rgba(0, 180, 255, 0.3));


    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.3s ease;

    box-shadow: 0 0 18px rgba(0, 180, 255, 0.35);
  }

  .slider.home {
    transform: translateX(0);
  }

  .slider.play {
    transform: translateX(116px);
  }

  .slider.theme {
    transform: translateX(232px);
  }
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;

  background: linear-gradient(90deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;