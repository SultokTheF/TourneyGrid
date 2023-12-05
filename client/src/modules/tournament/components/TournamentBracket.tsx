import React from "react";

import Bracket from "../../bracket/components/Bracket";

import "../assets/TournamentBracket.css";

const TournamentBracket: React.FC = () => {
  const game1 = { team1: 'Team A', team2: 'Team B', winner: 'Team A', source1: null, source2: null };
  const game2 = { team1: 'Team C', team2: 'Team D', winner: 'Team D', source1: null, source2: null };
  const game3 = { team1: 'Team A', team2: 'Team D', winner: 'Team A', source1: game1, source2: game2 };

  const tournamentData = [
    game1,
    game2,
    game3
    // Add more matches as needed
  ];
  

  return (
    <>
      <div className="bracket">
        <Bracket />
      </div>
    </>
  );
}

export default TournamentBracket;
