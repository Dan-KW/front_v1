import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Stack,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} >
          <Toolbar >
            <Typography variant="h2" component="div"
              sx={{ flexGrow: 1 }}>
              PataBeba
            </Typography>
            <Box  display='flex' flexGrow={15}>
              <Tabs
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
            </Box>

            <Stack spacing={2} direction="row" >
              <Button variant="outlined" color="success" size="large">
                Login
              </Button>
              <Button variant="outlined" color="warning" size="large">
                Sign Up
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
