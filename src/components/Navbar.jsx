import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar elevation={0}>
        <Container>
          <Toolbar >
            {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  PetaBeba
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}> */}
                {/* </Typography> */}
                <Typography sx={{ fontSize: "2rem", paddingLeft: "0%" }}>
                    PataBeba
                  </Typography>
                <Typography>
                  <Tabs
                    sx={{ marginLeft: "auto" }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    <Tab label="Loads" />
                    <Tab label="Trucks" />
                    <Tab label="For Freight Owners" />
                    <Tab label="For Carriers" />
                    <Tab label="Tenders" />
                  </Tabs>
                </Typography>
                <Stack spacing={2} direction="row" >
                  <Button variant="outlined" color="success" size="large">
                    Login
                  </Button>
                  <Button variant="outlined" color="success" size="large">
                    Sign Up
                  </Button>
                </Stack>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
