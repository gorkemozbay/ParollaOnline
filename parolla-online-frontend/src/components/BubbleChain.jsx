import { Box } from "@mui/material";
import Bubble from "./Bubble";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BubbleModel from "../models/BubbleModel";


const totalBubbles = 28;
const angleStep = (2 * Math.PI) / totalBubbles;
const bubbleSize = 60; // TODO: bunlar config gibi bi yere

function BubbleChain({ bubbleState }) {
    const [radius, setRadius] = useState(200);
    const [start, setStart] = useState(true);

    const questionIndex = useSelector((state) => state.question.questionIndex);

    const generateBubbles = () => {
        return Array(totalBubbles)
        .fill(null)
        .map((_, index) => new BubbleModel(index));
    };
    const [bubbles, setBubbles] = useState(generateBubbles);


    useEffect(() => {
        const updateRadius = () => {
            const minSize = Math.min(window.innerWidth, window.innerHeight);
            setRadius(minSize / 2.3);
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        
        return () => window.removeEventListener("resize", updateRadius);
    
    }, []);

    useEffect(() => {
        if (start) {
            setStart(false);
            return;
        }

        setBubbles((prevBubbles) => {
            const newBubbles = [...prevBubbles];
            newBubbles[(questionIndex - 1 + 28) % 28].bubbleState = bubbleState;
            return newBubbles;
        });
    }, [questionIndex]);

    return (
        <Box
            sx={{
                position: "fixed", // Prevents scrolling
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100vw",
                height: "100vh",
                overflow: "hidden", // Prevents scrolling
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                position: "relative",
                width: `${2 * radius}px`,
                height: `${2 * radius}px`,
                }}
            >
                {bubbles.map((bubble, index) => {
                    var angle = index * angleStep - Math.PI / 2; 
                    const x = radius + radius * Math.cos(angle) - bubbleSize / 2; 
                    const y = radius + radius * Math.sin(angle) - bubbleSize / 2;
                    return (
                        <Box
                            key={index}
                            sx={{
                                position: "absolute",
                                left: `${x}px`,
                                top: `${y}px`,
                            }}
                        >
                            <Bubble
                                letter={bubble.letter}
                                size={bubbleSize}
                                bubbleState={bubble.bubbleState}
                            >
                            </Bubble>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default BubbleChain;
