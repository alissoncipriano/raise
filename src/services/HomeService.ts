import { useDispatch } from 'react-redux';
import {
  setChamados,
  setChamadoDetalhes,
  setChamadoMensagens,
  deleteChamado,
} from 'store/ChamadosSlice';
import { hideLoad, showLoad } from 'store/LinearLoadSlice';

import {
  chamadosAbertosMock,
  chamadosFechadosMock,
  detalhesChamadoFechadoMock,
  detalhesChamadoMock,
  mensagensChamadoMock,
} from 'mocks';

const HomeService = () => {
  const dispatch = useDispatch();

  const getChamados = async () => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(
          setChamados([...chamadosAbertosMock, ...chamadosFechadosMock])
        );
        dispatch(hideLoad());
      }, 500);
    } catch (error) {}
  };

  const getChamadoDetails = async (idChamado: string) => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        // dispatch(setChamadoDetalhes(detalhesChamadoMock));
        dispatch(setChamadoDetalhes(detalhesChamadoFechadoMock));
        dispatch(setChamadoMensagens(mensagensChamadoMock));

        dispatch(hideLoad());
      }, 500);
    } catch (error) {}
  };

  const removeChamado = async (idChamado: string) => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(deleteChamado(idChamado));

        dispatch(hideLoad());
      }, 500);
    } catch (error) {}
  };

  const avaliaChamado = async (idChamado: string) => {
    try {
      // inserir requisição para API aqui

      dispatch(showLoad());

      await setTimeout(() => {
        dispatch(hideLoad());
      }, 500);
    } catch (error) {}
  };

  return { getChamados, getChamadoDetails, removeChamado, avaliaChamado };
};

export default HomeService;
