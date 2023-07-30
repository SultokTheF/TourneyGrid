import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Team from '../types/Team';

import TeamCard from './TeamCard';

import '../assets/TeamList.css';


// The model of Team in the database
const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Fetch the list of teams from the API
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/teams/');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='team-list'>
      <h2>Team List</h2>
      <TeamCard/>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <strong>{team.name}</strong>
            <p>{team.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
