import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, makeStyles } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { ShoppingCart } from "@material-ui/icons";

  
export default function navbar() {
  
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  CyberCylla
          </Typography>
          
          <Button color="inherit">Login</Button>
          <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart fontSize='large' color='white' />
                  </Badge>
                </IconButton>
         
         
        </Toolbar>
      </AppBar>
    </Box>

  );
}
