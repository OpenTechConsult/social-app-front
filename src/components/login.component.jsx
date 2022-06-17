import { Button } from '@mui/material';
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase';
import styled from 'styled-components';

const Login = () => {

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(firebaseApp);
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        })
    }
    return (
        <LoginWrapper>
            <div className='login__logo'>
                <img src='logo512.png' alt='logo' />
                <h1>Popular Social</h1>
            </div>
            <Button type='submit' className='login__button' onClick={signIn}>Sign In</Button>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    .login__logo {
        display: flex;
        flex-direction: column;
        img {
            object-fit: contain;
            height: 150px;
            max-width: 200px;
        }
    }

    .login__button {
        width: 300px;
        background-color: #2e81f4;
        color: #eff2f5;
        font-weight: 800;
        &:hover {
            background-color: white;
            color
        }
    }  
`;

export default Login;
