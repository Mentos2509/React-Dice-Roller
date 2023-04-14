import styled from "styled-components";

//

export const DiceButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: ${({ theme }) => theme.weights.light};
  padding: 1rem;
  border-radius: 0.7rem;
  cursor: pointer;
  background-color: rgb(140, 188, 140);
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgb(132 165 140);
  }
  border: 2px solid ${({ theme }) => theme.colors.green};
`;

export const DiceButtonDivStyled = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 10%;
`;
export const HistoryDivStyle = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green};
  width: 20%;
  border-radius: 0.7rem;
  margin: 1rem 0;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DivStyle = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.green};
  width: 20%;
  border-radius: 0.7rem;
  margin: 1rem 0;
`;

export const ParaStyle = styled.p`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export const AppDivStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyled = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.green};
  outline: 0;
  border-radius: 0.7rem;
  width: 20%;
  min-height: 3rem;
  font-size: ${({ theme }) => theme.sizes.s};
  margin: 0.5rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.light};
  //
`;

export const TitleParaStyle = styled.p`
  margin: 1rem;
  font-weight: ${({ theme }) => theme.weights.bold};
  letter-spacing: 0.1rem;
  font-size: ${({ theme }) => theme.sizes.l};
`;

export const ResultParaStyle = styled.p`
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: ${({ theme }) => theme.sizes.l};
`;

export const LabelStyled = styled.label`
  display: block;
  margin: 1rem 0;
`;

export const MathSignButtonStyled = styled.button`
  cursor: pointer;
  background-color: rgb(140, 188, 140);
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgb(132 165 140);
  }
  border: 2px solid ${({ theme }) => theme.colors.green};
`;

export const ClearButtonStyle = styled.button`
  cursor: pointer;
  background-color: rgb(140, 188, 140);
  border-radius: 0.7rem;
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgb(132 165 140);
  }
  border: 2px solid ${({ theme }) => theme.colors.green};
`;

export const HistorySpaceDivStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const HistoryListDiv = styled.div`
  max-height: 200px;
  overflow-x: scroll;
`;
