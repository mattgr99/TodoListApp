import { TaskToDO } from "./task-to-do";

export interface Folder {
    id: number,
    name: string,
    taskList?: TaskToDO[]
}
