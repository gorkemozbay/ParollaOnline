import { createSlice } from "@reduxjs/toolkit";
import languageENG from "../languageENG";
import languageTR from "../languageTR";

const getLanguageData = (choice) => (choice === "TR" ? languageTR : languageENG);

const initialState = {
    languageData: languageENG,
    languageCode: "ENG"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.languageData = getLanguageData(action.payload);
            state.languageCode = action.payload;
        }
    }
})

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;