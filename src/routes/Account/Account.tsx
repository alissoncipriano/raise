import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectPictureURL,
  selectUserName,
  selectLoaded,
  selectCompanyCode,
  selectCreationDate,
  selectAccountType,
  selectOffice,
  selectOpenedTickets,
  selectClosedTickets,
  selectCompanyPictureURL,
  selectEmail,
  selectUser,
  selectCompany,
  selectBornDate,
} from 'store/UserSlice';

import Page from 'components/Page';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import Text from 'components/Text';

import { deepOrange } from '@mui/material/colors';

import UserService from 'services/UserService';
import { theme } from 'theme/theme';
import { StyledFormInput } from 'components/StyledFormInput/StyledFormInput.styles';
import { StyledButton } from 'components/StyledButton/StyledButton.styles';
import { showAlert } from 'store/AlertSlice';

export type UserInfoProps = {
  userName: string;
  companyCode: string;
  creationDate: string;
  accountType: string;
  office: string;
  closedTickets?: string;
  openedTickets?: string;
  pictureURL: string;
  companyPictureURL?: string;
  email: string;
  bornDate: string;
  user: string;
  company: string;
};

const Account = () => {
  const { getUserInfo, updateUserPassword } = UserService();
  const dispatch = useDispatch();

  const {
    register,
    getValues,
    reset,
    formState: { dirtyFields, errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      retypePassword: '',
    },
  });

  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [openConfirmModalPassword, setOpenConfirmModalPassword] =
    useState(false);
  const [openSuccessModalPassword, setOpenSuccessModalPassword] =
    useState(false);

  const picture = useSelector(selectPictureURL);
  const companyPicture = useSelector(selectCompanyPictureURL);
  const name = useSelector(selectUserName);

  const email = useSelector(selectEmail);
  const user = useSelector(selectUser);
  const company = useSelector(selectCompany);
  const bornDate = useSelector(selectBornDate);

  const loaded = useSelector(selectLoaded);
  const companyCode = useSelector(selectCompanyCode);
  const creationDate = useSelector(selectCreationDate);
  const accountType = useSelector(selectAccountType);
  const office = useSelector(selectOffice);
  const openedTickets = useSelector(selectOpenedTickets);
  const closedTickets = useSelector(selectClosedTickets);

  const fetchUserInfo = async () => await getUserInfo();

  const handleSubmitClick = async () => {
    if (Object.values(errors).length > 0)
      dispatch(
        showAlert({
          message: Object.values(errors)[0]?.message as string,
        })
      );
    else {
      setOpenConfirmModalPassword(true);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Page
      boxProps={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vw',
        boxSizing: 'border-box',
        bgcolor: '#F4F4F4',
      }}
    >
      <Dialog
        open={openModalPassword}
        sx={{
          zIndex: 100000000,
        }}
      >
        <Box
          padding={2}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          gap={3}
        >
          <form
            style={{
              width: '100%',
            }}
          >
            <Box
              width='100%'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
              boxSizing='border-box'
              padding={2}
            >
              <StyledFormInput
                fullWidth
                placeholder='Senha'
                inputProps={{ 'aria-label': 'senha' }}
                type='password'
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
                placeholder='Repetir senha'
                inputProps={{ 'aria-label': 'repetir senha' }}
                type='password'
                {...register('retypePassword', {
                  required: 'Campo repetir senha obrigatório',
                  minLength: {
                    value: 8,
                    message: 'A senha deve ter ao menos 8 caractéres',
                  },
                })}
              />
            </Box>
          </form>

          <Box display='flex' justifyContent='flex-end' gap={2} width='100%'>
            <Button
              onClick={() => {
                setOpenModalPassword(false);
              }}
              variant='outlined'
            >
              Cancelar
            </Button>

            <StyledButton
              onClick={() => {
                handleSubmitClick();
              }}
              disabled={Object.entries(dirtyFields).length === 0}
            >
              OK
            </StyledButton>
          </Box>
        </Box>
      </Dialog>

      <Dialog
        open={openConfirmModalPassword}
        sx={{
          zIndex: 100000000,
        }}
      >
        <Box
          padding={5}
          boxSizing='border-box'
          display='flex'
          alignItems='flex-start'
          gap={5}
        >
          <Text>
            Você tem certeza de que deseja excluir seu ticket? A ação é
            irreversível!
          </Text>
        </Box>

        <DialogActions>
          <Button onClick={() => setOpenConfirmModalPassword(false)}>
            Não
          </Button>
          <Button
            onClick={async () => {
              await updateUserPassword(getValues().password);

              setOpenSuccessModalPassword(true);
            }}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openSuccessModalPassword}
        sx={{
          zIndex: 100000000,
        }}
      >
        <Box
          padding={5}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          gap={3}
        >
          <Box width={300}>
            <Text
              typographyProps={{
                color: '#5B5555',
                fontWeight: 600,
                fontSize: '0.9em',
                textAlign: 'center',
              }}
            >
              A solicitação foi enviada para nosso time técnico. Em breve você
              deverá receber a nova senha no e-mail!
            </Text>
          </Box>

          <StyledButton
            onClick={() => {
              setOpenSuccessModalPassword(false);
              setOpenModalPassword(false);
              setOpenConfirmModalPassword(false);
              reset();
            }}
          >
            OK
          </StyledButton>
        </Box>
      </Dialog>

      <Box
        boxSizing='border-box'
        width={700}
        bgcolor='#FFF'
        padding={5}
        borderRadius={2}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              width='100%'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
            >
              {loaded ? (
                <>
                  {picture ? (
                    <Avatar
                      alt='Foto de perfil'
                      src={picture}
                      sx={{ width: 100, height: 100 }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        bgcolor: deepOrange[500],
                        width: 100,
                        height: 100,
                        fontSize: '2em',
                      }}
                    >
                      {name.charAt(0)}
                    </Avatar>
                  )}
                </>
              ) : (
                <Skeleton variant='circular' width={100} height={100} />
              )}

              <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap={1}
              >
                {loaded ? (
                  <>
                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontSize: '1.3em',
                        fontWeight: 600,
                      }}
                    >
                      {name}
                    </Text>

                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontSize: '1em',
                        fontWeight: 500,
                      }}
                    >
                      Empresa código: {companyCode}
                    </Text>

                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontSize: '1em',
                        fontWeight: 500,
                        marginTop: -1,
                      }}
                    >
                      Conectado desde: {creationDate}
                    </Text>

                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontSize: '1em',
                        fontWeight: 500,
                        marginTop: -1,
                      }}
                    >
                      Tipo de conta: {accountType}
                    </Text>

                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontSize: '1em',
                        fontWeight: 500,
                        marginTop: -1,
                      }}
                    >
                      Cargo: {office}
                    </Text>

                    {openedTickets && (
                      <Text
                        typographyProps={{
                          color: '#5B5555',
                          fontSize: '1em',
                          fontWeight: 500,
                          marginTop: -1,
                        }}
                      >
                        Tickets abertos: {openedTickets}
                      </Text>
                    )}

                    {closedTickets && (
                      <Text
                        typographyProps={{
                          color: '#5B5555',
                          fontSize: '1em',
                          fontWeight: 500,
                          marginTop: -1,
                        }}
                      >
                        Tickets fechados: {closedTickets}
                      </Text>
                    )}

                    {companyPicture && (
                      <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        marginTop={3}
                        gap={3}
                      >
                        <Text
                          typographyProps={{
                            color: '#5B5555',
                            fontSize: '1em',
                            fontWeight: 600,
                          }}
                        >
                          Colaborador(a):
                        </Text>

                        <img
                          src={companyPicture}
                          width={150}
                          alt='Logo empresa'
                        />
                      </Box>
                    )}
                  </>
                ) : (
                  <>
                    <Skeleton variant='rectangular' width={100} height={20} />
                    <Skeleton variant='rectangular' width={150} height={20} />
                    <Skeleton variant='rectangular' width={200} height={20} />
                    <Skeleton variant='rectangular' width={230} height={20} />
                    <Skeleton variant='rectangular' width={140} height={20} />
                    <Skeleton variant='rectangular' width={180} height={20} />
                    <Skeleton variant='rectangular' width={160} height={20} />
                    <Skeleton variant='rectangular' width={155} height={20} />
                  </>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              width='100%'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='flex-start'
              gap={2}
              bgcolor={theme.palette.primary.light}
              borderRadius={2}
            >
              <form
                style={{
                  width: '100%',
                }}
              >
                <Box
                  width='100%'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='flex-start'
                  gap={2}
                  boxSizing='border-box'
                  padding={2}
                >
                  <FormControl fullWidth>
                    <InputLabel>Nome:</InputLabel>
                    <StyledFormInput
                      fullWidth
                      placeholder='Nome'
                      inputProps={{ 'aria-label': 'nome' }}
                      value={name}
                      disabled
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>E-mail:</InputLabel>
                    <StyledFormInput
                      fullWidth
                      placeholder='Nome'
                      inputProps={{ 'aria-label': 'e-mail' }}
                      value={email}
                      disabled
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Data de nascimento:</InputLabel>
                    <StyledFormInput
                      fullWidth
                      placeholder='Data de nascimento'
                      inputProps={{ 'aria-label': 'nascimento' }}
                      value={bornDate}
                      disabled
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Usuário:</InputLabel>
                    <StyledFormInput
                      fullWidth
                      placeholder='Usuário'
                      inputProps={{ 'aria-label': 'usuário' }}
                      value={user}
                      disabled
                    />
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>Empresa:</InputLabel>
                    <StyledFormInput
                      fullWidth
                      placeholder='Empresa'
                      inputProps={{ 'aria-label': 'empresa' }}
                      value={company}
                      disabled
                    />
                  </FormControl>
                </Box>
              </form>

              <Box boxSizing='border-box' padding={2} width='100%'>
                <StyledButton
                  fullWidth
                  onClick={() => {
                    setOpenModalPassword(true);
                  }}
                >
                  Redefinir senha
                </StyledButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Account;
