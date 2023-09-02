import { useEffect } from 'react';

import _isEmpty from 'lodash/isEmpty';
import Servicos from 'routes/Servicos/Servicos';
import Page from 'components/Page';
import Text from 'components/Text';
import Chamado from 'components/Chamado';

import { LOCAL_STORAGE } from '../../constants';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { theme } from 'theme/theme';

import Flower from 'assets/png/flower.png';

import useHome from './useHome';
import HomeService from 'services/HomeService';
import ChamadoDetalhes from 'components/ChamadoDetalhes/ChamadoDetalhes';
import AddChamado from 'components/AddChamado/AddChamado';

var ls = require('local-storage');

const Home = () => {
  const user = ls.get(LOCAL_STORAGE.USER_NAME);
  const { getChamados } = HomeService();

  const {
    chamadosAbertos,
    chamadosFechados,
    openDetalhesModal,
    handleCloseDetalhesModal,
    handleOpenDetalhesModal,
    idChamadoDetalhes,
    setIdChamadoDetalhes,
    openAddChamadoModal,
    handleOpenAddChamadoModal,
    handleCloseAddChamadoModal,
  } = useHome();

  const fetchChamados = async () => await getChamados();

  useEffect(() => {
    fetchChamados();
  }, []);

  if (_isEmpty(user)) return <Servicos />;

  return (
    <Page
      boxProps={{
        bgcolor: theme.palette.primary.dark,
      }}
    >
      {openDetalhesModal && (
        <ChamadoDetalhes
          open={openDetalhesModal}
          handleClose={handleCloseDetalhesModal}
          idChamado={idChamadoDetalhes}
        />
      )}

      <AddChamado
        open={openAddChamadoModal}
        handleClose={handleCloseAddChamadoModal}
      />

      <Box boxSizing='border-box' paddingY={12} paddingX={11}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box display='flex' flexDirection='column' maxWidth={400} gap={2}>
              <Text
                typographyProps={{
                  fontWeight: 500,
                  fontSize: '1.2em',
                }}
              >
                Boa tarde, {user}!
              </Text>

              <Box
                display='flex'
                flexDirection='column'
                width='100%'
                borderRadius={2}
                overflow='hidden'
              >
                <Box
                  width='100%'
                  bgcolor={theme.palette.primary.light}
                  boxSizing='border-box'
                  padding={1}
                  textAlign='center'
                >
                  <Text
                    typographyProps={{
                      fontWeight: 600,
                    }}
                  >
                    Boas-vindas de volta!
                  </Text>
                </Box>

                <Box
                  width='100%'
                  bgcolor='#FFF'
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  gap={2}
                  padding={5}
                  boxSizing='border-box'
                >
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      color: '#000',
                      fontWeight: 600,
                      padding: 2,
                      boxSizing: 'border-box',
                    }}
                    onClick={handleOpenAddChamadoModal}
                  >
                    Abrir um novo chamado
                  </Button>

                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    gap={2}
                  >
                    <img src={Flower} width={120} />

                    <Box paddingX={3} boxSizing='border-box'>
                      <Text
                        typographyProps={{
                          color: '#686464',
                          fontWeight: 500,
                          textAlign: 'center',
                        }}
                      >
                        O conhecimento é a semente para seu crescimento!
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              width='100%'
              height='75vh'
              display='flex'
              flexDirection='column'
              overflow='auto'
            >
              <Text
                typographyProps={{
                  fontWeight: 500,
                  fontSize: '1.2em',
                }}
              >
                Seus chamados em atendimento!
              </Text>

              <Box display='flex' flexDirection='column' gap={2} marginTop={2}>
                {chamadosAbertos.map((chamado) => (
                  <Box
                    onClick={() => {
                      setIdChamadoDetalhes(chamado.id);
                      handleOpenDetalhesModal();
                    }}
                  >
                    <Chamado
                      title={chamado.title}
                      time={chamado.time}
                      description={chamado.description}
                      atendant={chamado.atendant}
                      closed={false}
                      id={chamado.id}
                    />
                  </Box>
                ))}
              </Box>

              <Box marginTop={5} />

              <Text
                typographyProps={{
                  fontWeight: 500,
                  fontSize: '1.2em',
                }}
              >
                Seus chamados encerrados!
              </Text>

              <Box display='flex' flexDirection='column' gap={2} marginTop={2}>
                {chamadosFechados.map((chamado) => (
                  <Box
                    onClick={() => {
                      setIdChamadoDetalhes(chamado.id);
                      handleOpenDetalhesModal();
                    }}
                  >
                    <Chamado
                      title={chamado.title}
                      time={chamado.time}
                      description={chamado.description}
                      atendant={chamado.atendant}
                      closed={chamado.closed}
                      id={chamado.id}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
