import React, { useState, useEffect } from 'react';
import { useImperativeHandle, forwardRef } from 'react';

const Timer = forwardRef(( {initialSeconds, handleTimerExpire, isRunning}, ref ) => {

    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (!isRunning) return;
        // Write remaning val to redux when stop

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
        <div
            style={{
                position: "fixed",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontSize: "2em",
                fontFamily: "Chevy, cursive",
                fontWeight: "bold",
                textShadow: "0px 0px 5px rgba(0, 0, 0, 0.10)",
                color: seconds <= 10 ? "red" : "black",
            }}
        >{formatTime(seconds)}
        </div>
    )
});

export default Timer;