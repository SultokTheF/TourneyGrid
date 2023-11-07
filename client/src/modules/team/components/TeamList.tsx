import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Team from '../../../types/Team';
import { teamsEndpoint } from '../../../helpers/endpoints';

import TeamCard from './TeamCard';

import Spinner from '../../../components/ui/Spinner';

import '../assets/TeamList.css';


// The model of Team in the database
const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Fetch the list of teams from the API
    const fetchTeams = async () => {
      try {
        const response = await axios.get(teamsEndpoint);
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='container'>
      <div className='team-list'>
        <h2>Team List</h2>
        <TeamCard/>
        { teams.length === 0 ? (
          <Spinner/>
        ) : (
          <ul>
          {teams.map((team) => (
            <li key={team.id}>
              <strong>{team.name}</strong>
              <p>{team.description}</p>
            </li>
          ))}
        </ul>
        ) }
      </div>
    </div>
  );
};

export default TeamList;
