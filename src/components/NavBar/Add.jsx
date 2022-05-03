import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Button, Container, Fab, FormControlLabel, FormLabel, IconButton, Modal,  Radio,  RadioGroup,  TextField,  Tooltip, Typography } from '@mui/material';
import { Add, } from '@mui/icons-material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

const RightBarContent = styled(Container)`
padding-top: 80px;

`;

const IconWrapper = styled(Fab)`
position: fixed;
bottom: 20px;
right: 20px;

`

const ModalBox = styled(Container)(({theme}) => ({
   width:'500px',
   height: '550px',
   backgroundColor: 'white',
   position:'absolute',
    top: '0',
    bottom: '0',
    right:"0",
    left: '0',
    margin: 'auto',
    

    [theme.breakpoints.down('sm')]: {
        width:'100vw',
        height: '100vh',
    },

  }));

  const Input = styled('input')({
    display: 'none',
  });



const AddIcon = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip title='Create story' aria-label='Story' onClick = {()=> setOpen(true)}>
        <IconWrapper color='primary' >
            <Add />
        </IconWrapper>
    </Tooltip>

    <Modal open={open}>
        <ModalBox>
        <form autoComplete='off'>
            <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography variant='h5'>Godson Godwin</Typography>

            <TextField id='outline-multiline-static' multiline rows={4} variant='outlined' label='Your Story' size='small' sx={{width: '100%'}}/>
            
            <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <AddAPhotoOutlinedIcon />
            </IconButton>
            </label>

            <FormLabel id="demo-radio-buttons-group-label">Who can see your post</FormLabel>
            
            <RadioGroup value ='' defaultValue="Anyone" name="radio-buttons-group">
                <FormControlLabel value="Anyone" control={<Radio />} label="Anyone" />
                <FormControlLabel value="Friends" control={<Radio />} label="Friends" />
                <FormControlLabel value="Friends of friends" control={<Radio />} label="Friends of friends" />
                <FormControlLabel value="Only me" control={<Radio />} label="Only me" />
            </RadioGroup>
            </div>

            <div>
                <Button variant='outlined' color='primary'> Create</Button>
                <Button variant='outlined' color='secondary'> Cancel</Button>
            </div>
        </form>
        </ModalBox>
    </Modal>
    </>
  )
}

export default AddIcon