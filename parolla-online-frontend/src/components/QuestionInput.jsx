import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import languageENG from '../languageENG.json';
import languageTR from '../languageTR.json';
import { useSelector } from "react-redux";

function QuestionInput( { handleAnswer, bubble } ) {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(false);

    const handleInputValue = (value) => {
        setAnswer(value);
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
        return answer == "" || bubble.letter.toUpperCase() == answer[0].toUpperCase(); 
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
                variant="outlined"
                sx={{
                    width: "100%",
                    maxWidth: "500px",
                    color: "black",
                    marginTop: 20
                }}
                label= {language.questionInput.answerTextFieldLabel}
                value={answer}
                onChange={(e) => handleInputValue(e.target.value)}
                error={error}
                helperText={error ? `Answer must start with current letter: ${bubble.letter}` : ""}
            ></TextField>
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
            > 
                {answer == "" ? language.questionHolder.pass : language.questionHolder.answer}
            </Button>
        </Box>
    )
}

export default QuestionInput;