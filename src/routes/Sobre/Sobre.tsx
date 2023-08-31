import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Page from 'components/Page';
import Text from 'components/Text';
import { theme } from 'theme/theme';

import Illustration from 'assets/png/illustration.png';
import Goal from 'assets/png/goal.png';
import Binoculars from 'assets/png/binoculars.png';
import Hand from 'assets/png/hand.png';

const Sobre = () => {
  return (
    <Page>
      <Box width='100%' boxSizing='border-box' paddingX='15vw' paddingY='10vw'>
        <Grid container spacing={15}>
          <Grid item xs={12} lg={6}>
            <Text
              typographyProps={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                fontSize: 25,
              }}
            >
              Sobre nós
            </Text>

            <Box display='flex' flexDirection='column' gap={2} marginTop={2}>
              <Text
                typographyProps={{
                  color: '#686464',
                  fontSize: 14,
                }}
              >
                A Raise Consultoria e Assessoria LTDA. é uma empresa fundada no
                ano de 2021, na cidade de Campinas - São Paulo.
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontSize: 14,
                }}
              >
                Iniciada na Faculdade de Tecnologia de Campinas, tornou-se uma
                assessoria de referência! Por meio da tecnologia, a Raise visa
                aplicar melhorias em seus processos, a fim de aumentar a
                eficiência e lucratividade!
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontSize: 14,
                }}
              >
                Sendo uma ferramenta Raise©, Ticket Management é o melhor que o
                mercado pode oferecer para sua empresa no que tange a gestão de
                tickets! Baseada na biblioteca ITIL® v.3, Ticket Management
                dispõe o melhor da tecnologia para administrar seus tickets.
              </Text>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              width='100%'
              overflow='hidden'
              display='flex'
              justifyContent='center'
            >
              <img
                src={Illustration}
                alt='Buildinhg illustration'
                width='500vw'
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box width='100%' height={50} bgcolor={theme.palette.primary.light} />

      <Box width='100%' boxSizing='border-box' paddingX='15vw' paddingY='10vw'>
        <Grid container spacing={10}>
          <Grid item xs={12} lg={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              gap={2}
            >
              <Text
                typographyProps={{
                  color: '#575757',
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                Missão
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: '-15px',
                }}
              >
                Nossa missão é colaborar com o crescimento empresarial por meio
                da otimização de processos. Instaurar sistemas tecnológicos de
                ponta a fim de manter vantagem competitiva sobre as demais
                empresas. Tornar processos mais fluídos e menos cansativo para
                os colaboradores, diminuindo custos e tempo de execução.
              </Text>

              <img src={Goal} width={40} alt='Goal icon' />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              gap={2}
            >
              <Text
                typographyProps={{
                  color: '#575757',
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                Visão
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: '-15px',
                }}
              >
                A projeção de um futuro é essencial para o sucesso de uma
                empresa. A visão da Raise Consultoria foi construída ainda em
                sua fase de planejamento, antes mesmo da criação da empresa.
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: '-5px',
                }}
              >
                Nós buscamos reconhecimento pela excelência na entrega de
                resultados em assessoria e treinamento em gestão de empresas.
                Ansiamos pela confiança do mercado em cima de nossas soluções.
              </Text>

              <img src={Binoculars} width={40} alt='Goal icon' />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              gap={2}
            >
              <Text
                typographyProps={{
                  color: '#575757',
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                Valores
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: '-15px',
                }}
              >
                As pessoas são o centro de tudo: são quem compõem as empresas,
                são os consumidores, são o motivo de tudo acontecer da maneira
                como é.
              </Text>

              <Text
                typographyProps={{
                  color: '#686464',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: '-5px',
                }}
              >
                Prezamos fortemente a humanização. O respeito. A qualidade.
                Esperamos que possamos construir uma duradoura relação de
                confiança. Estaremos à disposição, sempre.
              </Text>

              <img src={Hand} width={40} alt='Goal icon' />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Sobre;
