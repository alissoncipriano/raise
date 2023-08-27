import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { StyledHamburgerMenu } from './HamburgerMenu.styles';

import { routes } from 'routes/routes';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHamburgerMenu>
      <IconButton
        size='large'
        className='nav-hamburger-menu'
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box className={`nav-hamburger-container ${open ? 'open' : 'closed'}`}>
        <Box
          display='flex'
          alignItems='center'
          gap={5}
          className='hamburger-items'
        >
          {routes[0].children.map((link) => (
            <Box key={link.path}>
              <Link
                style={{
                  color: 'ButtonText',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
                onClick={() => {
                  setOpen(false);
                }}
                to={link.path}
              >
                <Typography fontFamily='Poppins' fontWeight={500}>
                  {link.tag}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
