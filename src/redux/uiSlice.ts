import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsVariableDTO, EditNewsDTO, EditTaskDTO, UpdateNewsDTO } from '../interface/types';
import { RootState } from './store';

export interface uiState {
  editTask: EditTaskDTO;
  editNews: EditNewsDTO;
  selectNews: NewsVariableDTO;
  updateNews: UpdateNewsDTO;
}
const initialState: uiState = {
  editTask: {
    id: '',
    title: '',
    mail: '',
  },

  editNews: {
    id: '',
    content: '',
    orderNo: null,
    title: '',
    name: '',
    email: '',
    photoURL: '',
  },

  selectNews: {
    content: '',
    orderNo: 0,
    title: '',
    name: '',
    email: '',
    photoURL: '',
  },

  updateNews: {
    id: '',
    content: '',
    title: '',
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setEditTask: (state, action: PayloadAction<EditTaskDTO>) => {
      state.editTask = action.payload;
    },
    resetEditTask: (state) => {
      state.editTask = initialState.editTask;
    },
    setEditTitle: (state, action: PayloadAction<NewsVariableDTO>) => {
      state.selectNews = action.payload;
    },

    setUpdateNewsReducer: (state, action: PayloadAction<UpdateNewsDTO>) => {
      state.updateNews = action.payload;
    },

    resetUpdateNews: (state) => {
      state.updateNews = initialState.updateNews;
    },
    resetEditTitle: (state) => {
      state.selectNews = initialState.selectNews;
    },
    resetEditNews: (state) => {
      state.editNews = initialState.editNews;
    },
  },
});

export const {
  setEditTask,
  resetEditTask,
  setUpdateNewsReducer,
  setEditTitle,
  resetEditNews,
  resetEditTitle,
  resetUpdateNews,
} = uiSlice.actions;
export const selectTask = (state: RootState) => state.ui.editTask;
export const selectNews = (state: RootState) => state.ui.selectNews;
export const selectUpdateNews = (state: RootState) => state.ui.updateNews;

export default uiSlice.reducer;
