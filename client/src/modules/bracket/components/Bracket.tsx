import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const BracketContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column; /* Updated to column */
  align-items: center;
  margin: 10px;
`;

const Team = styled.div<{ selected: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#f1c40f' : 'inherit')};
`;

interface TeamProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

const shuffleArray = (array: string[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generatePairs = (teams: string[]): string[][] => {
  const shuffledTeams = teams;
  const pairs: string[][] = [];
  for (let i = 0; i < shuffledTeams.length; i += 2) {
    pairs.push([shuffledTeams[i], shuffledTeams[i + 1]]);
  }
  return pairs;
};

const Bracket: React.FC = () => {
  const [round1Winners, setRound1Winners] = useState<{ [key: string]: string | null }>({});
  const [round2Winners, setRound2Winners] = useState<{ [key: string]: string | null }>({});
  const [finalWinner, setFinalWinner] = useState<string | null>(null);

  const handleWinnerSelection = (winner: string, pair: string[], round: number) => {
    if (round === 1) {
      setRound1Winners((prevWinners) => ({
        ...prevWinners,
        [pair[0]]: pair[1] === winner ? null : winner,
        [pair[1]]: pair[0] === winner ? null : winner,
      }));
    } else if (round === 2) {
      setRound2Winners((prevWinners) => ({
        ...prevWinners,
        [pair[0]]: pair[1] === winner ? null : winner,
        [pair[1]]: pair[0] === winner ? null : winner,
      }));
    } else if (round === 3) {
      setFinalWinner(winner);
    }
  };

  const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8'];
  const teams2 = Object.values(round1Winners).filter(Boolean) as string[];
  const teams3 = Object.values(round2Winners).filter(Boolean) as string[];

  const round1Pairs = generatePairs(teams);
  const round2Pairs = generatePairs(teams2);
  const finalPair = generatePairs(teams3);

  return (
    <BracketContainer>
      <RoundContainer>
        {round1Pairs.map((pair, index) => (
          <MatchContainer key={index}>
            <Team
              selected={round1Winners[pair[0]] === pair[1]}
              onClick={() => handleWinnerSelection(pair[0], pair, 1)}
            >
              {pair[0]}
            </Team>
            <Team
              selected={round1Winners[pair[1]] === pair[0]}
              onClick={() => handleWinnerSelection(pair[1], pair, 1)}
            >
              {pair[1]}
            </Team>
          </MatchContainer>
        ))}
      </RoundContainer>

      <RoundContainer>
        {round2Pairs.map((pair, index) => (
          <MatchContainer key={index}>
            <Team
              selected={round2Winners[pair[0]] === pair[1]}
              onClick={() => handleWinnerSelection(pair[0], pair, 2)}
            >
              {pair[0]}
            </Team>
            <Team
              selected={round2Winners[pair[1]] === pair[0]}
              onClick={() => handleWinnerSelection(pair[1], pair, 2)}
            >
              {pair[1]}
            </Team>
          </MatchContainer>
        ))}
      </RoundContainer>

      <RoundContainer>
        {finalPair.map((pair, index) => (
          <MatchContainer key={index}>
            <Team
              selected={finalWinner === pair[0]}
              onClick={() => handleWinnerSelection(pair[0], pair, 3)}
            >
              {pair[0]}
            </Team>
            <Team
              selected={finalWinner === pair[1]}
              onClick={() => handleWinnerSelection(pair[1], pair, 3)}
            >
              {pair[1]}
            </Team>
          </MatchContainer>
        ))}
      </RoundContainer>
    </BracketContainer>
  );
};

export default Bracket;
