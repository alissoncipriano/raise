import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Text from 'components/Text';

import { LOCAL_STORAGE } from '../../constants';
import { theme } from 'theme/theme';

export type MensagemProps = {
  user: string;
  time: string;
  message: string;
  lastEdited: string;
  closed: boolean;
};

export type MensagensProps = {
  id: string;
  mensagens: MensagemProps[];
};

var ls = require('local-storage');

const Mensagem = ({
  user,
  time,
  message,
  closed,
  lastEdited,
}: MensagemProps) => {
  const loggedUser = ls.get(LOCAL_STORAGE.USER_NAME);

  const handleMessageBgColor = () => {
    let bgColor = theme.palette.primary.light;

    if (loggedUser === user) bgColor = '#EEEEEE';
    if (closed) bgColor = '#DCF5E1';

    return bgColor;
  };

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      gap={0.5}
      position='relative'
    >
      <Text
        typographyProps={{
          color: '#686464',
          fontSize: '.7em',
        }}
      >
        {user} em {time}.
      </Text>

      <Box
        width='100%'
        boxSizing='border-box'
        padding={3}
        bgcolor={handleMessageBgColor}
        borderRadius={2}
      >
        <Text
          typographyProps={{
            color: '#5B5555',
            fontSize: '1em',
            marginBottom: 2,
          }}
        >
          {message}
        </Text>

        {closed && (
          <Box display='flex' justifyContent='flex-end' marginBottom={2}>
            <CheckCircleOutlineIcon />
          </Box>
        )}

        <Box display='flex' position='absolute' bottom={10} right={10}>
          <Text
            typographyProps={{
              color: '#686464',
              fontSize: '.7em',
            }}
          >
            {lastEdited}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Mensagem;
