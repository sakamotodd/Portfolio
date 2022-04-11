import { ReactNode } from 'react';

export interface NewsDTO {
  id: string;
  content: string;
  created_at: string;
  orderNo: number;
  title: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface PrivateNewsDTO {
  comments: GetCommentNewsDTO[];
  id: string;
  content: string;
  created_at: string;
  orderNo: number;
  title: string;
  name: string;
  email: string;
  photoURL: string;
}
export interface CreateCommentDTO {
  groupNewsId: string;
  commentText: string;
  commentPhotURL: string;
  commentName: string;
}

export interface TasksDTO {
  created_at: string;
  id: string;
  mail: string;
  title: string;
  user_id: string;
}

export interface GetCommentNewsDTO {
  commentId: string;
  commentText: string;
  commentOrderNo: number;
  group_news_id: string;
  comment_name: string;
  comment_photURL: string;
  comment_create_at: string;
}
export interface NewsVariableDTO {
  content: string;
  title: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface EditNewsDTO {
  id: string;
  content: string;
  title: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface UpdateNewsDTO {
  id: string;
  content: string;
  title: string;
}

export interface UpdateNewDTO {
  title?: string;
  content: string;
  id: any;
}
export interface TaskDTO {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
  mail: string;
}
export interface EditTaskDTO {
  id: string;
  title: string;
  mail: string;
}

export interface CreateTaskDTO {
  title: string;
  mail: string;
}

export interface UpdateTaskDTO {
  id: string;
  title: string;
}

export interface LayoutDTO {
  children: ReactNode;
  title: string;
  styles: string;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode?: boolean;
  listFlag?: boolean;
  setListFlag?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SideBarDTO {
  children: ReactNode;
  styles: string;
  listFlag: boolean;
  setListFlag: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef?: React.MutableRefObject<HTMLDivElement>;
}

export interface HeaderDTO {
  title: string;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  listFlag: boolean;
  setListFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignInFormDTO {
  email: string;
  password: string;
}

export interface SignUpFormDTO {
  email: string;
  password: string;
  pass: string;
  name: string;
}
