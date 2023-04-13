import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { DiceButtonStyled, DiceButtonDivStyled, BodyDivStyled } from '../src/styles/styles'
import { ThemeProvider } from "styled-components";
import { ThemeConfig } from "./theme/ThemeConfig";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [rollResult, setRollResults] = useState([]);
  const [bonusPoints, setBonusPoints] = useState(0);
  
   
  
  const numberOfRolls = (max, inputValue) => {
    let newResult = [];
    let currentResults = [];
    for (let i = 0; i < inputValue; i++) {
      newResult.push({
        dice: `d${max}`,
        roll: Math.ceil(Math.random() * max),
      });
      currentResults.push(newResult.map((e) => e.roll));
      setRollResults(currentResults[currentResults.length - 1]);
    }

    const multipleRollDiceValue = newResult.reduce(
      (accumulator, value) => accumulator + value.roll,
      0
    );
    newResult = {
      dice: `d${max}`,
      roll: multipleRollDiceValue + bonusPoints,
      id: uuidv4(),
    };
    newResult = [newResult, ...result];
    setResult(newResult);
  };

  const addOneDiceRoll = () => {
    if (inputValue < 10) {
      setInputValue(inputValue + 1);
    }
  };
  const deductOneDiceRoll = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  };

  const addOneBonusPoints = () => {
    if (bonusPoints < 20) {
      setBonusPoints(bonusPoints + 1);
    }
  };
  const deductOneBonusPoints = () => {
    if (bonusPoints > -20) {
      setBonusPoints(bonusPoints - 1);
    }
  };

  console.log("rollResult:", rollResult);
  return (
    <ThemeProvider theme={ThemeConfig}>
      <GlobalStyle/>
    <div className="App">
      <div>You can't roll like Elvis</div>
      <DiceButtonDivStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(4, inputValue)}>d4</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(6, inputValue)}>d6</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(8, inputValue)}>d8</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(10, inputValue)}>d10</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(12, inputValue)}>d12</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(20, inputValue)}>d20</DiceButtonStyled>
        <DiceButtonStyled onClick={() => numberOfRolls(100, inputValue)}>d100</DiceButtonStyled>
      </DiceButtonDivStyled>
      <div>
        {inputValue === 1 ? (
          <div>
            <p>Results of dice sum</p>
            <div>{rollResult.reduce((a, b) => a + b, 0) + bonusPoints}</div>
            {bonusPoints > 0 && <div>{` BP: ${bonusPoints} `}</div>}
          </div>
        ) : (
          <div>
            <p>Results of dice sum</p>
            {rollResult.reduce((a, b) => a + b, 0) + bonusPoints}
            <p>Results of each dice</p>
            <div>{` RR: ${rollResult.join(" + ")} `}</div>
            <div>{` BP: ${bonusPoints} `}</div>
          </div>
        )}
      </div>
      <label id="rolls">Number of dices</label>
      <div>
        <button onClick={() => deductOneDiceRoll()}>-</button>
        <input
          id="rolls"
          min={1}
          max={10}
          value={inputValue}
          onChange={(e) => e.target.value}
          placeholder="Number of Rolls"
        />
        <button onClick={() => addOneDiceRoll()}>+</button>
      </div>
      <label id={"Bonus Points"}>Bonus Points</label>
      <div>
        <button onClick={() => deductOneBonusPoints()}>-</button>
        <input
          placeholder="Bonus points"
          value={bonusPoints}
          min={1}
          max={10}
          onChange={(e) => e.target.value}
          id="Bonus Points"
        />
        <button onClick={() => addOneBonusPoints()}>+</button>
      </div>

      <div>
        History
        {result.map((e) => {
          return (
            <div key={e.id}>
              {e.dice} : {e.roll}
            </div>
          );
        })}
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
