import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {getUsers} from '../actions/userActions';

const initialState = {
  users: [],
  remoteUsers: [],
  pending: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Kullanıcı başarılı bir şekilde eklendi.');
    },
    updateUser: (state, action) => {
      state.users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      Alert.alert('Kullanıcı başarılı bir şekilde silindi.');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.remoteUsers = action.payload;
        state.pending = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const {addNewUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
