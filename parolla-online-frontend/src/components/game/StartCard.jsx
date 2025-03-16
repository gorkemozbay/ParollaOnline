
import { useState, useEffect } from "react";
import { useImperativeHandle, forwardRef } from 'react';

const StartCard = forwardRef(( { isOpen, handleClose }, ref ) => {

    const [timeLeft, setTimeLeft] = useState(3); 

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(0, prevTime -1))
        }, 1000)

        return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        if (timeLeft === 0) {
            handleClose()
        }
    }, [timeLeft])

    useImperativeHandle(ref, () => ({
        resetTimer: () => {
            setTimeLeft(3);
        }
    }));

    return (
        ( isOpen &&
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundColor: "hsla(0, 0.00%, 100.00%, 0.4)",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "30vw",
                        height: "30vh",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "30px",
                        border: "5px solid black",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                        padding: "10px 0px 0px 0px"
                    }}
                >
                    <h1>{timeLeft}</h1>
                    <div className="spinner"></div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            width: "100%",
                            marginLeft: "50px"
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "Chevy, cursive",
                                margin: "20px 0px 0px 0px"
                            }}
                        >Hint</h2>
                        <p
                            style={{
                                fontFamily: "Chevy, cursive",
                                fontSize: "1em",
                                margin: "0px"
                            }}
                        > 
                            You can end the game early by typing "bitir" and send.
                        </p>
                    </div>
                </div>
            </div>
        )
    )
});

export default StartCard;