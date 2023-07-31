import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Main = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const optionHandler = (e) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value);
        navigate(e.target.value)
    }
  return (
    <div>
       <select value={selectedOption} onChange={optionHandler} >
                <option value="">--Select--</option>
                <option value="/create">Create Poll</option>
                <option value="/list">Get Active Poll</option>
                <option value="/result">Get Live results</option>
            </select>
            <Outlet/>
    </div>
  )
}

export default Main
