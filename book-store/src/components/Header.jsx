import React, { useState } from 'react'
import { AppBar,Tabs,Tab,Toolbar,Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'; 
import {NavLink} from 'react-router-dom';

function Header() {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar style={{backgroundColor:"black"}}  position="sticky">
           <Toolbar>
            <NavLink to="/" style={{color:'white'}}>
            <Typography>
                <LibraryBooksOutlinedIcon/>
            </Typography>
            </NavLink>
                <Tabs style={{marginLeft:'auto'}} textColor='inherit' indicatorColor='primary' value={value} 
                onChange={(e,val)=>setvalue(val)}
                >
                  <Tab LinkComponent={NavLink} to="/add" label='Add Product' />  
                  <Tab LinkComponent={NavLink} to="/books" label='Books' /> 
                  <Tab LinkComponent={NavLink} to="/about" label='About Us' />  
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header