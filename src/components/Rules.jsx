import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>

      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>If you get wrong guess then same points will be deducted whatever you choose .</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

/* ================= STYLES ================= */

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 22px;
  border-radius: 14px;


  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e5e7eb;

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .text {
    margin-top: 16px;
  }

  p {
    margin: 10px 0;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.75);
  }


  .light & {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: #111827;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }

  .light & h2 {
    color: #0f172a;
  }

  .light & p {
    color: #374151;
  }

 
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 35px rgba(0, 180, 255, 0.15);
  }
`;