import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: "result",
    initialState: {
        resultValue: 0
    },
    reducers: {
        evaluate: (state, action) => {
            let result = eval(action?.payload).toString()
            state.resultValue = result.includes(".") ? result.slice(0, result.indexOf(".") + 5) : result
        }
    }

})

export const { evaluate } = resultSlice.actions

export default resultSlice.reducer