import { Box } from "@mui/material";

function Bubble({letter, size, bubbleState} ) {
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
                boxShadow: "0px 0px 10px 0px rgba(182, 13, 156, 0.75)"
            }}
        >
            {letter}
        </Box>
    )
}

export default Bubble;
