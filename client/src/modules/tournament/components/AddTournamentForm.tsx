import React from "react";

const AddTournamentForm: React.FC = () => {
 return (
    <>
      <div className="login-box">
        <h2>Create Team Form</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required/>
            <label>Team name</label>
          </div>
          <div className="user-box">
            <textarea cols={30} rows={2} required></textarea>
            <label>Desctiption</label>
          </div>
          <button className="button">Create</button>
        </form>
      </div>
    </>
 );
}

export default AddTournamentForm;