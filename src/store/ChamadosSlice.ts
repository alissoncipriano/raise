import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChamadoProps } from 'components/Chamado/Chamado';
import { MensagensProps } from 'components/Mensagem/Mensagem';

const initialState = {
  chamados: [] as ChamadoProps[],
  loaded: false as boolean,
  chamadoDetalhes: {} as Record<string, any>,
  chamadoMensagens: {} as MensagensProps,
};

const chamadosSlice = createSlice({
  name: 'chamados',
  initialState,
  reducers: {
    setChamados(state, { payload }: PayloadAction<ChamadoProps[]>) {
      return {
        ...state,
        loaded: true,
        chamados: payload,
      };
    },
    setChamadoDetalhes(state, { payload }: PayloadAction<Record<string, any>>) {
      return {
        ...state,
        chamadoDetalhes: payload,
      };
    },
    setChamadoMensagens(state, { payload }: PayloadAction<MensagensProps>) {
      return {
        ...state,
        chamadoMensagens: payload,
      };
    },
    clearChamadoDetalhes(state) {
      return {
        ...state,
        chamadoDetalhes: {},
        chamadoMensagens: {} as MensagensProps,
      };
    },
    deleteChamado(state, { payload }: PayloadAction<string>) {
      return {
        ...state,
        chamados: state.chamados.filter((chamado) => chamado.id !== payload),
      };
    },
  },
});

export const {
  setChamados,
  setChamadoDetalhes,
  setChamadoMensagens,
  clearChamadoDetalhes,
  deleteChamado,
} = chamadosSlice.actions;
export const selectLoaded = (state: any) => state.chamados.loaded as boolean;
export const selectChamados = (state: any) =>
  state.chamados.chamados as ChamadoProps[];
export const selectChamadoDetalhes = (state: any) =>
  state.chamados.chamadoDetalhes as Record<string, any>;
export const selectChamadoMensagens = (state: any) =>
  state.chamados.chamadoMensagens as MensagensProps;

export default chamadosSlice.reducer;
