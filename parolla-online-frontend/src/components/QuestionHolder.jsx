import React from 'react';
import { Typography, Box } from '@mui/material';

function QuestionHolder( {bubble } ) {
    
    return (
        <Box
            sx={{
                position: "fixed",
                top: "40%",
                left: "50%",
                color: "black",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "30%",
            }}
        >
            <Typography
                variant="h5"
            > 
                {bubble?.question}    
            </Typography>
        </Box>
    )
}

export default QuestionHolder;