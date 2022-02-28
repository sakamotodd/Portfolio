import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsVariableDTO, EditNewsDTO, EditTaskDTO } from '../interface/types';
import { RootState } from './store';

export interface uiState {
  editTask: EditTaskDTO;
  editNews: EditNewsDTO;
  selectNews: NewsVariableDTO;
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
  },

  selectNews: {
    content: '',
    orderNo: 0,
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
    setEditNews: (state, action: PayloadAction<EditNewsDTO>) => {
      state.editNews = action.payload;
    },
    setEditTitle: (state, action: PayloadAction<NewsVariableDTO>) => {
      state.selectNews = action.payload;
    },
    resetEditTitle: (state) => {
      state.selectNews = initialState.selectNews;
    },
    resetEditNews: (state) => {
      state.editNews = initialState.editNews;
    },
  },
});

export const { setEditTask, resetEditTask, setEditNews, setEditTitle, resetEditNews, resetEditTitle } =
  uiSlice.actions;
export const selectTask = (state: RootState) => state.ui.editTask;
export const selectNews = (state: RootState) => state.ui.selectNews;

export default uiSlice.reducer;
