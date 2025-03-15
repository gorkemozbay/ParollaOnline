import React, { useState } from "react";
import languageENG from '../../local/languageENG.json';
import languageTR from '../../local/languageTR.json';
import { useSelector } from "react-redux";

function QuestionInput( { handleAnswer, bubble } ) {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(false);

    const handleInputValue = (value) => {
        setAnswer(value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAnswerClick();
        } else if (e.key === "Tab") {
            e.preventDefault();
            handleAnswer("");
            setAnswer("");
        }
    }

    const handleAnswerClick = () => {  
        if (isAnswerValid(answer)) {
            handleAnswer(answer);
            setError(false);
        } else {
            setError(true);
        }
        setAnswer("");
    }

    const isAnswerValid = (answer) => { 
        return answer === "" || answer == "bitir" || bubble.letter.toUpperCase() === answer[0].toUpperCase(); 
    }

    return (
        <div 
            style={{
                position: "fixed",
                top: "60%",
                left: "50%",
                color: "black",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "30%",
            }}
        >
            <div 
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid black",
                    borderRadius: 15,
                    backgroundColor: "white",
                }}
            >
                <input
                    style={{
                        flex: 1,
                        height: "60px",
                        color: "black",
                        backgroundColor: "white",
                        paddingLeft: "10px",
                        textAlign: "left",
                        fontSize: "1.5em",
                        fontFamily: "Chevy, cursive",
                        outline: "none",
                        border: "none",
                        borderRadius: 15,
                    }}
                    placeHolder= "Your answer"
                    value={answer}
                    onChange={(e) => handleInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    error={error} // Material UI TextField does not have error prop, so we need to use it as a custom prop
                    helperText={error ? `Answer must start with current letter: ${bubble.letter}` : ""}
                ></input>
                <button
                    style={{
                        backgroundColor: answer == "" ? "#FFD65A" : "#16C47F",
                    }}
                    className="game-button"
                    onClick={() => handleAnswerClick()}
                    > 
                    {answer == "" ? language.questionHolder.pass : language.questionHolder.answer}
                </button>
            </div>
        </div>
    )
}

export default QuestionInput;