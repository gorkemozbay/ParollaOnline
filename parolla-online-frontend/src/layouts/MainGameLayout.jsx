import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BubbleChain from "../components/BubbleChain";
import Timer from "../components/Timer";
import QuestionHolder from "../components/QuestionHolder";
import BubbleState from "../enums/BubbleState";
import { incrementQuestionIndex } from "../redux/questionSlice";

const turkishAlphabet = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "İ",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ö",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
];

function MainGameLayout() {
    
    const [questions, setQuestions] = useState();
    const [bubbleState, setBubbleState] = useState(BubbleState.BYPASSED);
    
    const questionIndex = useSelector((state) => state.question.questionIndex);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/data/dummy_questions.json")
        .then((response) => response.json())
        .then((data) => {
            setQuestions(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const handleAnswer = () => {
        dispatch(incrementQuestionIndex());
        setBubbleState(BubbleState.CORRECT); // TODO: handle correct and wrong answers
    };

    const handlePass = () => {
        dispatch(incrementQuestionIndex());
        setBubbleState(BubbleState.BYPASSED);
    };

    return (
        <>
            <Timer initialSeconds={20}></Timer>
            <BubbleChain
                bubbleState={bubbleState}
            ></BubbleChain>
            <QuestionHolder
                question={questions?.[turkishAlphabet[questionIndex]][0].soru}
                handleAnswer={handleAnswer}
                handlePass={handlePass}
            ></QuestionHolder>
            {/*  Opponent Bubble  */}
            {/*  Answer  */}
        </>
    );
}

export default MainGameLayout;
