

import {useState, useEffect} from 'react';
import {months as arr,textUser as user} from './test.js';
import test from './test.js';
import MyForm from './components/MyForm';
import './App.css';
import MyButton from './components/MyButton';
import loginForm from './components/loginForm/index.js';
import UserList from './components/UserList';


function App() {


  // const [count, setCount] = useState(0);

  // const changeCount = ()=>{
  //   setCount(count+1)
    
  // }


  return (
    <>
      {/* {count<=11 ? <MyButton title={'+'} handleClick={changeCount} count={count}/>:null}
      <p>{count}</p>  */}
      <div>
         {/* {count}
        <button onClick={countIncrement}>+</button>
        <button onClick={countDecrement}>-</button> 
         {
          
          count.map((item,index)=><p key={index.toString()} style={{color:item%10?'black':'red'}}>{item}</p>)
          
        } */}
  
       
      </div>
    </>
  );
}

export default App;
