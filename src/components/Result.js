import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const result = useSelector((state) => state.result.resultValue)

  return (
    <div>
        <h2>RESULT COMPONENT</h2>
        <h4>{result}</h4>
    </div>

  )
}

export default Result