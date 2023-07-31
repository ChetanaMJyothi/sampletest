import React, { useState } from 'react'
import PollForm from './PollForm'
const PollCreate = () => {
  const [isDisplayForm, setIsDisplayForm]=useState(false);
  const createHandler=()=>{
    setIsDisplayForm(!isDisplayForm);
  }
  return (
    <div>
      <h1>Create Poll</h1>
<button type='button' onClick={createHandler}>Create Poll</button>
{isDisplayForm && <PollForm onClose={createHandler}/>}
    </div>
  )
}

export default PollCreate
