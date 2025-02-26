import React, { useEffect, useState } from "react";
import BubbleChain from "../components/BubbleChain";
import Timer from "../components/Timer";
import QuestionHolder from "../components/QuestionHolder"
import BubbleModel from "../models/BubbleModel";
import BubbleState from "../enums/BubbleState";
import QuestionInput from "../components/QuestionInput";

function MainGameLayout() {
    
    const [bubbles, setBubbles] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);

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
        if (answer == "") {
            state = BubbleState.BYPASSED;
        } else if (answer == bubbles?.[questionIndex].answer) {
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
    };

    const calculateNewIndex = () => {
        const isGameFinished = checkIfGameFinished();
        if (isGameFinished) {
            const results = getResults();  
            alert(`Game is Finished! Correct: ${results.correct} Wrong: ${results.wrong} Pass: ${results.pass}`); // TODO: Game End Screen: Score, all answers etc..
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
    };

    const getResults = () => {
        let correct = 0;
        let wrong = 0;
        let pass = 0;
        bubbles.forEach((bubble) => {
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
    
    return (
        <>
            <Timer initialSeconds={60 * 5}></Timer>  {/* TODO: Game End Screen when timer is up. */} 
            <BubbleChain
                bubbles={bubbles}
                questionIndex={questionIndex}
            >
            </BubbleChain>
            <QuestionHolder
                bubble={bubbles?.[questionIndex]}
            >
            </QuestionHolder>
            <QuestionInput
                handleAnswer={handleAnswer}
            >
            </QuestionInput>
            {/*  Opponent Bubble  */}
        </>
    );
}

export default MainGameLayout;
