import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  List,
  ListItemIcon,
  CssBaseline,
  Drawer,
  Typography,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Banner from "./Banner";
import { Link, useLocation } from "react-router-dom";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TbLogout } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
import { RiTimerLine } from "react-icons/ri";
import { TbDatabaseOff } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";

const menuSliderContainer = {
  minWidth: 250,
  height: "100%",
  color: "#000",
};

const LanguagesListStyle = {
  padding: "0px 0px 0px 73px",
  fontSize: "14px",
  color: "gray",
};

const sideBarMenu = [
  {
    icon: <RiTimerLine size={25} />,
    text: "Measure CT",
    path: "/home/",
  },
  {
    icon: <TbDatabaseOff size={25} />,
    text: "Offline Data",
    path: "/home/offline-data",
  },
];

const SideBar = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const active = sideBarMenu.findIndex((e) => e.path === pathname);

  const [open, setOpen] = useState(false);

  const [openLanguages, setOpenLanguages] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const languages = localStorage.getItem("languages");
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages === null ? "EN" : languages
  );

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);

    localStorage.setItem("languages", event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Banner />

      {/* Content Body */}
      <Box
        component="div"
        sx={{
          marginTop: "60px",
          padding: "10px",
        }}
      >
        {children}
      </Box>

      {/* Content Body */}

      <Box component="nav">
        <AppBar
          position="static"
          style={{
            backgroundColor: "#4f6481",
            boxShadow: "unset",
            position: "fixed",
            top: 0,
            zIndex: "11",
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <IoMenu style={{ color: "#fff" }} />
            </IconButton>

            {/* SideBar */}
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              <Box component="div" style={menuSliderContainer}>
                <Box
                  sx={{
                    display: "block",
                    padding: "20px 10px",
                    textAlign: "center",
                    backgroundColor: "#4f6481",
                    color: "#fff",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  <Typography variant="h5">IE</Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px 20px",
                  }}
                >
                  <Typography
                    variant="div"
                    sx={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    {"System"}
                  </Typography>

                  {/* List Menu */}
                  <List component="nav">
                    {sideBarMenu.map((listItem, index) => (
                      <ListItemButton
                        component={Link}
                        to={listItem.path}
                        key={index}
                      >
                        <ListItemIcon
                          style={{ color: active === index ? "#4f6481" : "" }}
                        >
                          {listItem.icon}
                        </ListItemIcon>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: active === index ? "#4f6481" : "#0009",
                            fontWeight: "600",
                          }}
                        >
                          {listItem.text}
                        </Typography>
                      </ListItemButton>
                    ))}
                  </List>
                  {/* List Menu */}

                  <Typography
                    variant="div"
                    sx={{ fontSize: "14px", fontWeight: "600" }}
                  >
                    {"Support"}
                  </Typography>
                  <List component="nav">
                    <ListItemButton
                      onClick={() => setOpenLanguages(!openLanguages)}
                    >
                      <ListItemIcon>
                        <GrLanguage size={25} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#0009",
                          fontWeight: "600",
                          marginRight: "10px",
                        }}
                      >
                        {"Language"}
                      </Typography>
                      {openLanguages ? (
                        <ExpandLess style={{ color: "gray" }} />
                      ) : (
                        <ExpandMore style={{ color: "gray" }} />
                      )}
                    </ListItemButton>
                    {openLanguages && (
                      <Box component="div" sx={LanguagesListStyle}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          value={selectedLanguage}
                          onChange={handleChange}
                          style={{ fontSize: "small" }}
                        >
                          <FormControlLabel
                            value="EN"
                            control={<Radio size="small" />}
                            label={
                              <span style={{ fontSize: "14px" }}>{"en"}</span>
                            }
                          />
                          <FormControlLabel
                            value="VN"
                            control={<Radio size="small" />}
                            label={
                              <span style={{ fontSize: "14px" }}>{"vn"}</span>
                            }
                          />
                        </RadioGroup>
                      </Box>
                    )}
                    <ListItemButton>
                      <ListItemIcon>
                        <TbLogout size={25} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#0009",
                          fontWeight: "600",
                        }}
                      >
                        {"Logout"}
                      </Typography>
                    </ListItemButton>
                  </List>
                </Box>
              </Box>
            </Drawer>
            {/* SideBar */}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default SideBar;
