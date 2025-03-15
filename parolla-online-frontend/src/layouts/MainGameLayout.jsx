import React, { useEffect, useState, useRef } from "react";
import BubbleChain from "../components/game/BubbleChain";
import Timer from "../components/game/Timer";
import QuestionHolder from "../components/game/QuestionHolder"
import BubbleModel from "../models/BubbleModel";
import BubbleState from "../enums/BubbleState";
import QuestionInput from "../components/game/QuestionInput";
import EndingPanel from "../components/game/EndingPanel";


function MainGameLayout() {
    
    const [bubbles, setBubbles] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isEndingPanelVisible, setIsEndingPanelVisible] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    const timerRef = useRef();

    useEffect(() => {
        fetch("/data/dummy_questions_2.json")
        .then((response) => response.json())
        .then((questions) => {
            let questionIndex = 0;
            let newBubbles = [];
            Object.entries(questions).forEach(([key, value]) => {
                const bubble = new BubbleModel(questionIndex, key, value.question, value.answer);
                questionIndex++;
                newBubbles.push(bubble);
            });
            setBubbles(newBubbles);
        })
        .catch((error) => console.log(error));
    }, []);

    const handleAnswer = (answer) => {
        let state;
        if (answer == "bitir") {
            finishGame();
        } else {
            if (answer == "") {
                state = BubbleState.BYPASSED;
            } else if (answer.toLowerCase() == bubbles?.[questionIndex].answer.toLowerCase()) {
                state = BubbleState.CORRECT; 
            } else {
                state = BubbleState.FAIL;
            }
    
            setBubbles((prevBubbles) => {
                const newBubbles = [...prevBubbles];
                newBubbles[questionIndex].bubbleState = state;
                
                const newIndex = calculateNewIndex();
                setQuestionIndex(newIndex);    
                return newBubbles;
            })
        }
    }

    const calculateNewIndex = () => {
        const isGameFinished = checkIfGameFinished();
        if (isGameFinished) {
            finishGame();
            return questionIndex;
        }

        let newIndex = (questionIndex + 1) % 28;
        while (bubbles[newIndex].bubbleState == BubbleState.FAIL 
            || bubbles[newIndex].bubbleState == BubbleState.CORRECT) {
            newIndex = (newIndex + 1) % 28;
        }
        return newIndex
    }

    const checkIfGameFinished = () => {
        return bubbles.every((bubble) => bubble.bubbleState == BubbleState.FAIL || bubble.bubbleState == BubbleState.CORRECT);
    }

    const finishGame = () => {
        setIsEndingPanelVisible(true);
        setIsTimerRunning(false);
    }

    const handlePlayAgain = () => {
        setQuestionIndex(0);
        setIsEndingPanelVisible(false);
        setBubbles((prevBubbles) => {
            const newBubbles = [...prevBubbles];
            newBubbles.forEach((bubble) => bubble.bubbleState = BubbleState.INITIAL);
            return newBubbles;
        });
        timerRef.current.resetTimer();
        setIsTimerRunning(true);
    }
    
    return (
        <>
            <Timer
                ref={timerRef}
                initialSeconds={ 5 * 60 }
                handleTimerExpire={finishGame}
                isRunning={isTimerRunning}
            ></Timer> 
            <BubbleChain
                bubbles={bubbles}
                questionIndex={questionIndex}
            ></BubbleChain>
            <QuestionHolder
                bubble={bubbles?.[questionIndex]}
            ></QuestionHolder>
            <QuestionInput
                handleAnswer={handleAnswer}
                bubble={bubbles?.[questionIndex]}
            ></QuestionInput>
            <EndingPanel
                isOpen={isEndingPanelVisible}
                bubbles={bubbles}
                handlePlayAgain={handlePlayAgain}
            ></EndingPanel>
            {/*  Opponent Bubble          */}
        </>
    );
}

export default MainGameLayout;
