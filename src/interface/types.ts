export interface News {
  id: string;
  content: string;
  created_at: string;
}
export interface EditNews {
  id: string;
  content: string;
}
export interface Task {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
  mail: string;
}
export interface EditTask {
  id: string;
  title: string;
  mail: string;
}

export interface CreateTask {
  title: string;
  mail: string;
}

export interface UpdateTask {
  id: string;
  title: string;
}
