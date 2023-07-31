import React, { useRef, useState } from 'react'

const PollForm = (props) => {
 const [inputTxt, setInputTxt] = useState('');
/*  const inputOptionHandler = (e) => {
    console.log(e.target.value)
    setInputTxt(e.target.value);
} */
    const [optionsArr, setOptionsArr] = useState([]);
    const questionRef = useRef();
    
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const closeHandler = () => {
        props.onClose();
    }
    const addOptionHandler =(e) =>{
        setOptionsArr([...optionsArr, <input  value={inputTxt} type="text" name= 'options'  onChange={e => setInputTxt(e.target.value)} />])
    }
    
    return (
        <div>
            <button type="button" onClick={closeHandler}>Close window</button>
            <h3>Create Poll</h3>
            <form onSubmit={submitHandler}>
                <label>Question</label>
                <input type="text" placeholder='Ask question' ref={questionRef} />
                <label>Option</label>
               {/*  <input value={inputTxt} type="text" name= 'options'  onChange={e => setInputTxt(e.target.value)}/> */}
                {optionsArr.map((item)=> {return item; })}
                <button type="submit">Send Poll</button>
            </form>
            <button type="button" onClick={addOptionHandler}>Add Option +</button>
        </div>
    )
}

export default PollForm
