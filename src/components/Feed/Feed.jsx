import React from 'react'
import { styled} from '@mui/material/styles';
import { Container } from '@mui/material';
import Post from './Post';


const FeedContent = styled(Container)`
padding-top: 80px;

`;



const Feed = () => {
  return (
    <FeedContent>
    <Post />
    </FeedContent>
  )
}

export default Feed
