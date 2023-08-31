import { Box, darken } from '@mui/material';
import { theme } from 'theme/theme';

import Logo from 'assets/svg/logoFooter.svg';
import Text from 'components/Text/Text';

const Footer = () => {
  return (
    <Box
      width='100%'
      display='flex'
      justifyContent='space-around'
      flexWrap='wrap'
      columnGap={10}
      rowGap={5}
      boxSizing='border-box'
      padding={5}
      bgcolor={darken(theme.palette.primary.light, 0.05)}
      borderTop={`1px solid ${darken(theme.palette.primary.light, 0.1)}`}
    >
      <img src={Logo} alt='Logo Raise' />

      <Box
        display='flex'
        flexWrap='wrap'
        columnGap={10}
        rowGap={3}
        justifyContent='center'
      >
        <Box maxWidth={400}>
          <Text
            typographyProps={{
              color: '#686464',
              fontSize: 12,
            }}
          >
            | CAMPINAS Av. Cônego Antônio Roccato, 593 - Jardim Santa Monica -
            Campinas – SP Fone: (19) 98709-8642 | 0800 000 00 00 E-mail:
            contato@raiseconsultoria.com.br RAISE CONSULTORIA E ASSESSORIA LTDA.
            CNPJ: 01.0101.010/0001-00
          </Text>
        </Box>

        <Box maxWidth={400}>
          <Text
            typographyProps={{
              color: '#686464',
              fontSize: 12,
            }}
          >
            | SERVIÇOS Gestão empresarial estratégica Soluções tecnológicas para
            empresas Consultoria e assessoria empresarial From raise, to rise!
            🚀
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
