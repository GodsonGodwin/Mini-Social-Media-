import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Mail, Notifications, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import ProfileModal from "../MobileProfileModal/ProfileModal";

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #ce7067da;
`;
const SearchWrapper = styled(Box)(({ theme, show }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "50%",
  

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SearchIcon = styled(Search)`
  margin-left: 10px;
`;

const MobileSearchIcon = styled(Search)(({ theme, show }) => ({
  marginRight: "20px",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    width: "100%",
   
  
  },
}));

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconButton = styled(Box)`
  display: flex;
  align-items: center;
`;

const Icon = styled(Badge)`
  margin-right: 30px;
`;

const AvatarMobile = styled(Link)(({ theme }) => ({
  display:'none',

  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openMobileProfile, setOpenMobileProfile] = useState(false);

  return (
    <>
      <AppBar>
        <ToolbarWrapper>
          <Typography variant="h6">UConnect</Typography>

          <SearchWrapper>
            <SearchIcon />
            <StyledInputBase placeholder="Search…" />
          </SearchWrapper>

          <IconWrapper>
            <MobileSearchIcon onClick={() => setOpen(!open)} />

            {open ? (
              <StyledInputBase
                sx={{
                  "&:hover": {
                    backgroundColor: "#e7c7d46a",
                    borderRadius: "5px",
                  },
                }}
                placeholder="Search…"
              />
            ) : (
              <IconButton>
                <Icon badgeContent={6} color="error">
                  <Mail />
                </Icon>

                <Icon Button badgeContent={15} color="error">
                  <Notifications />
                </Icon>

                <AvatarMobile underline="none">
                <Avatar
                    onClick={() => setOpenMobileProfile(true)}
                    alt="profile"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  </AvatarMobile>

                  <Avatar
                  sx={{ display: { sm: 'block', xs: 'none', md:'block'} }}
                    alt="profile"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  />
                
              </IconButton>
            )}
          </IconWrapper>
        </ToolbarWrapper>
      </AppBar>

      <ProfileModal  open={openMobileProfile} onClose={()=> setOpenMobileProfile(false)}  />
    </>
  );
};

export default NavBar;
