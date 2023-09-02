import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showAlert } from 'store/AlertSlice';

import _isEmpty from 'lodash/isEmpty';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Text from 'components/Text';
import { StyledFormInput } from 'components/StyledFormInput/StyledFormInput.styles';
import { StyledButton } from 'components/StyledButton/StyledButton.styles';

import { CATEGORIAS_CHAMADOS } from '../../constants';

import Logo from 'assets/png/Logo.png';

import HomeService from 'services/HomeService';

type AddChamadoProps = {
  open: boolean;
  handleClose: () => void;
};

const AddChamado = ({ open, handleClose }: AddChamadoProps) => {
  const dispatch = useDispatch();
  const { getChamados } = HomeService();

  const [openFinalModal, setOpenFinalModal] = useState(false);

  const fetchChamados = async () => await getChamados();

  const {
    register,
    getValues,
    reset,
    formState: { dirtyFields, errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      category: '',
      description: '',
    },
  });

  const handleClickAddButton = async () => {
    console.log(dirtyFields);
    if (Object.values(errors).length > 0)
      dispatch(
        showAlert({
          message: Object.values(errors)[0]?.message as string,
        })
      );
    else {
      // console.log(getValues());
      await fetchChamados();
      setOpenFinalModal(true);
    }
  };

  return (
    <>
      <Dialog
        open={openFinalModal}
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
              Agradecemos por seu chamado! Logo nossa equipe técnica deverá
              entrar em contato!
            </Text>
          </Box>

          <StyledButton
            onClick={() => {
              setOpenFinalModal(false);
              handleClose();
              reset();
            }}
          >
            OK
          </StyledButton>
        </Box>
      </Dialog>

      <Dialog
        open={open}
        fullWidth
        sx={{
          zIndex: 100000000,
        }}
      >
        <Box
          padding={5}
          boxSizing='border-box'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          width='100%'
          gap={5}
        >
          <Text
            typographyProps={{
              color: '#5B5555',
              fontWeight: 600,
              fontSize: '1.3em',
            }}
          >
            Como nós podemos te ajudar?
          </Text>

          <form
            style={{
              width: '100%',
            }}
          >
            <Box display='flex' flexDirection='column' gap={2} width='100%'>
              <Box display='flex' flexDirection='column' gap={1}>
                <Text
                  typographyProps={{
                    color: '#5B5555',
                    fontWeight: 500,
                    fontSize: '1em',
                  }}
                >
                  Nome do chamado
                </Text>

                <StyledFormInput
                  sx={{
                    width: 300,
                  }}
                  placeholder='Insira o nome do chamado'
                  {...register('name', {
                    required: 'Campo Nome obrigatório',
                  })}
                />
              </Box>

              <Box display='flex' flexDirection='column' gap={2}>
                <Text
                  typographyProps={{
                    color: '#5B5555',
                    fontWeight: 500,
                    fontSize: '1em',
                  }}
                >
                  Categoria
                </Text>

                <Autocomplete
                  disablePortal
                  options={CATEGORIAS_CHAMADOS}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label='Selecione a categoria' />
                  )}
                  {...register('category', {
                    required: 'Campo Categoria obrigatório',
                  })}
                />
              </Box>

              <Box display='flex' flexDirection='column' gap={1} width='100%'>
                <Text
                  typographyProps={{
                    color: '#5B5555',
                    fontWeight: 500,
                    fontSize: '1em',
                  }}
                >
                  Descrição do chamado
                </Text>

                <StyledFormInput
                  fullWidth
                  multiline
                  rows={6}
                  maxRows={15}
                  placeholder='Descreva seu problema'
                  {...register('description', {
                    required: 'Campo Descrição obrigatório',
                  })}
                />
              </Box>
            </Box>
          </form>
        </Box>

        <DialogActions>
          <Box
            paddingX={5}
            paddingBottom={5}
            boxSizing='border-box'
            display='flex'
            width='100%'
            alignItems='center'
            justifyContent='space-between'
          >
            <img src={Logo} width={200} alt='Logo Raise' />

            <Box display='flex' gap={2}>
              <Button onClick={handleClose}>Cancelar</Button>
              <StyledButton
                disabled={_isEmpty(dirtyFields)}
                variant='contained'
                onClick={handleClickAddButton}
              >
                Enviar chamado
              </StyledButton>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddChamado;
