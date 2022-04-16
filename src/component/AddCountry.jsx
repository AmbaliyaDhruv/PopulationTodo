import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
function AddCountry() {

    const [text,setText]=useState({
        name:""
    })

    const handleChange=(e)=>{
        const {id,value}=e.target
        setText({
            ...text,
            [id]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/add-country",text).then(res=>{
            
            setText({
                name:""
            })
            alert("Country Added")
        })
    }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <Input type="text" placeholder='Country Name' value={text.name} onChange={handleChange} id='name' />
    <br />
        <Submit type="submit" />
    </form>
    </>
  )
}

export default AddCountry


const Input=styled.input`
 
 width: 30%;
 margin-bottom:15px;
 border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    font-size: 15px;

`

const Submit=styled.input`
background-color: white;
border: 2px solid black;
width: 10%;
height: 30px;
border-radius: 5px;
font-weight: 600;

&:hover{
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
}

`