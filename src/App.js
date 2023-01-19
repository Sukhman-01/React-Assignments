import './App.css';
import Welcome from './components/Welcome.js'
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted,setSubmitState] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault()
    setName(`${inputVal}`)
    if (`${inputVal}` === '') {
      setSubmitState(false);  
    }
    else {
      setSubmitState(true);
    }
  };

  return (
    <div className="App">
      <h1 id="heading">LOGIN PAGE</h1>
      <form>
        <label>
          <label htmlFor="uname">Enter Your Name: </label><input type="text" id="uname" onChange={(event) => {
            setInputVal(event.target.value)
          }} />
        </label>
        <br />
        <br />
        <button id="btnSubmit" onClick={submitHandler}>SUBMIT</button>
        {isSubmitted && <Welcome name={name} />}
        <h2>Assignment done by Sukhman Singh 12006129</h2>
      </form>
    </div>
  );
}

export default App;
