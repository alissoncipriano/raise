import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { theme } from 'theme/theme';

import Page from 'components/Page';
import Text from 'components/Text/Text';

import { StyledButton } from 'components/StyledButton/StyledButton.styles';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Slide_1 from 'assets/jpg/slide_1.jpg';
import Medal from 'assets/png/medal.png';
import Check from 'assets/png/check.png';
import Laptop from 'assets/png/laptop.png';
import Service from 'assets/png/service.png';
import Graphic from 'assets/png/graphic.png';
import Plus from 'assets/png/plus.png';

export const StyledCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 25,
  maxWidth: '25vw',

  '@media only screen and (max-width: 700px)': {
    maxWidth: '100%',
  },
}));

const Servicos = () => {
  return (
    <Page
      boxProps={{
        bgcolor: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box width='100%' boxSizing='border-box' padding='10vw'>
        <Grid container spacing={15}>
          <Grid item xs={12} lg={6}>
            <Box display='flex' flexDirection='column' gap={0.8}>
              <Text
                typographyProps={{
                  fontSize: 23,
                  fontWeight: 700,
                }}
              >
                Ticket Management
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                }}
              >
                Sendo uma ferramenta Raise©, Ticket Management é o melhor que o
                mercado pode oferecer para sua empresa no que tange a gestão de
                tickets! Baseada na biblioteca ITIL® v.3, Ticket Management
                dispõe o melhor da tecnologia para administrar seus tickets.
              </Text>

              <Box
                width={200}
                display='flex'
                flexDirection='column'
                marginTop={4}
              >
                <StyledButton>SAIBA MAIS</StyledButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Splide
                hasTrack={false}
                options={{
                  rewind: true,
                  rewindByDrag: true,
                  width: 400,
                  gap: '1rem',
                  arrows: false,
                  height: 320,
                  autoplay: true,
                  interval: 2000,
                }}
              >
                <SplideTrack>
                  <SplideSlide>
                    <img src={Slide_1} width={400} alt='Interface Raise' />
                  </SplideSlide>

                  <SplideSlide>
                    <img src={Slide_1} width={400} alt='Interface Raise' />
                  </SplideSlide>

                  <SplideSlide>
                    <img src={Slide_1} width={400} alt='Interface Raise' />
                  </SplideSlide>
                </SplideTrack>
              </Splide>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box width='100%' height={50} bgcolor='#fff' />

      <Box width='100%' boxSizing='border-box' paddingX='10vw' paddingY={8}>
        <Box width='100%' textAlign='center'>
          <Text
            typographyProps={{
              fontWeight: 800,
            }}
          >
            NOSSOS SERVIÇOS
          </Text>
        </Box>

        <Box paddingX='10vw' paddingY={8}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Box
                display='flex'
                alignItems='center'
                flexDirection='column'
                rowGap={4}
              >
                <StyledCard>
                  <img src={Medal} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Sistema de gestão de tickets líder no mercado!
                  </Text>
                </StyledCard>

                <StyledCard>
                  <img src={Laptop} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Suporte a SLAs (Service Level Agreement). Responda
                    rapidamente aos seus clientes prioritários!
                  </Text>
                </StyledCard>

                <StyledCard>
                  <img src={Check} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Ambiente extremamente seguro! Mantenha a integridade,
                    privacidade e disponibilidade da informação de seus clientes
                    e colaboradores!
                  </Text>
                </StyledCard>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box
                display='flex'
                alignItems='center'
                flexDirection='column'
                rowGap={4}
              >
                <StyledCard>
                  <img src={Service} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Suporte especializado e com atendimento 24h para resolver
                    qualquer problema ou dúvidas de sua aplicação!
                  </Text>
                </StyledCard>

                <StyledCard>
                  <img src={Graphic} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Aumente seus indicadores através da gestão de tempo! Levante
                    sua lucratividade através de nosso sistema!
                  </Text>
                </StyledCard>

                <StyledCard>
                  <img src={Plus} alt='medal icon' width={50} />
                  <Text
                    typographyProps={{
                      color: '#686464',
                      fontSize: 14.5,
                    }}
                  >
                    Tudo isso, e muito mais! Venha expandir seus negócios com a
                    gente!
                  </Text>
                </StyledCard>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
};

export default Servicos;
