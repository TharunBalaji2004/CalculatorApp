
import { useState } from 'react';
import './App.css';
import './styles/main.css';

function App() {

  const [first,setFirst] = useState(0);
  const [second,setSecond] = useState(0);
  const [ans,setAns] = useState(0);

  const appName = 'Calculator App 🧮';

  const firstinput = (f)=>{
    setFirst(f.target.value);
  };

  const secondinput = (s)=>{
    setSecond(s.target.value);
  };

  const plus =()=>{
    setAns(parseInt(first)+parseInt(second));
  }
  const minus =()=>{
    setAns(first-second);
  }
  const multiply =()=>{
    setAns(first*second);
  }
  const divide =()=>{
    setAns(first/second);
  }

  return (
    <div class="container">
      <h1>{appName}</h1>
      <div class="child">
        <div class="child1">
          <span><h3>Enter First Number:</h3></span>
          <input onChange={firstinput}/>
        </div>
        <div class="child2">
          <span><h3>Enter Second Number:</h3></span>
          <input onChange={secondinput}/>
        </div>
        <div class="child3">
          <button onClick={plus}>➕</button>
          &nbsp;&nbsp;
          <button onClick={minus}>➖</button>
          &nbsp;&nbsp;
          <button onClick={multiply}>❌</button>
          &nbsp;&nbsp;
          <button onClick={divide}>➗</button>
        </div>
        <div class="child4">
          <span><h2>ANSWER: {ans}</h2></span>
        </div>

      </div>
    </div>
  );
}

export default App;
