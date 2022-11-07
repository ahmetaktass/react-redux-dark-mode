import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../slice/counterSlice'
import '../styles/app.scss'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <div className="hero">
      <h1> {count} </h1>
      <button className="btn outline" onClick={handleIncrement}>
        +1
      </button>
      <button className="btn outline " onClick={handleDecrement}>
        -1
      </button>
      <h1>React Redux Dark Mode </h1>
      <h2> Counter App</h2>
    </div>
  )
}

export default Counter
