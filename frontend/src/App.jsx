import React,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  let [firstname, setFirstname]=useState()
  let [lastname, setLastname]=useState()
  let [email, setEmail]=useState()
  let [password, setPassword]=useState()
  let [alldata, setAlldata]=useState([])

  let handleSubmit= async()=> {

    let data =await axios.post('http://localhost:3000/users',{
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password
    })

    alert(data.data);

  }

useEffect(()=>{
  async function alldata() {
    let data =await axios.get('http://localhost:3000/users')
    setAlldata(data.data);
  }
  alldata();
},[])


  return (
    <div>
      <input onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder='First Name' />
      <input onChange={(e)=>setLastname(e.target.value)} type="text" placeholder='Last Name' />
      <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' />
      <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
      {
        alldata.map(item=>(
          <li>{item.firstname}---{item.lastname}---{item.email}---{item.password} </li>
        ))
      }
    </div>
  )
}

export default App