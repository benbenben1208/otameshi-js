import { User } from './user';
export interface Task {
    id: number;
    user_id: number;
    user?: {
        user: User;
    }
    task_name: string;
    is_done: boolean;
    created_at: string;
    updated_at: string;
}
