
import './App.css';

import {BrowserRouter , Route, Routes } from 'react-router-dom' 
import { Box } from '@mui/material';

import { Header , Feed , ChannelDetail , VideoDetail , SearchFeed } from './Components';


function App()  {
  return (
    <Box sx={{backgroundColor:'#000'}}>
    <Header/>
    <Routes>
      <Route path='/' exact element={<Feed/>}/>
      <Route path='/video/:id' exact element={<VideoDetail/>}/>
      <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
      <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
    </Routes>
  </Box>
  )
}

  



export default App;
