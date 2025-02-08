import { height } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Timer() {
    const timerInSeconds = 10;
    const [seconds, setSeconds] = useState(timerInSeconds);
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        let interval;
        if (isTimerActive && seconds > 0) {
            interval = setInterval(() => { //javascript's own method that runs in intervals
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }
        else if (seconds === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isTimerActive, seconds]);


    const toggleTimer = () => {
        setIsTimerActive(!isTimerActive);
    }

    const resetTimer = () => {
        setIsTimerActive(false);
        setSeconds(timerInSeconds);
    }

    // Format time as mm:ss
    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>{formatTime(seconds)}</h1>
            {/*<Button variant="contained" onClick={toggleTimer}>
                {isTimerActive ? 'Pause' : 'Start'}
            </Button>
            <Button variant="contained" onClick={resetTimer}>
                Reset
            </Button>*/}
        </div>
    );
};
export default Timer;