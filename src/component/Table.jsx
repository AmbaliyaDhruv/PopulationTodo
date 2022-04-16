import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
function Table() {
    const [data,setData]=useState([])


     
    const getData=()=>{
        axios.get("http://localhost:8080/add-city").then(res=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])


    const handleDelete=(id)=>{
      axios.delete(`http://localhost:8080/add-city/${id}`).then(res=>{
          getData()
      })
    }

  
  return (
      <>
      <h1>Display</h1>

      <TableOut>
            <thead>
                <Tr>
                <Th>Index</Th>
                    <Th>City Name</Th>
                    <Th>Country</Th>
                    <Th>Population</Th>

                </Tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <Tr key={item._id}>
                            <Td>{index+1}</Td>
                            <Td>{item.cityname}</Td>
                            <Td>{item.country}</Td>
                            <Td>{item.population}</Td>
                            <Td><Link to={`/edit-city/${item._id}`}>Edit</Link></Td>
                            <Td onClick={()=>{handleDelete(item._id)}}>Delete</Td>
                        </Tr>
                    )
                })}
            </tbody>
      </TableOut>

      </>
    


  )
}

export default Table

const TableOut=styled.table`
border:3px solid black;
margin: auto;
`

const Tr=styled.tr`border:1px solid black;
padding:10px;
`

const Td=styled.td
`
border:1px solid black;
padding:10px;
`

const Th=styled.th`
border:1px solid black;
padding:10px;
`