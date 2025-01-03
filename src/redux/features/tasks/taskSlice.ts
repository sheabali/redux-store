
import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[]
  filter: 'all' | 'high'| 'medium'| 'low'
}

const initialState : InitialState =  {
  tasks : [
    {
      id : "1234",
      title: "Initial State",
      description: "Create home page.",
      dueDate : '20',
      isCompleted: false,
      priority: "High"
    }
  ],
  filter: 'all'
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {}
})

export const selectTasks = (state: RootState) => {
  return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
  return state.todo.filter
}

export default taskSlice.reducer