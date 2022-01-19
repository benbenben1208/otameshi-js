import { Task } from './task';
import { Article } from './article';
export interface User  {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    tasks?: [Task];
    articles?: [Article];
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  };