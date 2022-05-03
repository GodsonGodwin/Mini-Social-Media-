import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Container } from '@mui/material';
import Post from './Post';

const FeedContent = styled(Container)`
padding-top: 80px;

`;



const Feed = () => {
  return (
    <FeedContent>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    </FeedContent>
  )
}

export default Feed
