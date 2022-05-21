import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  score: 0,
  userName: "krishna"
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state) => {
          state.score += 1
      },
      changeName: (state, action) => {
          state.userName = action.payload
        },
        incrementByAmount: (state, action) => {
          state.score += action.payload
        },
      },
})

export const { increment, changeName, incrementByAmount } = scoreSlice.actions

export default scoreSlice.reducer