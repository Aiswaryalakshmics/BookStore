import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{textAlign:'center',position:'relative'}}>
      <img style={{width:'100%'}} src="https://png.pngtree.com/background/20230611/original/pngtree-an-empty-bookshop-stacked-with-books-picture-image_3171986.jpg"/>
      <div style={{position:'absolute',top: '10%',left: '40%'}}>
          <h1 style={{color:'white'}}>Welcome To </h1>
          <h1 style={{color:'white'}}>Online Book Store ...</h1>
      </div>
    </div>
  )
}

export default Home


// <Button LinkComponent={Link} to="/books" sx={{marginTop:"15px" ,variant:"contained",backgroundColor:'yellow'}}>
// <Typography variant="h3">View All Products</Typography>  
// </Button>