import { Box } from "@mui/material";


function Bubble({letter, size, bubbleState, isCurrentBubble} ) {
    return (
        <Box
            sx={{
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: bubbleState.color,
                color: "black",
                fontWeight: "bold",
                fontSize: size/3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 0px 10px 0px rgba(182, 13, 156, 0.75)",
                animation: isCurrentBubble ? "shadowPulse 2s infinite ease-in-out" : "none",
                "@keyframes shadowPulse": {
                    "0%": { boxShadow: `0px 0px 5px 0px rgba(182, 13, 156, 0.50)` },
                    "50%": { boxShadow: `0px 0px 20px 5px rgba(182, 13, 156, 0.75)` },
                    "100%": { boxShadow: `0px 0px 5px 0px rgba(182, 13, 156, 0.50)` },
                },
            }}
        >
            {letter}
        </Box>
    )
}

export default Bubble;
