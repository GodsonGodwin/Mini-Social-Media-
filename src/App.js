 import { Grid } from '@mui/material';
import React from 'react'
import Feed from './components/NavBar/Feed';
import LeftBar from './components/NavBar/LeftBar';
import NavBar from './components/NavBar/NavBar';
import { styled, alpha } from '@mui/material/styles';
import RightBar from './components/NavBar/RightBar';



const XSGrid = styled(Grid)(({theme}) => ({
   [theme.breakpoints.down('sm')]: {
     display: 'none'
   },

 }));


function App() {

  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}> 
        <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}> <Feed /></Grid>
        <XSGrid item sm={3} > <RightBar/></XSGrid>
      </Grid>
    
  </>
  );
}

export default App;
