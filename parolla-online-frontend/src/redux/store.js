import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import timerSlice from "./timerSlice"

const store = configureStore({
    reducer: {
        language: languageReducer,
        timer: timerSlice,
    },
});

export default store;
