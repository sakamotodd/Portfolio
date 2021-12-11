import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditNews, EditTask } from '../interface/types';
import { RootState } from './store';

export interface uiState {
  editTask: EditTask;
  editNews: EditNews;
}

const initialState: uiState = {
  editTask: {
    id: '',
    title: '',
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
    setEditTask: (state, action: PayloadAction<EditTask>) => {
      state.editTask = action.payload;
    },
    resetEditTask: (state) => {
      state.editTask = initialState.editTask;
    },
    setEditNews: (state, action: PayloadAction<EditNews>) => {
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
