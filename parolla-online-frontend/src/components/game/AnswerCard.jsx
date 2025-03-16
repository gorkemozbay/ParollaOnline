
function AnswerCard( {isOpen, handleClose, bubble} ) {

    return (
        ( isOpen &&
            <div
                style={{
                    position: "fixed",
                    width: "30vw",
                    height: "30vh",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "30px",
                    border: "3px solid black",
                    padding: "20px",
                    boxShadow: "0px 4px 40px rgba(0,0,0,0.4)",
                }}
            >
                <button
                    style={{
                        position: "absolute",
                        top: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        right: "30px",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: "2px solid black",
                        fontWeight: "bold",
                        padding: "15px",
                        backgroundColor: "lightgray",
                        color: "black",
                        cursor: "pointer"
                    }}
                    onClick={() => {handleClose()}}
                >✕</button>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",

                    }}
                >
                    <h1>{bubble.letter}</h1>
                    <p><strong>Question: </strong>{bubble.question}</p>
                    <p><strong>Answer: </strong>{bubble.answer}</p>
                </div>
            </div>
        )
    )
}

export default AnswerCard;