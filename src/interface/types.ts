import { ReactNode } from "react";

export interface NewsDTO {
  id: string;
  content: string;
  created_at: string;
}

export interface OrderNewsDTO {
  id: string;
  content: string;
  created_at: string;
  orderNo: number;
}
export interface EditNewsDTO  {
  id: string;
  content: string;
}
export interface TaskDTO  {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
  mail: string;
}
export interface EditTaskDTO  {
  id: string;
  title: string;
  mail: string;
}

export interface CreateTaskDTO  {
  title: string;
  mail: string;
}

export interface UpdateTaskDTO  {
  id: string;
  title: string;
}

export interface LayoutDTO {
  children: ReactNode;
  title: string;
}
