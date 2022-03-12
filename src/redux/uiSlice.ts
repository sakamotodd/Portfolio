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
    setEditTitle: (state, action: PayloadAction<NewsVariableDTO>) => {
      state.selectNews = action.payload;
    },

    setEditOrderNo: (state, action: PayloadAction<string>) => {
      state.selectNews.content + action.payload;
    },
    // setEditContent: (state, action: PayloadAction<NewsVariableDTO>) => {
    // },
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
  setEditOrderNo,
  setEditTitle,
  resetEditNews,
  resetEditTitle,
} = uiSlice.actions;
export const selectTask = (state: RootState) => state.ui.editTask;
export const selectNews = (state: RootState) => state.ui.selectNews;

export default uiSlice.reducer;
