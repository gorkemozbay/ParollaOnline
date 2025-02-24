import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice"; // TODO: naming convention
import QuestionReducer from "./questionSlice";

const store = configureStore({
    reducer: {
        language: languageReducer,
        question: QuestionReducer,
    },
});

export default store;
