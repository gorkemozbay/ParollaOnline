import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';


const turkishAlphabet = [
    "A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", 
    "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"
]

function QuestionHolder() {

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
                width: "100%",
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
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                <Button
                    variant="contained"
                    sx={{ 
                        width: 200, 
                        backgroundColor: "blue", 
                        marginTop: 5
                    }}
                    onClick={() => handleNextClick()}
                > BACK
                </Button>
                <Button
                    variant="contained"
                    sx={{ 
                        width: 200, 
                        backgroundColor: "blue", 
                        marginTop: 5
                    }}
                    onClick={() => handleNextClick()}
                > NEXT
                </Button>
            </Stack>

        </Box>

    )
}

export default QuestionHolder;