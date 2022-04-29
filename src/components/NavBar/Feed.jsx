import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Container } from '@mui/material';

const FeedContent = styled(Container)`
padding-top: 80px;

`;

const Feed = () => {
  return (
    <FeedContent>
    <div>Feed</div>
    </FeedContent>
  )
}

export default Feed