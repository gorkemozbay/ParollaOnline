
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BubbleState from "../../enums/BubbleState";

function EndingPanel( {isOpen, bubbles, handlePlayAgain} ) {

    const [tabValue, setTabValue] = useState(0);
    const [results, setResults] = useState({correct: 0, wrong: 0, pass: 0});

    const remainingTime = useSelector((state) => state.timer.remainingTime);
    const navigate = useNavigate();

    const getResults = () => {
        let correct = 0;
        let wrong = 0;
        let pass = 0;
        bubbles?.forEach((bubble) => {
            if (bubble.bubbleState == BubbleState.CORRECT) {
                correct++;
            } else if (bubble.bubbleState == BubbleState.FAIL) {
                wrong++;
            } else if (bubble.bubbleState == BubbleState.BYPASSED) {
                pass++;
            }
        });
        return {correct, wrong, pass};
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`; 
    }

    useEffect(() => {
        setResults(getResults());
    }, [isOpen])

    return (
        isOpen && (
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
                    backgroundColor: "hsla(0, 0.00%, 100.00%, 0.5)",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        textAlign: "center",
                        width: "40vw",
                        height: "50vh",
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "30px",
                        border: "5px solid black",
                        padding: "0px 0px 0px 20px",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "30px",
                            marginBottom: "20px"
                        }}
                    >
                        <h2
                            style={{
                                backgroundColor: tabValue == 0 ? "#FFD65A" : "white",
                                padding: "8px",
                                borderRadius: "20px",
                                cursor: "pointer"
                            }}
                            onClick={() => setTabValue(0)}
                        >
                            Results
                        </h2>
                        <h2
                            style={{
                                backgroundColor: tabValue == 1 ? "#FFD65A" : "white",
                                padding: "8px",
                                borderRadius: "20px",
                                cursor: "pointer"
                            }}
                            onClick={() => setTabValue(1)}
                        >
                            Answer Key
                        </h2>
                    </div>
                    { tabValue == 0 &&
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "#16C47F",
                                        border: "2px solid black",
                                        margin: "0px 0px 0px 10px",

                                    }}
                                >
                                </div>
                                <h3>
                                    {results.correct} Correct 
                                </h3>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "#F93827",
                                        border: "2px solid black",
                                        margin: "0px 0px 0px 10px",

                                    }}
                                >
                                </div>
                                <h3>
                                    {results.wrong} Wrong 
                                </h3>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "#FFD65A",
                                        border: "2px solid black",
                                        margin: "0px 0px 0px 10px",

                                    }}
                                >
                                </div>
                                <h3>
                                    {results.pass} Pass 
                                </h3>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <h3
                                    style={{
                                        marginLeft: "10px"
                                    }}
                                >
                                    Remaining Time: {formatTime(remainingTime)}
                                </h3>
                            </div>
                        </div>
                    }
                    { tabValue == 1  &&  
                        <div>
                            Answer Key
                        </div>
                    }
                </div>
            </div>
        )
    );
}

export default EndingPanel;

