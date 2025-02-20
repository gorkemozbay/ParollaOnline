import { Box } from "@mui/material";
import Bubble from "./Bubble";
import { useState, useEffect } from "react";
import BubbleState from "../enums/BubbleState";
import BubbleModel from "../models/BubbleModel";

function BubbleChain({ currentIndex, bubbleState }) {
  const [radius, setRadius] = useState(200); // Default radius
  const [start, setStart] = useState(true);
  const totalBubbles = 28;
  const angleStep = (2 * Math.PI) / totalBubbles;
  const bubbleSize = 60;

  const generateBubbles = () => {
    return Array(totalBubbles)
      .fill(null)
      .map((_, index) => new BubbleModel(index));
  };

  const [bubbles, setBubbles] = useState(generateBubbles);

  // Dynamically update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      const minSize = Math.min(window.innerWidth, window.innerHeight);
      setRadius(minSize / 2.3); // Adjust radius dynamically
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

    console.log("Index: ", currentIndex);
    setBubbles((prevBubbles) => {
      const newBubbles = [...prevBubbles];
      console.log((currentIndex - 1 + 28) % 28);
      newBubbles[(currentIndex - 1 + 28) % 28].bubbleState = bubbleState;
      return newBubbles;
    });
  }, [currentIndex]);

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
          var angle = index * angleStep - Math.PI / 2; //to take the first bubble top middle
          const x = radius + radius * Math.cos(angle) - bubbleSize / 2; // Center bubbles
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
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default BubbleChain;
