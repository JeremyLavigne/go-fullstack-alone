import React, { useState } from 'react';
import usersService from '../../../services/users';
import './style.css';

const Header = () => {
    const [newMail, setNewMail] = useState('');
    const [newPass, setNewPass] = useState('');

    const userSigningIn = () => {
        if (newMail !== '' && newPass !== '') {
            const newUser = {
                email: newMail,
                password: newPass,
            };
            usersService
                .signIn(newUser)
                .then(() => {
                    console.log('Sign in');
                    setNewMail('');
                    setNewPass('');
                });
        } else {
            console.log('empty field');
            setNewMail('');
            setNewPass('');
        }
    };

    return (
        <header id="main-header">
            <p>
                Mail
                <input
                    value={newMail}
                    onChange={(e) => setNewMail(e.target.value)}
                />
            </p>
            <p>
                Password
                <input
                    type='password'
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                />
            </p>
            <button>
                Login
            </button>
            <button onClick={userSigningIn}>
                Sign in
            </button>
            Test for login : test@post.com - myPass
        </header>
    );
};

export default Header;
