import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    question: "",
    questionIndex: 0,
    answer: "", 
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setQuestion: (state, action) => {
            state.question = action.payload;
        },
        incrementQuestionIndex: (state) => {
            state.questionIndex = (state.questionIndex + 1) % 28; // TODO: dynamic based on lang.
        },
        setAnswer: (state, action) => {
            state.answer = action.payload;
        }
    }
})

export const { setQuestion, incrementQuestionIndex, setAnswer } = questionSlice.actions;
export default questionSlice.reducer;