import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function Timer( {initialSeconds, handleTimer} ) {

    const [seconds, setSeconds] = useState(initialSeconds);
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        
        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const updatedTime = Math.max(0, initialSeconds - Math.floor(elapsedTime / 1000));
            setSeconds(updatedTime);
        }, 100);

        return () => clearInterval(interval);

    }, [startTime, initialSeconds])


    useEffect(() => {
        if (seconds === 0) {
            handleTimer();
        }
    }, [seconds])

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <Typography
            variant="h2"
            sx={{
                position: "absolute",
                bottom: "50px",
                left: "50px",
                color: seconds <= 10 ? "red" : "black",
                textShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)"
            }}
        >{formatTime(seconds)}</Typography>
    )
};

export default Timer;