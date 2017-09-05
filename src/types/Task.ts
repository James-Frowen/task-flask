import { TaskPriority } from "./TaskPriority";

export type Task = {
    name: string;
    description: string;
    priority: TaskPriority;
    dateCreated?: string | Date;
};