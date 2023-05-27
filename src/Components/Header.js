import React from 'react'

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { Person } from '@mui/icons-material';

const Header = () => {
  return (
    <Stack
    direction= 'row'
    alignItems='center'
    p={2}
    sx={{position:'sticky' ,background:'white' , top:0 , justifyContent:'space-between'}}
    >
    <Link to="/" style={{display:'flex' , alignItems:'center' }}>
    <img src={logo} alt='image' height={45}/>
    </Link>
    <SearchBar/>
     <Person/>
  </Stack>
  )
}

export default Header;