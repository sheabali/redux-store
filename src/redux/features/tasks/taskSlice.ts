import { RootState } from '@/redux/store';
import { ITask } from '@/types';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  tasks: ITask[];
  filter: 'all' | 'low' | 'medium' | 'high';
}

type DraftTask = Pick<ITask, 'title' | 'description' | 'priority' | 'dueDate'>;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const initialState: InitialState = {
  tasks: [
    {
      id: '1234',
      title: 'Initial State',
      description: 'Create home page.',
      dueDate: '20',
      isCompleted: false,
      priority: 'high',
    },
  ],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    togoleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<'all' | 'low' | 'medium' | 'high'>
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === 'low') {
    return state.todo.tasks.filter((task) => task.priority === 'low');
  } else if (filter === 'medium') {
    return state.todo.tasks.filter((task) => task.priority === 'medium');
  } else if (filter === 'high') {
    return state.todo.tasks.filter((task) => task.priority === 'high');
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, togoleCompleteState, deleteTask, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
