import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
function AddCity() {

    const [text,setText]=useState({
        cityname:"",
        country:"",
        population:""
    })

    const [country,setCountry]=useState([])
   
    useEffect(()=>{
        axios.get("https://populationserver.herokuapp.com/add-country").then(res=>{
            setCountry(res.data)
        })
    },[])
    const handleChange=(e)=>{
        const {id,value}=e.target
        setText({
            ...text,
            [id]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://populationserver.herokuapp.com/add-city",text).then(res=>{
            
            setText({
                cityname:"",
                country:"",
               population:""
            })
            alert("City Added")
        })
    }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <Input type="text" placeholder='City Name' value={text.cityname} onChange={handleChange} id='cityname' required/>
    <br />
        <Select value={text.countryname} onChange={handleChange} id='country' required>
            <option value="">Select Country</option>
            {country.map(item=>{
                return(
                    <option value={item.name}>{item.name}</option>
                )
            })}

        </Select>
    <br />
    
    <Input type="number" placeholder='Population' value={text.population} onChange={handleChange} id='population' required />
    <br />
    
    
        <Submit type="submit" />
    </form>
    </>
  )
}

export default AddCity


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

const Input=styled.input`
 
 width: 30%;
 margin-bottom:15px;
 border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    font-size: 15px;

`
const Select=styled.select`
 
 width: 30%;
 margin-bottom:15px;
 border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    height: 30px;
    font-size: 15px;

`