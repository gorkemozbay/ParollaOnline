import React, { useState, useEffect } from 'react';
import { useImperativeHandle, forwardRef } from 'react';
import { Typography } from '@mui/material';

const Timer = forwardRef(( {initialSeconds, handleTimerExpire, isRunning}, ref ) => {

    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (!isRunning) return;
        // Write remaning val to redux

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => Math.max(0, prevSeconds - 1));
        }, 1000);

        return () => clearInterval(interval);

    }, [isRunning])


    useEffect(() => {
        if (seconds === 0) {
            handleTimerExpire();
        }
    }, [seconds])

    useImperativeHandle(ref, () => ({
        resetTimer: () => {
            setSeconds(initialSeconds);
        }
    }));

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
});

export default Timer;