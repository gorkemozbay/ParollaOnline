import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remainingTime: 0
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setRemainingTime: (state, action) => {
            state.remainingTime = action.payload
        }
    }

})

export const { setRemainingTime } = timerSlice.actions;
export default timerSlice.reducer;