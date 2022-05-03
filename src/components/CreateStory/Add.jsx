import React, { useState } from 'react'
import { styled} from '@mui/material/styles';
import { 
    Alert, 
    Avatar, 
    Button, 
    Container, 
    Fab, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    IconButton, 
    Modal,  
    Radio,  
    RadioGroup,  
    Snackbar,  
    TextField,  
    Tooltip, 
    Typography } from '@mui/material';
import { Add, } from '@mui/icons-material';
import { Box} from '@mui/system';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';



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

  const Form = styled('form')({
      padding: '20px',
  })

  const RadioIcon = styled(Radio)({
    '&.Mui-checked': {
    color: '#ce7067da',
    }
})





const AddIcon = () => {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

  return (
    <>
    <Tooltip title='Create story' aria-label='Story' onClick = {()=> setOpen(true)}>
        <IconWrapper sx={{backgroundColor:'#ce7067da', color:'white', '&:hover':{backgroundColor:'#a16862da'}}} >
            <Add />
        </IconWrapper>
    </Tooltip>

    <Modal open={open}>
        <ModalBox>
        <Form autoComplete='off'>
            <Box>
            <Typography variant='h6' sx={{paddingBottom: '20px', color:'#ce7067da'}}>Create a story</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', paddingBottom: '20px'}}>
            <Avatar alt="Godson Godwin" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Typography variant='h6'sx={{paddingLeft: '10px'}} >Godson Godwin</Typography>
            </Box>

            <TextField id='outline-multiline-static' required multiline rows={4} variant='outlined' label='Your Story' size='small' sx={{width: '100%'}}/>
            
            <Box sx={{marginBottom:'10px'}}>
            <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton sx={{color:'#ce7067da'}} aria-label="upload picture" component="span">
                <AddAPhotoOutlinedIcon />
            </IconButton>
            </label>

            <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton sx={{color:'#ce7067da'}} aria-label="upload picture" component="span">
                <AddPhotoAlternateOutlinedIcon />
            </IconButton>
            </label>
            </Box>

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Who can see your post</FormLabel>
            <RadioGroup defaultValue="Anyone" name="radio-buttons-group">
                <FormControlLabel   value="Anyone" control={<RadioIcon  />} label="Anyone" />
                <FormControlLabel value="Friends" control={<RadioIcon />} label="Friends" />
                <FormControlLabel value="Friends of friends" control={<RadioIcon />} label="Friends of friends" />
                <FormControlLabel value="Only me" control={<RadioIcon />} label="Only me" />
            </RadioGroup>
            </FormControl>
            </Box>

            <Box sx={{float:'right'}}>
                <Button variant='outlined' sx={{marginRight:'20px', color:'#ce7067da'}} onClick={()=>setOpenAlert(true)}> Create</Button>
                <Button variant='outlined' color='secondary' onClick={()=> setOpen(false)}> Cancel</Button>
            </Box>
        </Form>
        </ModalBox>
    </Modal>

    <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="primary" sx={{ width: '100%', backgroundColor:'#ce7067da', color:'white' }}>
            Your story has been created...
        </Alert>
    </Snackbar>
    </>
  )
}

export default AddIcon