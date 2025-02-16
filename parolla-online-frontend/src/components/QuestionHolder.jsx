import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import QuestionInput from  "../components/QuestionInput";
import languageENG from '../languageENG.json';
import languageTR from '../languageTR.json';
import { useSelector } from "react-redux";

const turkishAlphabet = [
    "A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", 
    "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"
]

function QuestionHolder() {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    
    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState();
    const questionIndex = useRef(0);
    
    useEffect(() => {
        fetch("/data/dummy_questions.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuestions(data);
                setCurrentQuestion(data[turkishAlphabet[questionIndex.current]][0].soru);
            })
            .catch(error => console.log(error));
    }, []);

    const handleNextClick = () => {
        questionIndex.current = (questionIndex.current + 1) % 28;
        setCurrentQuestion(questions[turkishAlphabet[questionIndex.current]][0].soru);
    }

    const handlePreviousClick = () => {
        questionIndex.current = (questionIndex.current - 1) % 28;
        setCurrentQuestion(questions[turkishAlphabet[questionIndex.current]][0].soru);
    }

    return (
        <Box
            sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                color: "black",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "35%",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    marginBottom: 2
                }}
            > 
                {currentQuestion}    
            </Typography>
            <QuestionInput />
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{marginTop: 2}}>
                <Button
                    variant="contained"
                    sx={{ 
                        width: 150, 
                        backgroundColor: "black", 
                        marginTop: 5
                    }}
                    onClick={() => handleNextClick()}
                > {language.questionHolder.pass}
                </Button>
                <Button
                    variant="contained"
                    sx={{ 
                        width: 150, 
                        backgroundColor: "black", 
                        marginTop: 5
                    }}
                    onClick={() => handleNextClick()}
                > {language.questionHolder.answer}
                </Button>
            </Stack>

        </Box>

    )
}

export default QuestionHolder;