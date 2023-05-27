import React from 'react'
import { useState , useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography , Box , Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {Feed} from './';





const VideoDetail = () => {
    // const [videoDetail , setVideoDetail] = useState(null);
    const {id} = useParams();

const data = id.split(" ");

  

  return (
    <Box minHeight="95vh" color='white'>
  <Stack direction={{ xs: 'column', md: 'row'  , color:'white'}}>
    <Box flex={1} color='white'>
      <Box sx={{ width: '100%', position: 'sticky', top: '80' }}>
        <ReactPlayer url={`https://cdn.gro.care/${data[0]}.mp4`} className="react-player" controls width='100%' height='600px' />
        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
          {data[2]} {data[3]}
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
          <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff">
            {data[1] || 'Someone'}
          </Typography>
          <Stack direction="row" gap="20px" alignItems="center">
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              100 views
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: { xs: 'normal', sm: 'normal', md: 'bold' }, opacity: 0.7 }}>
              10 likes
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
          <Typography
            variant={{
              xs: 'subtitle1',
              sm: 'subtitle1',
              md: 'h6',
            }}
            color="#fff"
            sx={{
              mt: { xs: 1, sm: 0 },
              fontSize: { xs: '14px', sm: '16px', md: '24px' },
              lineHeight: { xs: '20px', sm: '24px', md: '28px' },
              color: '#fff',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim.
          </Typography>
        </Stack>
      </Box>
    </Box>
  </Stack>
</Box>

  )
}

export default VideoDetail; 