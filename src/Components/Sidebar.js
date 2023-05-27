import React from 'react'
import { Stack } from '@mui/material';
import {categories} from '../utils/constants'

const isSelected = 'new';

const SideBar = () => {
  return (
    <Stack
    direction={"row"}
    sx={{
      overflowY:'auto',
      height:{sx:'auto' , md:'95%'},
      flexDirection:{md:'column'},
    }}
    >
    {categories.map((category)=>(
      <button
      className='category-btn'
      style={{
        // color:'black',
        transitionDuration:'0.4',
        cursor:'pointer',
        
      }}
      
      >
        <span style={{ color:'black' , marginRight:'15px'}}>{category.icon}</span>
        <span style={{opacity:1 , color:'black' }}>{category.name}</span>
      </button>
    ))}


    </Stack>
  )
}

export default SideBar;