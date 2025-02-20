import React, { useEffect, useState } from 'react';


const turkishAlphabet = [
    "A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", 
    "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"
]

function GameManager() {

    const [questions, setQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState();
    const questionIndex = useRef(0);

    useEffect(() => {
        fetch("/data/dummy_questions.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuestions(data);
                setCurrentQuestion(data[turkishAlphabet[questionIndex.current]][0].soru);
            })
            .catch(error => console.log(error));
    }, []);

    const handleAnswer = () => {
        questionIndex.current = (questionIndex.current + 1) % 28;
        setCurrentQuestion(questions[turkishAlphabet[questionIndex.current]][0].soru);
    }

    const handlePass = () => {
        
    }

    return (
        <></>
    )
}

export default GameManager;