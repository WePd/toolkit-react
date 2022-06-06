import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// 同步
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncIncrem.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
})

// 异步
export const asyncIncrem = createAsyncThunk<number>("asyncAdd", async () => {
  const res = await new Promise<number>((r) => {
    setTimeout(() => {
      r(2)
    }, 3000)
  })
  return res
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
