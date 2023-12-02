import React, { useState } from "react";
import '../../assets/AddTeam.css';

import { teamsEndpoint } from "../../../../helpers/endpoints";
import axios from "axios";

const AddTeam: React.FC = () => {
  const [team, setTeam] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async ( e: React.FormEvent ) => {
    e.preventDefault();

    try {
      const response = await axios.post( teamsEndpoint, {
        name: team,
        description: description,
      } )

      if( response.status === 201 ) {
        window.location.replace( '/' )
      } else {
        alert( "Error!" );
      } 
    } catch( error ) {
      alert( error );
    }
  }

  return (
    <>
      <div className="form-box">
        <h2>Team Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text" 
              name="" 
              required
              value={team}
              onChange={(e) => setTeam( e.target.value )}
            />
            <label>Team name</label>
          </div>
          <div className="user-box">
            <textarea 
              cols={30} 
              rows={2} 
              required
              value={description}
              onChange={(e) => setDescription( e.target.value )}
            ></textarea>
            <label>Desctiption</label>
          </div>
          <button className="button">Create</button>
        </form>
      </div>
    </>
  );
}

export default AddTeam;