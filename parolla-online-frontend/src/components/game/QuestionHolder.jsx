import React from 'react';

function QuestionHolder( { bubble } ) {
    
    return (
        <div
            style={{
                position: "fixed",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "30%",
                color: "black",
                fontSize: "1.75em",
                fontFamily: "Chevy, cursive",
                fontWeight: "bold",
                textShadow: "0px 0px 5px rgba(0, 0, 0, 0.10)",
            }}
        >
            {bubble?.question}
        </div>
    )
}

export default QuestionHolder;