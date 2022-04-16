
import {Routes,Route, Link} from "react-router-dom"
import './App.css'
import AddCity from "./component/AddCity"
import AddCountry from "./component/AddCountry"
import Table from "./component/Table"
import Update from "./component/Update"
import styled from "styled-components"
function App() {



  return (
    <div className="App">
      <Box>
      <LinkOne to="/add-city">Add City</LinkOne>
        <LinkOne to="/">Home</LinkOne>
        <LinkOne to="/add-country">Add Country</LinkOne>
      </Box>
     
     <Routes>
        <Route path="/" element={<Table/>} />
        <Route path="/add-country" element={<AddCountry/>} />
        <Route path="/add-city" element={<AddCity/>} />
        <Route path="/edit-city/:id" element={<Update/>} />
     </Routes>
    </div>
  )
}

const Box = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
  background-color: #545353;
 margin-bottom: 20px;

`

const LinkOne = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
border: 2px solid transparent;
padding: 5px 10px;
background-color: white;

&:hover{
  background-color: #545353;
  color: white;
}
`
export default App
