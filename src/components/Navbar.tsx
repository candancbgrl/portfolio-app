import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Stack, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stackStyle: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
      justifyContent: 'flex-end', flexGrow: 1,
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end', flexGrow: 1,
    }
  },
  menuStyle: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    justifyContent: 'flex-end', flexGrow: 1,
  },
}))



type NavbarProps = {
  page: any;
}


export const Navbar: React.FC<NavbarProps> = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);


  const [colorBlog, setColorBlog] = useState('');
  const [colorWorks, setColorWorks] = useState('');
  useEffect(() => {
    if (page === 'blog') {
      setColorBlog('#FF6464');
    } else if (page === 'works') {
      setColorWorks('#FF6464');
    }
  }, [page]);



  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'flex-end', flexGrow: 1, } }}
  return (
    <Stack>
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'flex-end', flexGrow: 1, } }}>
          <Button color="inherit" component={Link} to="/blog-page">
            <Typography variant='subtitle1' fontWeight='bold' color={colorBlog} >Blog</Typography>

          </Button>
          <Button color="inherit" component={Link} to="/works-page">
            <Typography variant='subtitle1' fontWeight='bold' color={colorWorks} >Works</Typography>
          </Button>
          <Button color="inherit" component={Link} to="/">
            <Typography variant='subtitle1' fontWeight='bold' >Home</Typography>
          </Button>
        </Stack>
        <IconButton edge="end" color="inherit" onClick={handleMenuToggle} aria-label="menu" sx={{ display: { sm: 'none', justifyContent: 'flex-end', flexGrow: 1, } }}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuToggle}>
        <List sx={{width:'220px'}}>
          <ListItem button component={Link} to="/works-page" >
            <ListItemText primary="Works" />
          </ListItem>
          <ListItem button component={Link} to="/blog-page">
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
};
