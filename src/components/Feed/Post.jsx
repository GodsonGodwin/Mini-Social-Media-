import React from 'react'
import { styled} from '@mui/material/styles';
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia,
    Typography } from '@mui/material';
    import Popper from '@mui/material/Popper';
    import Box from '@mui/material/Box';
    import Link from '@mui/material/Link';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import InstagramIcon from '@mui/icons-material/Instagram';


const CardWrapper = styled(Card)`
margin-bottom: 50px;
`;

const MediaImage = styled(CardMedia)(({theme}) => ({
    height: '250px',
    

    [theme.breakpoints.down('sm')]: {
        height: '150px',
    },
}));

const SocialLinks = styled(Link)(({theme}) => ({
    color:'white', 
    paddingRight:'10px', 
    "&:hover": {color: "#e7c7d46a"}
   
}));

const Post = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [share, setShare] = React.useState(null);

    //Like Button Called
    const LikeButton = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    setTimeout(() => {
        LikeButton();
        
      }, 1000);

    //Shared Button Called
    const ShareButton = (event) => {
        setShare(share ? null : event.currentTarget)
    }

    setTimeout(() => {
        ShareButton();
        
      }, 7000);

      //Setting PopUP Position
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
    
      const openShared = Boolean((share));
      const shareId = openShared ? 'simple-popper' : undefined;



    //GETTING USER INFO FROM LOCAL

    let feeds = JSON.parse(localStorage.getItem('storyFeed') || '[]');

    return feeds.map((feed)=>{
        let title = feed.title;
        let story = feed.story;
        let image = feed.uploadImage;

return(
        <CardWrapper>
       <MediaImage image={image} />
       <CardContent>
        <Typography gutterBottom variant='h5'>{title}</Typography>
           <Typography variant='body2'> {story}</Typography>
        </CardContent>

        <CardActions>
            <Button aria-describedby={shareId} onClick={ShareButton} size='small'sx={{color:'#ce7067da', fontWeight:'bold'}} >Share</Button>
            <Button aria-describedby={id} onClick={LikeButton} size='small'sx={{color:'#ce7067da', fontWeight:'bold'}}>Like</Button>
        </CardActions>

        {/* POPER */}

        <div>
        <Popper id={id} open={open} anchorEl={anchorEl} placement='right-end'>
        <Box sx={{ p: 1, bgcolor: '#ce7067da', color:'white' }}>
          You Liked
        </Box>
      </Popper>
    </div>

    <div>
        <Popper shareId={shareId} open={openShared} anchorEl={share} placement='top-start'>
        <Box sx={{ p: 1, bgcolor: '#ce7067da',}}>
            <SocialLinks href="https://www.facebook.com/"><FacebookIcon /></SocialLinks>
            <SocialLinks href="https://www.instagram.com/?hl=en"><TwitterIcon /></SocialLinks>
            <SocialLinks href="https://twitter.com/login"><InstagramIcon /></SocialLinks>
        </Box>
      </Popper>
    </div>
   </CardWrapper>
)
})
}

export default Post
