import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import languageENG from '../local/languageENG';
import languageTR from '../local/languageTR';
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

const HomepageLayout = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const languageChoice = useSelector((state) => state.language.language);
    const [language, setLanguageData] = useState(languageENG);

    useEffect(() => {
        setLanguageData(languageChoice === "TR" ? languageTR : languageENG);
    }, [languageChoice]);

    return (
        <>
            <div 
                style={{
                    position: "absolute",
                    top: "16px",
                    right: "32px"
                }}
            >
                <select
                    style={{ 
                        backgroundColor: "white",
                        color: "black",
                        height: "35px",
                        width: "70px",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px black solid",
                        fontFamily: "Chevy, cursive",
                    }}
                    value={languageChoice}
                    onChange={(e) => dispatch(setLanguage(e.target.value))}
                >
                    <option  value="ENG">ENG</option >
                    <option  value="TR">TR</option >
                </select>
            </div>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img
                    style={{ 
                        height: "400px", 
                        marginBottom: "50px", 
                    }}
                    src="images/logo_ai2_transparent.png"
                    alt="Logo"
                >
                </img>
                <button
                    style={{
                        backgroundColor: "#FFD65A" ,
                        height: "50px",
                        width: "600px",
                        border: "2px solid black",
                        borderRadius: "10px",
                        color: "black",
                        cursor: "pointer",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        margin: "10px",
                        fontFamily: "Chevy, cursive",
                    }}
                    onClick={() => { navigate('/create-lobby') }}
                >
                    {language.homepage.createLobbyButton}
                </button>
                <button
                    style={{
                        backgroundColor: "#FFD65A" ,
                        height: "50px",
                        width: "600px",
                        border: "2px solid black",
                        borderRadius: "10px",
                        color: "black",
                        cursor: "pointer",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        margin: "10px",
                        fontFamily: "Chevy, cursive",
                    }}
                    onClick={() => {}}
                >
                    {language.homepage.joinLobbyButton}
                </button>
                <button
                    style={{
                        backgroundColor: "#FFD65A" ,
                        height: "50px",
                        width: "600px",
                        border: "2px solid black",
                        borderRadius: "10px",
                        color: "black",
                        cursor: "pointer",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        margin: "10px",
                        fontFamily: "Chevy, cursive",
                    }}
                    onClick={() => { navigate('/quick-play') }}
                >
                    {language.homepage.quickplay}
                </button>
            </div>
        </>
    );
};

export default HomepageLayout;
