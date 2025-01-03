
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[]
}

const initialState : InitialState =  {
  task : [
    {
      id : "1234",
      title: "Initial State",
      description: "Create home page.",
      dueDate : '20',
      isCompleted: false,
      priority: "High"
    }
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {}
})

export default taskSlice.reducer