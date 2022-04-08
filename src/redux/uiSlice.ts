import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  NewsVariableDTO,
  EditNewsDTO,
  EditTaskDTO,
  UpdateNewsDTO,
  CreateCommentDTO,
} from '../interface/types';
import { RootState } from './store';

export interface uiState {
  editTask: EditTaskDTO;
  editNews: EditNewsDTO;
  selectNews: NewsVariableDTO;
  updateNews: UpdateNewsDTO;
  editComment: CreateCommentDTO;
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
    title: '',
    name: '',
    email: '',
    photoURL: '',
  },

  selectNews: {
    content: '',
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
  editComment: {
    groupNewsId: '',
    commentText: '',
    commentName: '',
    commentPhotURL: '',
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
    setCommentNewsReducer: (state, action: PayloadAction<CreateCommentDTO>) => {
      state.editComment = action.payload;
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
    resetCommentNewsReducer: (state) => {
      state.editComment = initialState.editComment;
    },
  },
});

export const {
  setEditTask,
  resetEditTask,
  setUpdateNewsReducer,
  setCommentNewsReducer,
  setEditTitle,
  resetEditNews,
  resetEditTitle,
  resetUpdateNews,
  resetCommentNewsReducer,
} = uiSlice.actions;
export const selectTask = (state: RootState) => state.ui.editTask;
export const selectNews = (state: RootState) => state.ui.selectNews;
export const selectUpdateNews = (state: RootState) => state.ui.updateNews;
export const commentNewsState = (state: RootState) => state.ui.editComment;
export default uiSlice.reducer;
