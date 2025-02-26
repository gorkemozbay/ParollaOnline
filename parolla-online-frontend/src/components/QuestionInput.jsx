import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import languageENG from '../languageENG.json';
import languageTR from '../languageTR.json';
import { useSelector } from "react-redux";

function QuestionInput( { handleAnswer } ) {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    
    const [answer, setAnswer] = useState("");

    const handleInputValue = (value) => {
        setAnswer(value);
    }

    const handleAnswerClick = () => {  
        setAnswer("");
        handleAnswer(answer);
    }

    return (
        <Box 
            sx={{
                position: "fixed",
                top: "45%",
                left: "50%",
                color: "black",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "35%",
            }} // TODO: question holder'la aynı oldu dışardan ortaklanabilir bu box
        >
            <TextField
                label= {language.questionInput.answerTextFieldLabel}
                variant="outlined"
                value={answer}
                onChange={(e) => handleInputValue(e.target.value)}
                sx={{
                    width: "100%",
                    maxWidth: "500px",
                    color: "black",
                    backgroundColor: "white",
                    marginTop: 20
                }}
            />
                <Button
                    variant="outlined"
                    sx={{ 
                        width: 200,
                        height: 50, 
                        backgroundColor: "white",
                        borderColor: "black",
                        borderRadius: 3,
                        color: "black",
                        marginTop: 2
                    }}
                    onClick={() => handleAnswerClick()}
                > {answer == "" ? language.questionHolder.pass : language.questionHolder.answer}
                </Button>

        </Box>
    )
}

export default QuestionInput;