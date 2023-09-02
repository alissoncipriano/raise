import UserService from 'services/UserService';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { showAlert } from 'store/AlertSlice';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Page from 'components/Page';
import Text from 'components/Text';

import Logo from 'assets/svg/logoFull.svg';

import { theme } from 'theme/theme';

import { StyledButton } from 'components/StyledButton/StyledButton.styles';
import { StyledFormInput } from 'components/StyledFormInput/StyledFormInput.styles';

const Login = () => {
  const { authenticate } = UserService();
  const dispatch = useDispatch();

  const {
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues,
    formState: { dirtyFields, errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      user: '',
      password: '',
      companyCode: '',
    },
  });

  const disabledFormButton = Object.entries(dirtyFields).length === 3;

  const handleSubmitClick = async () => {
    if (Object.values(errors).length > 0)
      dispatch(
        showAlert({
          message: Object.values(errors)[0]?.message as string,
        })
      );
    else {
      // console.log(getValues());
      await authenticate();
    }
  };

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
                  <StyledFormInput
                    fullWidth
                    placeholder='Seu usuário aqui'
                    inputProps={{ 'aria-label': 'seu usuário aqui' }}
                    {...register('user', {
                      required: 'Campo usuário obrigatório',
                    })}
                  />

                  <StyledFormInput
                    fullWidth
                    placeholder='Sua senha aqui'
                    type='password'
                    inputProps={{ 'aria-label': 'sua senha aqui' }}
                    {...register('password', {
                      required: 'Campo senha obrigatório',
                      minLength: {
                        value: 8,
                        message: 'A senha deve ter ao menos 8 caractéres',
                      },
                    })}
                  />

                  <StyledFormInput
                    fullWidth
                    placeholder='O código de sua empresa aqui'
                    inputProps={{
                      'aria-label': 'o código de sua empresa aqui',
                    }}
                    {...register('companyCode', {
                      required: 'Campo código da empresa obrigatório',
                      minLength: {
                        value: 3,
                        message:
                          'O código da empresa deve ter ao menos 3 caractéres',
                      },
                    })}
                  />

                  <StyledButton
                    fullWidth
                    disabled={!disabledFormButton}
                    onClick={handleSubmitClick}
                  >
                    ACESSE AGORA
                  </StyledButton>
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
