import React, { useState } from "react";
import '../assets/RegisterForm.css';

import { registerEndpoint } from "../../../helpers/endpoints";
import axios from "axios";

const RegisterForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');
    const [password, setPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState('');

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();

        try {
            if( password === validatePassword ) {
                const response = await axios.post( registerEndpoint, {
                    first_name: firstName,
                    last_name: lastName,
                    username: username,
                    email: email,
                    role: role,
                    password: password
                } )

                if( response.status === 201 ) {
                    alert("Success!")
                    window.location.replace( '/' )
                } else {
                    alert( "Error!" );
                } 
            } else {
                alert( "Passwords are not same!" )
            }
        } catch( error ) {
            alert( error );
        }
    }

    return (
        <>
            <>
                <div className="form-box register-form">
                    <h2>Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName( e.target.value )}
                            />
                            <label>First Name</label>
                        </div>
                        <div className="user-box">
                            <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName( e.target.value )}
                            />
                            <label>Last Name</label>
                        </div>
                        <div className="user-box">
                            <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername( e.target.value )}
                            />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail( e.target.value )}
                            />
                            <label>email</label>
                        </div>
                        <div className="user-box">
                            <select
                                required
                                value={role} 
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="user">player</option>
                                <option value="moderator">tournament moderator</option>
                            </select>
                        </div>
                        <div className="user-box">
                            <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword( e.target.value )}
                            />
                            <label>Password</label>
                        </div>
                        <div className="user-box">
                            <input
                            type="password"
                            required
                            value={validatePassword}
                            onChange={(e) => setValidatePassword( e.target.value )}
                            />
                            <label>Validate Password</label>
                        </div>
                        <button className="button">Register</button>
                    </form>
                </div>
            </>
        </>
    );
}

export default RegisterForm;