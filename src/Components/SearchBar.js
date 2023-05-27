import React from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import './MainCss.css';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '2px solid #e3e3e3',
        boxShadow: 'none',
        mr: { sm: 5 },
        width: { xs: '55%', sm: '37%' },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search...."
        value=""
        onChange={() => {}}
        sx={{
            
          flex: 1,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          padding: '10px',
          alignItems: 'center',
          fontSize: '14px',
          lineHeight: '16px',
          color: '#000',
          '&::placeholder': {
            color: '#999',
          },
        }}
      />

      <IconButton type="submit" sx={{ p: '10px', color: 'black', border: '0.5px solid #999' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
