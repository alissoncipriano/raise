import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectChamadoDetalhes,
  selectChamadoMensagens,
  clearChamadoDetalhes,
} from 'store/ChamadosSlice';
import { selectLoading } from 'store/LinearLoadSlice';

import _isEmpty from 'lodash/isEmpty';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Rating from '@mui/material/Rating';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { StyledButton } from 'components/StyledButton/StyledButton.styles';

import Logo from 'assets/png/Logo.png';

import HomeService from 'services/HomeService';
import Text from 'components/Text/Text';
import { theme } from 'theme/theme';
import Mensagem from 'components/Mensagem/Mensagem';

type ChamadoDetalhesProps = {
  open: boolean;
  handleClose: () => void;
  idChamado: string;
};

const ChamadoDetalhes = ({
  open,
  handleClose,
  idChamado,
}: ChamadoDetalhesProps) => {
  const dispatch = useDispatch();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(2);

  const { getChamadoDetails, removeChamado, avaliaChamado } = HomeService();

  const linearLoading = useSelector(selectLoading);

  const chamadoDetails = useSelector(selectChamadoDetalhes);
  const chamadoMensagens = useSelector(selectChamadoMensagens);

  const loading = _isEmpty(chamadoDetails);

  const fetchChamadoDeailts = async () => await getChamadoDetails(idChamado);
  const fetchRemoveChamado = async () => await removeChamado(idChamado);
  const fetchAvaliaChamado = async () => await avaliaChamado(idChamado);

  useEffect(() => {
    fetchChamadoDeailts();
  }, []);

  return (
    <>
      <Dialog
        open={openDeleteModal}
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
          <ErrorOutlineIcon color='error' fontSize='large' />
          <Text>
            Você tem certeza de que deseja excluir seu ticket? A ação é
            irreversível!
          </Text>
        </Box>

        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)}>Não</Button>
          <Button
            onClick={() => {
              fetchRemoveChamado();

              setTimeout(() => {
                handleClose();
                setOpenDeleteModal(false);
              }, 500);
            }}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={() => {
          dispatch(clearChamadoDetalhes());
          handleClose();
        }}
        maxWidth='md'
        fullWidth
        sx={{
          zIndex: 100000000,
        }}
      >
        <Box padding={5} boxSizing='border-box'>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box>
                <img src={Logo} alt='Logo Raise' width={200} />

                <Box marginTop={3}>
                  {loading ? (
                    <Skeleton variant='rectangular' width={210} height={20} />
                  ) : (
                    <Text
                      typographyProps={{
                        color: '#5B5555',
                        fontWeight: 600,
                        fontSize: '1.2em',
                      }}
                    >
                      {chamadoDetails.title}
                    </Text>
                  )}
                </Box>

                <Box
                  marginTop={2}
                  display='flex'
                  flexDirection='column'
                  gap={1}
                >
                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={110} height={20} />
                    ) : (
                      <Text
                        typographyProps={{
                          color: '#5B5555',
                          fontWeight: 600,
                          fontSize: '1em',
                        }}
                      >
                        Ticket: #{chamadoDetails.id}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={240} height={20} />
                    ) : (
                      <Text
                        typographyProps={{
                          color: '#686464',
                          fontWeight: 600,
                          fontSize: '1em',
                        }}
                      >
                        {chamadoDetails.closed
                          ? 'Atendido por: '
                          : 'Em atendimento por: '}
                        {chamadoDetails.atendant}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={180} height={20} />
                    ) : (
                      <Text
                        typographyProps={{
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          fontSize: '1em',
                        }}
                      >
                        Aberto há: {chamadoDetails.time}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={120} height={20} />
                    ) : (
                      <Text
                        typographyProps={{
                          color: '#5B5555',
                          fontWeight: 500,
                          fontSize: '1em',
                        }}
                      >
                        Categoria: {chamadoDetails.category}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={220} height={20} />
                    ) : (
                      <Text
                        typographyProps={{
                          color: '#5B5555',
                          fontWeight: 500,
                          fontSize: '1em',
                        }}
                      >
                        Requerente: {chamadoDetails.applicant}
                      </Text>
                    )}
                  </Box>

                  <Box>
                    {loading ? (
                      <Skeleton variant='rectangular' width={200} height={20} />
                    ) : (
                      chamadoDetails.closed && (
                        <Box
                          marginTop={2}
                          display='flex'
                          flexDirection='column'
                          gap={5}
                        >
                          <Box
                            boxSizing='border-box'
                            padding={2}
                            bgcolor={theme.palette.primary.main}
                            maxWidth={300}
                            borderRadius={2}
                          >
                            <Text
                              typographyProps={{
                                color: '#FFF',
                                fontWeight: 500,
                                fontSize: '1em',
                                textAlign: 'center',
                              }}
                            >
                              Chamado encerrado em {chamadoDetails.closingDate},
                              às {chamadoDetails.closingTime}
                            </Text>
                          </Box>

                          <Box display='flex' flexDirection='column' gap={1}>
                            <Text
                              typographyProps={{
                                color: '#5B5555',
                                fontWeight: 500,
                              }}
                            >
                              Avalie o atendimento!
                            </Text>

                            <Rating
                              value={ratingValue}
                              onChange={(event, newValue) => {
                                fetchAvaliaChamado();
                                setRatingValue(newValue);
                              }}
                              disabled={linearLoading}
                            />
                          </Box>
                        </Box>
                      )
                    )}
                  </Box>
                </Box>

                {!chamadoDetails.closed && (
                  <Box
                    marginTop={5}
                    display='flex'
                    flexDirection='column'
                    gap={2}
                  >
                    <Box maxWidth={500}>
                      {loading ? (
                        <Skeleton
                          variant='rectangular'
                          width={250}
                          height={40}
                        />
                      ) : (
                        <StyledButton>Adicionar acompanhamento</StyledButton>
                      )}
                    </Box>

                    <Box maxWidth={500}>
                      {loading ? (
                        <Skeleton
                          variant='rectangular'
                          width={150}
                          height={40}
                        />
                      ) : (
                        <StyledButton
                          sx={{
                            backgroundColor: '#000',
                          }}
                          onClick={() => setOpenDeleteModal(true)}
                        >
                          Excluir chamado
                        </StyledButton>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid item sm={12} md={6}>
              <Box
                display='flex'
                flexDirection='column'
                gap={3}
                maxHeight='70vh'
                overflow='auto'
              >
                {loading ? (
                  <Box
                    display='flex'
                    flexDirection='column'
                    gap={3}
                    marginTop={10}
                  >
                    <Skeleton variant='rectangular' width={210} height={100} />
                    <Skeleton variant='rectangular' width={300} height={80} />
                    <Skeleton variant='rectangular' width={350} height={100} />
                  </Box>
                ) : (
                  chamadoMensagens.mensagens.map((mensagem, index) => (
                    <Mensagem
                      message={mensagem.message}
                      time={mensagem.time}
                      user={mensagem.user}
                      lastEdited={mensagem.lastEdited}
                      closed={mensagem.closed}
                      key={`${chamadoMensagens.id}-${index}`}
                    />
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChamadoDetalhes;
