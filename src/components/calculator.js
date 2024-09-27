import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { evaluate } from '../store/resultSlice';
import Result from './Result';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const symbol = ["+", "-", "*", "/", "."]

  const handleClick = (value) => {
    setInputValue(value === "AC" ? "" : value === "DE" ? inputValue.slice(0, -1) : symbol.includes(inputValue.slice(-1)) && symbol.includes(value) ? inputValue : inputValue + value)
    if(value === "AC"){
      dispatch(evaluate(0))
    }
  }

  const handleCalculate = () => {
    if(inputValue){
      dispatch(evaluate(inputValue))
    }
  }

  return (
    <div style={{margin: '0 auto', width: '450px'}}>
      <h1>Calculator</h1>
      <p>{inputValue || '0'}</p>
      <table>
        <tbody>
          <tr>
            <td><button type="button" class="btn btn-danger" onClick={() => handleClick('AC')}>AC</button></td>
            <td><button type="button" class="btn btn-warning" onClick={() => handleClick('DE')}>DE</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('.')}>.</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('/')}>/</button></td>
          </tr>

          <tr>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('7')}>7</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('8')}>8</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('9')}>9</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('*')}>*</button></td>
          </tr>

          <tr>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('4')}>4</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('5')}>5</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('6')}>6</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('-')}>-</button></td>
          </tr>

          <tr>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('1')}>1</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('2')}>2</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('3')}>3</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('+')}>+</button></td>
          </tr>

          <tr>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('0')}>0</button></td>
            <td><button type="button" class="btn btn-light" onClick={() => handleClick('.')}>.</button></td>
            <td><button type="button" class="btn btn-dark" onClick={handleCalculate}>=</button></td>
          </tr>
        </tbody>
      </table>

      <Result />
    </div>
  )
}

export default Calculator