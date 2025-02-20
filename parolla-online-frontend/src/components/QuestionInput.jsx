import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import languageENG from '../languageENG.json';
import languageTR from '../languageTR.json';
import { useSelector } from "react-redux";

function QuestionInput({handleAnswer}) {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    const [answer, setAnswer] = useState("");

    const handleInputValue = (value) => {
        //setAnswer()
        handleAnswer(value)
    }

    return (<Box sx={{ width: "100%", textAlign: "center", marginTop: 2 }}>
        <TextField
            label= {language.questionInput.answerTextFieldLabel}
            variant="outlined"
            value={answer}
            onChange={(e) => handleInputValue(e.target.value)}
            sx={{
                width: "80%", // Adjust width as needed
                maxWidth: "400px",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "black" }, // Default border color
                    "&:hover fieldset": { borderColor: "black" }, // Hover effect
                    "&.Mui-focused fieldset": { borderColor: "black" }, // Focused color
                },
                "& .MuiInputLabel-root": { color:  "black" }, // Label color
                "& .MuiInputLabel-root.Mui-focused": { color: "black" }, // Label color when focused

            }}
        />
    </Box>)
}

export default QuestionInput;