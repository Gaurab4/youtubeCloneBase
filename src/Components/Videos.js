// import {React , useState} from 'react'
// import { Stack , Box } from '@mui/material';
// import {VideoCard , ChannelCard} from './'
// import ReactPaginate from 'react-paginate';



// const Videos = ({videos}) => {

//   // new

//     console.log(videos);
//   return (
//     <Stack direction="row" flexWrap='wrap' justifyContent="start" gap
//     ={2}>
//     {/* {videos.map((item) => (
//         <Box key={idx}>
//             {item.id && <VideoCard video={item}/>}

//         </Box>
//     ))} */}
//     {isLoaded ? (
// 				videos.map((item) => {
//           {/* console.log(item); */}
// 					return (
// 						<NewsCard
// 							url={item.submission.mediaUrl}
// 							title={item.submission.title}
// 							author={item.creator.name}
// 							key={item.postId}
// 						/>
// 					);
// 				})
// 			) : (
// 				<div></div>
// 			)} 

//       {isLoaded ? (
// 				<ReactPaginate
// 					pageCount={pageCount}
// 					pageRange={3}
// 					marginPagesDisplayed={2}
// 					onPageChange={handlePageChange}
// 					containerClassName={'container'}
// 					previousLinkClassName={'page'}
// 					breakClassName={'page'}
// 					nextLinkClassName={'page'}
// 					pageClassName={'page'}
// 					disabledClassNae={'disabled'}
// 					activeClassName={'active'}
// 				/>
// 			) : (
// 				<div>Nothing to display</div>
// 			)} 
//     </Stack>
//     // {/* <h1>hello</h1> */}
//   )
// }

// export default Videos;