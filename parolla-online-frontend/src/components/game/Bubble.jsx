


function Bubble({ letter, size, bubbleState } ) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                border: "4px solid black",
                backgroundColor: bubbleState.color,
                color: "black",
                fontFamily: "Chevy, cursive",
                fontWeight: "bold",
                fontSize: size/3,   
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.75)",
            }}
        >
            {letter}
        </div>
    )
}

export default Bubble;
