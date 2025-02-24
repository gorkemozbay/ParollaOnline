import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import QuestionInput from  "../components/QuestionInput";
import languageENG from '../languageENG.json';
import languageTR from '../languageTR.json';
import { useSelector } from "react-redux";

function QuestionHolder( {question, handleAnswer, handlePass} ) {

    const languageChoice = useSelector((state) => state.language.language);
    const language = languageChoice === "TR" ? languageTR : languageENG;
    
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
                {question}    
            </Typography>
            <QuestionInput handleAnswer={handleAnswer} />
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{marginTop: 2}}>
                <Button
                    variant="contained"
                    sx={{ 
                        width: 150, 
                        backgroundColor: "black", 
                        marginTop: 5
                    }}
                    onClick={() => handlePass()}
                > {language.questionHolder.pass}
                </Button>
                <Button
                    variant="contained"
                    sx={{ 
                        width: 150, 
                        backgroundColor: "black", 
                        marginTop: 5
                    }}
                    onClick={() => handleAnswer()}
                > {language.questionHolder.answer}
                </Button>
            </Stack>

        </Box>

    )
}

export default QuestionHolder;