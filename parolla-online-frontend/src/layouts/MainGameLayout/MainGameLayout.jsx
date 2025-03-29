import React, { useEffect, useState, useRef } from "react";
import BubbleChain from "../../components/game/BubbleChain";
import Timer from "../../components/game/Timer";
import QuestionHolder from "../../components/game/QuestionHolder"
import QuestionInput from "../../components/game/QuestionInput";
import EndCard from "../../components/game/EndCard";
import StartCard from "../../components/game/StartCard";
import BubbleModel from "../../models/BubbleModel";
import BubbleState from "../../enums/BubbleState";


function MainGameLayout() {
    
    const [bubbles, setBubbles] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    
    const [isEndingPanelVisible, setIsEndingPanelVisible] = useState(false);
    const [isStartPanelVisible, setIsStartPanelVisible] = useState(true);

    const timerRef = useRef();
    const startCardRef = useRef();

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
            if (answer == "" || answer == "pass") {
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

    const startGame = () => {
        setIsStartPanelVisible(false);
        setIsTimerRunning(true);
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
        startCardRef.current.resetTimer();
        setIsStartPanelVisible(true);
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
            <StartCard
                ref={startCardRef}
                isOpen={isStartPanelVisible}
                handleClose={startGame}
            >
            </StartCard>
            <EndCard
                isOpen={isEndingPanelVisible}
                bubbles={bubbles}
                handlePlayAgain={handlePlayAgain}
            ></EndCard>
            {/*  Opponent Bubble  */}
        </>
    );
}

export default MainGameLayout;
