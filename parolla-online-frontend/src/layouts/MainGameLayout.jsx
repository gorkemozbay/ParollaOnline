import React, { useEffect, useState, useRef } from "react";
import BubbleChain from "../components/BubbleChain";
import Timer from "../components/Timer";
import QuestionHolder from "../components/QuestionHolder";
import BubbleState from "../enums/BubbleState";

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
  const [currentQuestion, setCurrentQuestion] = useState();
  //const questionIndex = useRef(0);
  const [questionIndex, setquestionIndex] = useState(0);
  const [bubbleState, setBubbleState] = useState(BubbleState.BYPASSED);
  useEffect(() => {
    fetch("/data/dummy_questions.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
        setCurrentQuestion(data[turkishAlphabet[questionIndex]][0].soru);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAnswer = () => {
    moveToNextQuestion();
    setBubbleState(BubbleState.CORRECT)
  };

  const handlePass = () => {
    moveToNextQuestion();
    setBubbleState(BubbleState.BYPASSED)
  };

  const moveToNextQuestion = () => {
    //questionIndex.current = (questionIndex.current + 1) % 28;
    var newIndex = (questionIndex + 1) % 28;
    setquestionIndex(newIndex);
    setCurrentQuestion(questions[turkishAlphabet[newIndex]][0].soru);
  };

  return (
    <>
      <Timer initialSeconds={20}></Timer>
      <BubbleChain
        currentIndex={questionIndex}    
        bubbleState={bubbleState}
      ></BubbleChain>
      <QuestionHolder
        question={currentQuestion}
        handleAnswer={handleAnswer}
        handlePass={handlePass}
      ></QuestionHolder>
      {/*  Opponent Bubble  */}
      {/*  Answer  */}
    </>
  );
}

export default MainGameLayout;
