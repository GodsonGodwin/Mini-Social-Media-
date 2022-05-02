import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Container } from '@mui/material';

const RightBarContent = styled(Container)`
padding-top: 80px;

`;



const RightBar = () => {
  return (
    <RightBarContent>
    <div>RightBar</div>
    </RightBarContent>
  )
}

export default RightBar