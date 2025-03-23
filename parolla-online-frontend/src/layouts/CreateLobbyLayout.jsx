import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import languageENG from '../local/languageENG';
import languageTR from '../local/languageTR';

// TODO: divide this component into 3 component

const MAX_PLAYERS = 12; 

const CreateLobbyLayout = () => {

    const [roomNumber, setRoomNumber] = useState()
    const [players, setPlayers] = useState()
    const [isCopied, setIsCopied] = useState(false)
    
    const navigate = useNavigate();
    
    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;

    useEffect(() => {
        initialize();
    }, [])

    const initialize = () => {
        generateRoomNumber();
        generateRandomPlayers();
    }

    const generateRoomNumber = () => {
        const numberList = []
        for (let i = 0; i < 6; i++) {
            let randomNumber;
            if (i == 0) {
                randomNumber = getRandomInt(1, 9);
            } else {
                randomNumber = getRandomInt(0, 9);
            }
            numberList.push(randomNumber);  
        }
        setRoomNumber(numberList);
    }

    const generateRandomPlayers = () => {
        const numberOfPlayers = getRandomInt(1, 12);
        const players = Array.from({ length: numberOfPlayers }, (_, index) => `Player-${index + 1}`);
        setPlayers(players)
    }

    const getRandomInt = (min, max) => { // TODO: goes to util
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleCopy = () => {
        const roomNumberText = roomNumber.join('');
        navigator.clipboard.writeText(roomNumberText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

    const playerAvatars = players?.map((player, index) => (
        <div 
            key={index} 
            style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center'
                }}>
            <Avatar 
                sx={{  
                    width: 70, 
                    height: 70 
                }}> 
                <PersonIcon /> {/* TODO: customized icons */}
            </Avatar>  
            <h4
                style={{
                    marginTop: "10px"
                }}
            >
                {player}
            </h4>
        </div>
    ));
    
    return (
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: "30px",
                fontFamily: "Chevy, cursive",
                color: "black",
                marginTop: "-30px" // TODO: fix
            }}>
            {/* Room Number */}
            <div
                style={{
                    border: "4px solid black",
                    borderRadius: "30px",
                    textAlign: "center",
                    padding: "10px 30px 20px 30px",
                }}
            >
                <h2 
                    style={{
                        margin: "0px"
                    }}
                >
                   {language.createLobbyPage.roomNumber}
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    {roomNumber?.map((number) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginBottom: "30px"
                                }}
                            >
                                <h1
                                    style={{
                                        margin: "20px 30px 5px 30px"
                                    }}
                                >
                                    {number}
                                </h1>
                                <div
                                    style={{
                                        width: "50px",
                                        height: "5px",
                                        margin: "0px 30px 0px 30px",
                                        backgroundColor: "black"
                                    }}
                                >    
                                </div>
                            </div>
                        )
                    })}
                </div>
                { /* Buttons: Copy + Share */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    <button
                        style={{
                            backgroundColor: "#FFD65A",
                            height: "50px",
                            border: "3px solid black",
                            borderRadius: "15px",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "25px 80px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={handleCopy}
                    >
                        {language.createLobbyPage.copy}
                    </button>
                    <button
                        style={{
                            backgroundColor: "#FFD65A",
                            height: "50px",
                            border: "3px solid black",
                            borderRadius: "15px",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "25px 80px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={() => {}}
                    >
                        {language.createLobbyPage.share}
                    </button>
                </div>
                <h3  
                    style={{
                        margin: "5px 250px 0px 0px",
                        textShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                        visibility: isCopied ? "visible" : "hidden",
                    }}
                >
                    copied
                </h3>
            </div>

            {/* Players */} 
            <div
                style={{
                    position: 'relative',
                    border: "4px solid black",
                    borderRadius: "30px",
                    textAlign: 'center',
                    padding: "15px 30px 30px 25px",
                }}
            >
                <h2
                    style={{
                        marginTop: "0px",
                        marginBottom: "30px"
                    }}
                >
                    Players
                </h2>
                <h3
                    style={{
                        position: 'absolute', 
                        top: 0,
                        right: 20, 
                        fontWeight: 'bold',
                    }}
                >
                    {players?.length} / {MAX_PLAYERS}
                </h3>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        rowGap: "10px",
                        columnGap: "70px"
                    }}
                >
                    {playerAvatars}
                </div>
            </div>

            {/* Buttons */}
            <div
                style={{
                    display: "flex",
                    gap: "20px"
                }}
            >
                <button 
                    style={{
                            backgroundColor: "#FFD65A",
                            height: "50px",
                            border: "3px solid black",
                            borderRadius: "15px",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "25px 70px",
                            display: "flex",
                            alignItems: "center",
                    }}
                    onClick={() => {navigate("/")}}
                >
                    {language.createLobbyPage.goBack}
                </button>
                <button 
                    style={{
                            backgroundColor: "#FFD65A",
                            height: "50px",
                            border: "3px solid black",
                            borderRadius: "15px",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "25px 70px",
                            display: "flex",
                            alignItems: "center",
                    }}
                    onClick={() => {}}
                >
                    {language.createLobbyPage.settings}
                </button>
                <button 
                    style={{
                            backgroundColor: "#FFD65A",
                            height: "50px",
                            border: "3px solid black",
                            borderRadius: "15px",
                            color: "black",
                            cursor: "pointer",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            padding: "25px 70px",
                            display: "flex",
                            alignItems: "center",
                    }}
                    onClick={() => {navigate("/quick-play")}}
                >
                    {language.createLobbyPage.startGame}
                </button>
            </div>
        </div>
    );
};

export default CreateLobbyLayout