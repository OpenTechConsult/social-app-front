import React, { useState } from 'react';
import { Avatar, Input } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import styled from 'styled-components';

const Messenger = () => {

    const [input, setInput] = useState('');

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        } 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <MessengerWrapper>
            <MessengerTop>
                <Avatar src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132" />
                <form>
                    <input type="text"
                        className='messenger__input'
                        placeholder="What's on your mind?"
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    <Input type="file"
                        className='messenger__fileSelector'
                        onChange={handleChange} />
                    <button type='submit' onClick={handleSubmit}>Hidden</button>
                </form>
            </MessengerTop>
            <MessengerBottom>
                <div className='messenger__option'>
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className='messenger__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messenger__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </MessengerBottom>
        </MessengerWrapper>
    )
}

const MessengerWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
    width: 60%;
`;
const MessengerTop = styled.div`
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding: 15px;
    form {
        flex: 1;
        display: flex;
        .messenger__input {
            flex: 1;
            outline-width: 0;
            border: none;
            padding: 5px 20px;
            margin: 0 10px;
            border-radius: 999px;
            background-color: #eff2f5;
        }
        .messenger__fileSelector {
            width: 20%;
        }
        button {
            display: none;
        }
    }

`;
const MessengerBottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    .messenger__option {
        display: flex;
        padding: 20px;
        align-items: center;
        color: gray;
        margin: 5px;
        h3 {
            font-size: medium;
            margin-left: 10px;
        }
        &:hover {
            background-color: #eff2f5;
            border-radius: 20px;
            cursor: pointer;
        }
    }
`;

export default Messenger;
