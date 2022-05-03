import React from 'react'
import { styled} from '@mui/material/styles';
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia,
    Typography } from '@mui/material';

const CardWrapper = styled(Card)`
margin-bottom: 50px;
`;

const MediaImage = styled(CardMedia)(({theme}) => ({
    height: '250px',
   
    

    [theme.breakpoints.down('sm')]: {
        height: '150px',
    },
}));

const Post = () => {
  return (
   <CardWrapper>
       <MediaImage image='https://i.cbc.ca/1.6016535.1620322189!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/shutterstock-large-file.jpg' />
       <CardContent>
           <Typography gutterBottom variant='h5'>MY First Post</Typography>
           <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nihil!t</Typography>
        </CardContent>

        <CardActions>
            <Button size='small'sx={{color:'#ce7067da', fontWeight:'bold'}} >Share</Button>
            <Button size='small'sx={{color:'#ce7067da', fontWeight:'bold'}}>Learn More</Button>
        </CardActions>
       

   </CardWrapper>
  )
}

export default Post