"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link'
import { color } from 'framer-motion';
import { styled } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#fff' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LekanDev
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  primary={<StyledLink href={item.toLowerCase()} > {item} item</StyledLink>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
     
     <AppBar sx={{backgroundColor: 'primary.contrastText'}} component="nav">
     <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color:'primary.main', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{mr:1}}> <Image src="/logo.png" alt="Lekan Logo" width={35} height={30} layout="fixed"  /> </Box>
          
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'primary.main' }}
          >
             Lekan_Dev
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} >
                <ListItemText sx={{
                  textDecoration:'none'
                }}
                primary={<StyledLink href={item.toLowerCase()} > {item}</StyledLink>} />
              </Button>
            ))}
          </Box>
        </Toolbar>
     </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

const StyledLink = styled(Link)({
  color: 'primary',
  textDecoration:'none'
});