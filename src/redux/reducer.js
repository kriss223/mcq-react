import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  score: 0,
  userName: ""
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state) => {
          state.score += 1
      },
      resetScore: (state, action) => {
        state.score = action.payload
      },
      changeName: (state, action) => {
          state.userName = action.payload
        },
        incrementByAmount: (state, action) => {
          state.score += action.payload
        },
      },
})

export const { increment, changeName, incrementByAmount, resetScore } = scoreSlice.actions

export default scoreSlice.reducer