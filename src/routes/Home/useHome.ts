import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLoaded, selectChamados } from 'store/ChamadosSlice';

import _isEmpty from 'lodash/isEmpty';

const useHome = () => {
  const [openDetalhesModal, setOpenDetalhesModal] = useState(false);
  const [idChamadoDetalhes, setIdChamadoDetalhes] = useState('');
  const [openAddChamadoModal, setOpenAddChamadoModal] = useState(false);

  const handleCloseDetalhesModal = () => setOpenDetalhesModal(false);
  const handleOpenDetalhesModal = () => setOpenDetalhesModal(true);
  const handleOpenAddChamadoModal = () => setOpenAddChamadoModal(true);
  const handleCloseAddChamadoModal = () => setOpenAddChamadoModal(false);

  const loaded = useSelector(selectLoaded);
  const chamados = useSelector(selectChamados);

  let chamadosAbertos: typeof chamados = [];
  let chamadosFechados: typeof chamados = [];

  if (!_isEmpty(chamados)) {
    chamadosAbertos = chamados.filter((chamado) => chamado.closed === true);
    chamadosFechados = chamados.filter((chamado) => chamado.closed === false);
  }

  return {
    loaded,
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
  };
};

export default useHome;
