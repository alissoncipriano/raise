export const loginMock = {
  userName: 'User',
  companyCode: '123',
};

export const userInfoMock = {
  userName: 'User',
  email: 'mateus.gandara@fatec.sp.gov.br',
  bornDate: '22/11/2002',
  user: 'user',
  company: 'Padatempo - Delivery',
  companyCode: '123',
  creationDate: '21/01/2021',
  accountType: 'Técnico',
  office: 'Analista de suporte',
  closedTickets: '398',
  openedTickets: undefined,
  pictureURL: '',
  companyPictureURL: '',
};

export const chamadosAbertosMock = [
  {
    title: 'Ticket #12086 - Agendamento de férias',
    description: 'Olá, boa noite! Gostaria de realizar o agendamento de min...',
    time: '14h27min',
    atendant: 'Erick Silva',
    closed: true,
    id: '123',
  },
  {
    title: 'Ticket #12086 - Agendamento de férias',
    description: 'Olá, boa noite! Gostaria de realizar o agendamento de min...',
    time: '14h27min',
    atendant: 'Erick Silva',
    closed: true,
    id: '456',
  },
  {
    title: 'Ticket #12086 - Agendamento de férias',
    description: 'Olá, boa noite! Gostaria de realizar o agendamento de min...',
    time: '14h27min',
    atendant: 'Erick Silva',
    closed: true,
    id: '789',
  },
];

export const chamadosFechadosMock = [
  {
    title: 'Ticket #12085 - Retirada de carro',
    description:
      'Olá, boa tarde! Farei uma viagem na próxima quinta. Podemos agen...',
    time: '15h03min',
    atendant: 'Bruna Aguiar',
    closed: false,
    id: '112',
  },
  {
    title: 'Ticket #12085 - Retirada de carro',
    description:
      'Olá, boa tarde! Farei uma viagem na próxima quinta. Podemos agen...',
    time: '15h03min',
    atendant: 'Bruna Aguiar',
    closed: false,
    id: '345',
  },
];

export const detalhesChamadoMock = {
  title: 'Agendamento de férias',
  id: '12086',
  atendant: 'Erick Silva',
  time: '14h27min',
  category: 'Férias',
  applicant: 'Giovana Akemi',
  closed: false,
};

export const detalhesChamadoFechadoMock = {
  title: 'Retirada de carro',
  id: '12086',
  atendant: 'Erick Silva',
  time: '14h27min',
  category: 'Reserva de carro',
  applicant: 'Giovana Akemi',
  closingDate: '06 de abril',
  closingTime: '08:23',
  closed: true,
};

export const mensagensChamadoMock = {
  id: '12086',
  mensagens: [
    {
      user: 'Giovana Akemi',
      time: '05 de abril de 2022 às 23:37',
      message:
        'Olá, boa noite! Gostaria de realizar o agendamento de minhas férias. Poderiam me auxiliar com esta solicitação, por favor',
      closed: false,
      lastEdited: 'Última edição em 05 de abril de 2022 às 18:00.',
    },
    {
      user: 'User',
      time: '06 de abril de 2022 às 04:15',
      message:
        'Boa noite, Giovana! Como vai? Giovana, estaremos realizando a solicitação! Retornarei assim que concluída! Atenciosamente, ',
      closed: true,
      lastEdited: 'Última edição em 06 de abril de 2022 às 08:23.',
    },
  ],
};
