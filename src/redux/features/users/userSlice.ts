import { RootState } from '@/redux/store';
import { IUser } from '@/types';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  users: IUser[];
}

type DraftUser = Pick<IUser, 'name'>;

const initialState: InitialState = {
  users: [
    {
      id: '123',
      name: 'Shariful',
    },
    {
      id: '1234',
      name: 'Pranto',
    },
  ],
};

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
