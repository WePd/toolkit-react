import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// 同步
export const counterSlice = createSlice({
  //命名空间， name值会作为action.type的前缀
  name: "counter",
  //初始化状态数据
  initialState,
  //定义reducer更新状态函数，定义的函数名会作为组件中的dispatch的函数名使用
  reducers: {
    increment: (state) => {
      //数据不可改变，但是现在可以直接改变
      //内置了immutable插件
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

//导出action函数
export const { increment, decrement } = counterSlice.actions

//导出reducer,创建store
export default counterSlice.reducer
