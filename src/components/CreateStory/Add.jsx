import React, { useState } from "react";
import { styled } from "@mui/material/styles";
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
  Typography,
} from "@mui/material";
import { Add} from "@mui/icons-material";
import { Box } from "@mui/system";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Loader from "../Loader/Loader";

const IconWrapper = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const ModalBox = styled(Container)(({ theme }) => ({
  width: "500px",
  height: "550px",
  backgroundColor: "white",
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  margin: "auto",

  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
  },
}));

const Input = styled("input")({
  display: "none",
});

const Form = styled("form")({
  padding: "20px",
});

const RadioIcon = styled(Radio)({
  "&.Mui-checked": {
    color: "#ce7067da",
  },
});

const LoadingButton = styled(Box)({
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  textAlign:'center',
  margin: "275px auto",

})


const AddIcon = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [Story, setStory] = useState("");
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState("");


  //Creating a StoryFeed
  const CreateStory = (e) => {
    e.preventDefault();

    //Hosting User Image Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", imageUpload);
    formData.append("api_key", 375963362885647);
    formData.append("upload_preset", "yy9ctlo9");

    setShowLoader(true);

    fetch("https://api.cloudinary.com/v1_1/" + 'dyab6czwt' + "/auto/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })

      .then((data) => {
        const result = JSON.parse(data);
        
      

        //Storing UserInfo in Local storage
        let MyStory = JSON.parse(localStorage.getItem("storyFeed") || "[]");
        const NewsFeed = { story: Story, uploadImage: result.url, title: title };
        MyStory = [...MyStory, NewsFeed];
        console.log(MyStory)
        localStorage.setItem("storyFeed", JSON.stringify(MyStory));

        setOpenAlert(true);
        setOpen(false);

        window.location.reload(true)

      })
    };
    


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };


  return (
    <>
      <Tooltip
        title="Create story"
        aria-label="Story"
        onClick={() => setOpen(true)}
      >
        <IconWrapper
          sx={{
            backgroundColor: "#ce7067da",
            color: "white",
            "&:hover": { backgroundColor: "#a16862da" },
          }}
        >
          <Add />
        </IconWrapper>
      </Tooltip>

      <Modal open={open}>
        <ModalBox>
          <Form autoComplete="off" onSubmit={CreateStory}>
            <Box>
              <Typography variant="h6" sx={{ paddingBottom: "20px", color: "#ce7067da" }}>
                Create a story
              </Typography>

              <Box sx={{display: "flex", alignItems: "center", paddingBottom: "20px"}}>
                <Avatar
                  alt="Godson Godwin"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                
                  <Typography variant="h6" sx={{ paddingLeft: "10px" }}>
                  Godson Godwin
                  </Typography>
              </Box>

              <TextField
                onChange={(e) => setTitle(e.target.value)}
                required
                variant="outlined"
                label="Your Tittle"
                size="small"
                sx={{ width: "100%", paddingBottom:'15px' }}
              />

              <TextField
                onChange={(e) => setStory(e.target.value)}
                id="outline-multiline-static"
                required
                multiline
                rows={4}
                variant="outlined"
                label="Your Story"
                size="small"
                sx={{ width: "100%" }}
              />

              <Box sx={{ marginBottom: "10px" }}>
                <label htmlFor="icon-button-file">
                  <Input onChange={(e) => {setImageUpload(e.target.files[0]);}}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                  />
                </label>

                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton sx={{ color: "#ce7067da" }} aria-label="upload picture" component="span">
                    <AddPhotoAlternateOutlinedIcon />
                  </IconButton>
                </label>
              </Box>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Who can see your post
                </FormLabel>
                <RadioGroup defaultValue="Anyone" name="radio-buttons-group">
                  <FormControlLabel
                    value="Anyone"
                    control={<RadioIcon />}
                    label="Anyone"
                  />

                  <FormControlLabel
                    value="Friends"
                    control={<RadioIcon />}
                    label="Friends"
                  />
                  
                  <FormControlLabel
                    value="Only me"
                    control={<RadioIcon />}
                    label="Only me"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box sx={{ float: "right" }}>

          

              <Button type="submit" variant="outlined" sx={{ marginRight: "20px", color: "#ce7067da" }}>

              {" "} Create
              </Button>
             
              <Button variant="outlined" color="secondary"
                onClick={() => setOpen(false)}
              >{" "} Cancel
              </Button>
            </Box>

            {showLoader && <LoadingButton><Loader /> </LoadingButton>}

          </Form>
        </ModalBox>
      </Modal>

       
      <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="primary"
          sx={{ width: "100%", backgroundColor: "#ce7067da", color: "white" }}
        >
          Your story has been created...
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddIcon;
