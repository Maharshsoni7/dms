import { createSlice } from '@reduxjs/toolkit'
import DataStore from "./dataStore";
const initialState = DataStore;

export const dataSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = dataSlice.actions

export const ContentAction = {
    increment, decrement, incrementByAmount
};


export default dataSlice.reducer