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

export interface NewsVariableDTO {
  content: string;
  orderNo: number;
  title: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface EditNewsDTO {
  id: string;
  content: string;
  orderNo: number;
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
  created_at: any;
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
