import Box from '@mui/material/Box';
import { theme } from 'theme/theme';

import Text from 'components/Text';

export type ChamadoProps = {
  title: string;
  description: string;
  time: string;
  atendant: string;
  closed: boolean;
  id: string;
};

const Chamado = ({
  title,
  description,
  time,
  atendant,
  closed,
  id: string,
}: ChamadoProps) => {
  return (
    <Box
      boxSizing='border-box'
      paddingY={1}
      paddingX={2}
      bgcolor='#FFF'
      width='100%'
      borderRadius={2}
      sx={{ cursor: 'pointer' }}
    >
      <Box width='100%' display='flex' justifyContent='space-between' gap={3}>
        <Text
          typographyProps={{
            fontWeight: 500,
            color: '#5B5555',
          }}
        >
          {title}
        </Text>

        <Text
          typographyProps={{
            fontWeight: 500,
            color: theme.palette.primary.main,
          }}
        >
          {closed ? 'Fechado há ' : 'Aberto há '}
          {time}
        </Text>
      </Box>

      <Box width='100%' display='flex' justifyContent='space-between' gap={3}>
        <Box flex={3}>
          <Text
            typographyProps={{
              color: '#5B5555',
              fontSize: '.9em',
            }}
          >
            {description}
          </Text>
        </Box>

        <Box
          flex={2}
          maxHeight='100px'
          display='flex'
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          <Text
            typographyProps={{
              color: '#686464',
              fontSize: '.8em',
            }}
          >
            {closed ? 'Encerrado por ' : 'Em atendimento por '}
            {atendant}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Chamado;
