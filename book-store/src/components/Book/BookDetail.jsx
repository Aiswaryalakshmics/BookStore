import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';

function BookDetail() {
  const [inputs, setInputs] = useState({})
  const id = useParams().id;
  const [checked,setChecked] = useState(false)
  // console.log(id);
  const history = useNavigate()
  useEffect(()=> { 
    const fetchHandler = async()=>{
      await axios.get(`http://localhost:4000/books/${id}`)
      .then((res)=>res.data).then(data=>setInputs(data.book))
    }
    fetchHandler()
  },[id])

  const sendRequest = async() =>{
    await axios.put(`http://localhost:4000/books/${id}`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"))
  }
  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  // console.log(inputs);
  return (
    <>
    { inputs && 
      <form onSubmit={handleSubmit} 
        style={{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:'700px',
        marginLeft:'auto',marginRight:'auto',marginTop:'5%'}}>
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="name"/>
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="author"/>
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="description"/>
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name="price"/>
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="image"/>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />

        <Button variant='contained' type='submit'>
          Update Book
        </Button>
      </form>
    }

    </>
  )
}

export default BookDetail