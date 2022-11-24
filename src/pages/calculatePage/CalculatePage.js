import {types} from "../../redux/types";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useState} from "react";

const CalculatePage = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.result)
  //я специально в useState указал строку, так надо
  const [number1,setNumber1] = useState('');
  const [number2,setNumber2] = useState('');
  const valid = () => {
    if (number1 && number2) return true;
    alert('Заполните все поля правильно!');
  }
  const plus = () => {
    if (valid()) dispatch({
      type: types.PLUS,
      numbers:{
        one:+number1,
        two:+number2,
      }
    })
  }
  const minus = () => {
    if (valid()) dispatch({
      type: types.MINUS,
      numbers:{
        one:+number1,
        two:+number2,
      }
    })
  }
  const multiply = () => {
    if (valid()) dispatch({
      type: types.MULTIPLY,
      numbers:{
        one:+number1,
        two:+number2,
      }
    })
  }
  const divide = () => {
    if(+number2 === 0) alert('НА 0 ДЕЛИТЬ НЕЛЬЗЯ!')
    if (valid()) dispatch({
      type: types.DIVIDE,
      numbers:{
        one:+number1,
        two:+number2,
      }
    })
  }
  return(
    <>
      <input onChange={e => setNumber1(e.target.value)} value={number1} type="number" placeholder='number 1'/>
      <input onChange={e => setNumber2(e.target.value)} value={number2} type="number" placeholder='number 2'/>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>%</button>
      </div>
      <p>result: <span>{result}</span></p>
    </>
  )
}

export default CalculatePage;