import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { HistoryListDiv, HistorySpaceDivStyled, ClearButtonStyle, MathSignButtonStyled, ResultParaStyle, TitleParaStyle, InputStyled, DivStyle, LabelStyled, DiceButtonStyled, DiceButtonDivStyled, HistoryDivStyle, ParaStyle, AppDivStyle } from '../src/styles/styles'
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

  const clearHistory = () => {
    setRollResults([])
    setResult([])
  }

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
      <GlobalStyle />
      <AppDivStyle className="App">
        <TitleParaStyle>You can't roll like Elvis</TitleParaStyle>
        <DiceButtonDivStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(4, inputValue)}>Dice (4)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(6, inputValue)}>Dice (6)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(8, inputValue)}>Dice (8)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(10, inputValue)}>Dice (10)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(12, inputValue)}>Dice (12)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(20, inputValue)}>Dice (20)</DiceButtonStyled>
          <DiceButtonStyled onClick={() => numberOfRolls(100, inputValue)}>Dice (100)</DiceButtonStyled>
        </DiceButtonDivStyled>
        <DivStyle>
          <p>Results of dice sum</p>
          {inputValue === 1 ? (
            <div>
              <ResultParaStyle>{rollResult.reduce((a, b) => a + b, 0) + bonusPoints}</ResultParaStyle>
              {bonusPoints > 0 && <div>Bonus points: <ResultParaStyle>{`${bonusPoints} `}</ResultParaStyle></div>}
            </div>
          ) : (
            <div>
              <ResultParaStyle>{rollResult.reduce((a, b) => a + b, 0) + bonusPoints}</ResultParaStyle>
              <p>Results of each dice</p>
              <div><ResultParaStyle>{`  ${rollResult.join(" + ")} `}</ResultParaStyle></div>
              <div>Bonus Points <ResultParaStyle>{` ${bonusPoints} `}</ResultParaStyle></div>
            </div>
          )}
        </DivStyle>
        <DivStyle>
          <LabelStyled id="rolls">Number of dices</LabelStyled>
          <div>
            <MathSignButtonStyled onClick={() => deductOneDiceRoll()}>-</MathSignButtonStyled>
            <InputStyled
              id="rolls"
              min={1}
              max={10}
              value={inputValue}
              onChange={(e) => e.target.value}
              placeholder="Number of Rolls"
            />
            <MathSignButtonStyled onClick={() => addOneDiceRoll()}>+</MathSignButtonStyled>
          </div>
        </DivStyle>
        <DivStyle>
          <LabelStyled id={"Bonus Points"}>Bonus Points</LabelStyled>
          <div>
            <MathSignButtonStyled onClick={() => deductOneBonusPoints()}>-</MathSignButtonStyled>
            <InputStyled
              placeholder="Bonus points"
              value={bonusPoints}
              min={1}
              max={10}
              onChange={(e) => e.target.value}
              id="Bonus Points"
            />
            <MathSignButtonStyled onClick={() => addOneBonusPoints()}>+</MathSignButtonStyled>
          </div>
        </DivStyle>

        <HistoryDivStyle>
          <HistorySpaceDivStyled>
            <ParaStyle>History</ParaStyle>
             
            <ClearButtonStyle onClick={() => clearHistory()}>Clear</ClearButtonStyle>
          </HistorySpaceDivStyled>
<HistoryListDiv>
                {result.map((e) => {
                  return (
                    <div key={e.id}>
                      {e.dice} : {e.roll}
                    </div>
                  );
                })}
              </HistoryListDiv>
        </HistoryDivStyle>
      </AppDivStyle>
    </ThemeProvider>
  );
}

export default App;
