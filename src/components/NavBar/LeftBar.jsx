import React from 'react';
import { 
    Container, 
    Link, 
    Typography
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Box, typography } from '@mui/system';
import { 
    Apps, 
    CameraAlt, 
    CollectionsBookmarkOutlined, 
    Home, 
    List, 
    LoginOutlined, 
    People, 
    PlayCircleOutline, 
    Settings, 
    StorefrontOutlined } from '@mui/icons-material';


const LeftBarContent = styled(Container)(({theme}) => ({
    padding: theme.spacing(10),
    backgroundColor: '#e2b2aece;',
    color: 'white',
    height: '100vh',
    

    [theme.breakpoints.up('sm')]: {
      backgroundColor:'white',
      color:'#333232',
      border: '1px solid #ece7e7',
    },

  }));

const IconWrapper = styled(Container)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    marginBottom: theme.spacing(4),
    cursor: 'pointer',
    

    [theme.breakpoints.down('sm')]: {
       marginBottom: theme.spacing(3),
    },

  }));

  const Icon = styled(Box)(({theme}) => ({
      display:'flex',    
      color: 'white',
      
    [theme.breakpoints.up('sm')]: {
       marginRight: theme.spacing(1),
       color: '#ce6f67',
    },

  }));

  const IconText = styled(Typography)(({theme}) => ({
   fontWeight: '500',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },

  }));




const LeftBar = () => {
  return (
      <LeftBarContent>
          <IconWrapper>
              <Icon><Home fontSize="medium"/></Icon>
              <IconText>Home</IconText>
          </IconWrapper>


          <IconWrapper>
              <Icon><People fontSize="medium"/></Icon>
              <IconText>Friends</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><List fontSize="medium"/></Icon>
              <IconText>List</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><CameraAlt fontSize="medium"/></Icon>
              <IconText>Camera</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><PlayCircleOutline fontSize="medium"/></Icon>
              <IconText>Video</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><Apps fontSize="medium"/></Icon>
              <IconText>Apps</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><CollectionsBookmarkOutlined fontSize="medium"/></Icon>
              <IconText>Collection</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><StorefrontOutlined fontSize="medium"/></Icon>
              <IconText>Market Place</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><Settings fontSize="medium"/></Icon>
              <IconText>Settings</IconText>
          </IconWrapper>

          <IconWrapper>
              <Icon><LoginOutlined fontSize="medium"/></Icon>
              <IconText>Logout</IconText>
          </IconWrapper>



          
      </LeftBarContent>
  
  )
}

export default LeftBar