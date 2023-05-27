import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPaginate from 'react-paginate';
import './Feed.css';
import SideBar from './Sidebar';

const NewsCard = (props) => {
  const VId = props.url.substring(21, 47);

  return (
    <Card
      sx={{
        width: { xs: '320px', sm: '358px', md: '320px' },
        height: { xs: '320px', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
        p: '2',
        m: '3px',
      }}
    >
      <Link to={`/video/${VId} ${props.author} ${props.title}`}>
        <CardMedia
          image={props.thumbnailImg}
          alt={props.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={`/video/${VId} ${props.author} ${props.title}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {props.title} 
          </Typography>
        </Link>
        <Link to={`/video/${VId} ${props.author} ${props.title}`}>
          <Typography variant="subtitle2" color="gray" >
            {props.author || 'someone'}
            <CheckCircleIcon
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);

  const URL = `https://internship-service.onrender.com/videos?page=${currentPage}`;

  const fetchUserData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data1) => {
        setVideos([...data1.data.posts]);
        setPageCount(10);
        setisLoaded(true);
      })
      .catch((error) => console.error('Error', error));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    fetchUserData();
  };

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } ,backgroundColor: 'grey' }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, px: { sx: 0, md: 2 } }}>
        <SideBar/>
      </Box>

      <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, color: 'black', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ overflowY: 'auto', flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gridGap: '20px' }}>
          {isLoaded ? (
            videos.map((item) => (
              <NewsCard
                url={item.submission.mediaUrl}
                title={item.submission.title}
                author={item.creator.name}
                ProfileImg={item.creator.pic}
                thumbnailImg={item.submission.thumbnail}
                reactionC={item.reaction.count}
                discribe={item.submission.description}
                VideoId={item.postId}
              />
            ))
          ) : (
            <></>
          )}
        </Box>

        {isLoaded ? (
          <ReactPaginate
            style={{ alignSelf: 'flex-end' }}
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            pageRange={3}
            marginPagesDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
          />
        ) : (
          <></>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
