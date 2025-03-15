import { Box } from "@mui/material";
import Bubble from "./Bubble";
import { useState, useEffect } from "react";



const totalBubbles = 28;
const angleStep = (2 * Math.PI) / totalBubbles;
const bubbleSize = 60; // TODO: bunlar config gibi bi yere

function BubbleChain({ bubbles, questionIndex }) {

    const [radius, setRadius] = useState(200);

    useEffect(() => {
        const updateRadius = () => {
            const minSize = Math.min(window.innerWidth, window.innerHeight);
            setRadius(minSize / 2.3);
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        
        return () => window.removeEventListener("resize", updateRadius);
    
    }, []);

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
                {bubbles?.map((bubble, index) => {
                    const bubbleAdjustedSize = bubbleSize * (bubble.index == questionIndex ? 1.4 : 1.1);
                    var angle = index * angleStep - Math.PI / 2; 
                    const x = radius + radius * Math.cos(angle) - bubbleAdjustedSize / 2; 
                    const y = radius + radius * Math.sin(angle) - bubbleAdjustedSize / 2;
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
                                size={bubbleAdjustedSize}
                                bubbleState={bubble.bubbleState}
                                isCurrentBubble={bubble.index == questionIndex}
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
