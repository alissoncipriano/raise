import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Page from 'components/Page';
import Text from 'components/Text';

import Logo from 'assets/svg/logoFull.svg';

import { theme } from 'theme/theme';
import { InputBase, styled } from '@mui/material';
import { StyledButton } from 'components/StyledButton/StyledButton.styles';

export const StyledLoginInput = styled(InputBase)(() => ({
  '&.MuiInputBase-root': {
    backgroundColor: 'rgba(201, 201, 201, 0.19)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
    border: '1px solid #e7e7e7',
  },

  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: '#000000',
      opacity: 0.3,
      fontWeight: 500,
    },

    '&:hover::placeholder': {
      opacity: 0.4,
    },

    '&:focus::placeholder': {
      opacity: 0.1,
    },
  },
}));

const Login = () => {
  return (
    <Page
      boxProps={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 60px)',
        bgcolor: theme.palette.primary.light,
      }}
    >
      <Paper elevation={2}>
        <Box padding={4} maxWidth={400}>
          <Box display='flex' flexDirection='column'>
            <Text
              typographyProps={{
                color: '#696868',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Ticket Management
            </Text>

            <Text typographyProps={{ color: '#9A9494' }}>
              Acesse agora para continuar utilizando a aplicação.
            </Text>

            <Box
              width='100%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginY={3}
            >
              <img src={Logo} alt='Logo raise' width={140} />
            </Box>

            <Box>
              <form>
                <Box display='flex' flexDirection='column' gap={2}>
                  <StyledLoginInput
                    fullWidth
                    placeholder='Seu usuário aqui'
                    inputProps={{ 'aria-label': 'seu usuário aqui' }}
                  />

                  <StyledLoginInput
                    fullWidth
                    placeholder='Sua senha aqui'
                    inputProps={{ 'aria-label': 'sua senha aqui' }}
                  />

                  <StyledLoginInput
                    fullWidth
                    placeholder='O código de sua empresa aqui'
                    inputProps={{
                      'aria-label': 'o código de sua empresa aqui',
                    }}
                  />

                  <StyledButton fullWidth>ACESSE AGORA</StyledButton>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Page>
  );
};

export default Login;
