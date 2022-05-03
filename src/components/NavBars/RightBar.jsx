import React from 'react'
import { styled} from '@mui/material/styles';
import { 
  Card, 
  CardMedia, 
  Container, 
  Typography, 
  CardContent, 
  Avatar, 
  ImageList, 
  ImageListItem } from '@mui/material';

const RightBarContent = styled(Container)`
padding-top: 80px;

`;

const CardWrapper = styled(Card)`
margin-bottom: 50px;
`;

const CoverImage = styled(CardMedia)(({theme}) => ({
    height: '100px',
    
    

    [theme.breakpoints.down('sm')]: {
        height: '100px',
    },
}));

const ProfileImage = styled(Avatar)(({theme}) => ({
  height: '80px',
  width: '80px',
  margin: '-40px auto 0 auto',
  
  

  [theme.breakpoints.down('sm')]: {
      height: '100px',
  },
}));



const RightBar = () => {
  return (
    <RightBarContent>
    <CardWrapper>
       <CoverImage image='https://loribrownphotography.com/wp-content/uploads/2017/06/Rootes_family_kelowna_1451-1024x683.jpg' />
       <ProfileImage alt="profile" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
       
       <CardContent sx={{textAlign:'center'}}>
           <Typography gutterBottom variant='h6'>Godson Godwin</Typography>
           <Typography variant='body2' >Very optimistic and always eagar to explore and do crazy stuff everyday</Typography>
            <hr />
            
            <Typography variant='body1' ><strong>Best Quote</strong></Typography>
            <Typography variant='body2' >Look at me and you will see me...</Typography>
            
      </CardContent> 
      <hr />

      <Typography sx={{textAlign:'center'}} variant='body1'><strong>Best Photo Shot</strong></Typography>
      <ImageList sx={{padding:'0 15px'}} cols={2} rowHeight={160}>
        <ImageListItem>
          <img src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_107808334_121413.jpg' alt=''/>
      </ImageListItem>

      <ImageListItem>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4JPoZ_eQQCKH4EIPtAvl5Hl_u_69RQdt1pIupzxekYxaZWoj5R9TzzYr0IQwyH6BVvY&usqp=CAU' alt=''/>
      </ImageListItem>

      <ImageListItem>
          <img src='https://www.healthshots.com/wp-content/uploads/2020/05/Happy-woman-21-may.jpg' alt=''/>
      </ImageListItem>

      <ImageListItem>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxB5a5SInMZ9DGDjH31cGlgEpqOb1Xz3yj9797I0wwm95UrJIkE9vvgN3vyxGggWNQcE&usqp=CAU' alt=''/>
      </ImageListItem>
</ImageList>

   </CardWrapper>
    </RightBarContent>
  )
}

export default RightBar