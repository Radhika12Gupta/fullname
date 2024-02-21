import React, { useState } from 'react'

const Form = () => {
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")

    const [fullname,setFullname]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
       setFullname(firstname+" "+lastname)
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <br/>
      First Name:<input type="text" value={firstname} onChange={(e)=> setFirstname(e.target.value)} required/>
      <br/>
      Last Name:<input type="text" value={lastname} onChange={(e)=> setLastname(e.target.value)} required/>
      <br/>
      <button type="submit" >Submit</button>
      <br/>
    {fullname && "Full Name: " + fullname }
      </form>
    </div>
  )
}

export default Form
