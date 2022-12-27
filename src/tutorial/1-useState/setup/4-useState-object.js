import React, { useState } from 'react';

const UseStateObject = () => {
  const[person,setPerson] = useState({name:'luffy',
  age:24,message:'hello mugiwara'});

  const [name,setName] = useState('luffy')
  const [age,setAge] = useState(24)
  const [message,setMessage] = useState('hou hou')
  
  const changeMessage =() =>{
    // setPerson ({...person, message:'hello world'});
    setMessage('hello mugiwara')
  }

  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change</button>
  </>
};

export default UseStateObject;
