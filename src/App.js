 import { Grid } from '@mui/material';
import React from 'react'
import Feed from './components/Feed/Feed';
import LeftBar from './components/NavBars/LeftBar';
import NavBar from './components/NavBars/NavBar';
import { styled} from '@mui/material/styles';
import RightBar from './components/NavBars/RightBar';
import AddIcon from './components/CreateStory/Add';



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
        <Grid item sm={3} xs={3}> 
        <LeftBar />
        </Grid>
        <Grid item sm={6} xs={9}> <Feed /></Grid>
        <XSGrid item sm={3} > <RightBar/></XSGrid>
      </Grid>

      <AddIcon/>

    
  </>
  );
}

export default App;
