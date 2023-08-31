import { Link } from 'react-router-dom';

import { StyledSidebar } from './Sidebar.styles';

import Logo from 'assets/svg/logo.svg';
import Logout from 'assets/svg/logout.svg';

import Box from '@mui/material/Box';

import { routes } from 'routes/routes';
import { IconButton, Typography } from '@mui/material';
import { theme } from 'theme/theme';

import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';
import useSidebar from './useSidebar';

const Sidebar = () => {
  const { isSelectedLink, isLogged, navItems } = useSidebar();

  return (
    <StyledSidebar
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      paddingX={10}
      paddingY={0.8}
      bgcolor='white'
      boxShadow={2}
    >
      <Box display='flex' justifyContent='space-between' width='100%'>
        <Box>
          <img src={Logo} width={160} alt='Logo Raise' />
        </Box>

        <Box display='flex' alignItems='center' gap={5} className='nav-items'>
          {navItems.map((link) => (
            <Box key={link.path}>
              <Link
                style={{
                  color: isSelectedLink(link.path)
                    ? theme.palette.primary.main
                    : 'ButtonText',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
                to={link.path}
              >
                <Typography fontFamily='Poppins' fontWeight={500}>
                  {link.tag}
                </Typography>
              </Link>
            </Box>
          ))}

          {isLogged && (
            <IconButton size='large'>
              <img src={Logout} alt='Logout icone' width={20} />
            </IconButton>
          )}
        </Box>
      </Box>

      <Box>
        <HamburgerMenu />
      </Box>
    </StyledSidebar>
  );
};

export default Sidebar;
