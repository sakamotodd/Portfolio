import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateTaskDTO, EditNewsDTO, EditTaskDTO } from '../interface/types';
import { RootState } from './store';

export interface uiState {
  editTask: EditTaskDTO;
  editNews: EditNewsDTO;
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
    resetEditNews: (state) => {
      state.editNews = initialState.editNews;
    },
  },
});

export const { setEditTask, resetEditTask, setEditNews, resetEditNews } = uiSlice.actions;
export const selectTask = (state: RootState) => state.ui.editTask;
export const selectNews = (state: RootState) => state.ui.editNews;

export default uiSlice.reducer;
