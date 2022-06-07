import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { AppDispatch, RootState } from "./store"
import { increment, decrement, asyncIncrem } from "./store/reducer/countReducer"

function App() {
  const { value } = useSelector((state: RootState) => state.counter)
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="App">
      <h2>{value}</h2>
      <hr />
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(asyncIncrem())}>异步+2</button>
    </div>
  )
}

export default App
