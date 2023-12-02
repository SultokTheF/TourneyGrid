import React, { useState, useEffect } from "react";
import axios from "axios";

import Team from "../../../types/Team";
import { teamsEndpoint } from "../../../helpers/endpoints";

const AddTournamentForm: React.FC = () => {
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
    <>
      <div className="form-box">
        <h2>Tournament Registration</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required/>
            <label>Tournament Name</label>
          </div>
          <div className="user-box">
            <textarea cols={30} rows={2} required></textarea>
            <label>Desctiption</label>
          </div>
          <div className="user-box">
            <select
            multiple
            >
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <label>Teams</label>
          </div>
          <button className="button">Create</button>
        </form>
      </div>
    </>
  );
}

export default AddTournamentForm;