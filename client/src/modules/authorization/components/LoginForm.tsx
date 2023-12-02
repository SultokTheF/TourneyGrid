import React, { useState } from "react";
import axios from "axios";
import { loginEndpoint } from "../../../helpers/endpoints";

import '../assets/LoginForm.css';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [JWTToken, setJWTToken] = useState('');
    
    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault();

        try {
            const response = await axios.post( loginEndpoint, {
                email: email,
                password: password
            } )

            if( response.status === 200 ) {
                localStorage.setItem( 'JWT', response.data.access );
                window.location.replace( '/' );
            } else {
                alert( "Error!" );
            } 
        } catch( error ) {
            alert( error );
        }
    }

    return (
        <>
            <div className="form-box register-form">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
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
                        <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword( e.target.value )}
                        />
                        <label>password</label>
                    </div>
                    <button className="button">Login</button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;