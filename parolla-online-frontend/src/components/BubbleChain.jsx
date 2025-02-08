import { Box } from "@mui/material";
import Bubble from "./Bubble";
import { useState } from "react";
import BubbleState from "../enums/BubbleState";
import { Button } from "@mui/material";
import BubbleModel from "../models/BubbleModel";
import { useEffect } from "react";

function BubbleChain() {
  const generateBubbles = () => {
    return Array(28)
      .fill(null)
      .map((_, index) => new BubbleModel(index));
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bubbles, setBubbles] = useState(generateBubbles);

  useEffect(() => {
    const interval  = setInterval(() => {
        setCurrentIndex((prevIndex) => {
            //console.log("Current Index: ", prevIndex);
            const newIndex = (prevIndex + 1)
            return newIndex;
        })
    }, 1000);



  }, []);

  useEffect(() => {
    setBubbles((prevBubbles) => {
        const newBubbles = [...prevBubbles];
        newBubbles[currentIndex].bubbleState = BubbleState.PASS; 
        console.log("Current Index: ", currentIndex);
        return newBubbles;
      });
  }, [currentIndex])

  const updateCurrentIndex = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          letter={bubble.letter}
          size={100}
          bubbleState={bubble.bubbleState}
        />
      ))}
    </Box>
  );
}

export default BubbleChain;
