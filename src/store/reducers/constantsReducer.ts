import {createSlice} from '@reduxjs/toolkit';
// types
import Colors from '../../assets/colors/colors';

const initialState = {
  palette: Colors,
  isDarkMode: false,
};

export const constantsSlice = createSlice({
  name: 'constants',
  initialState: initialState,
  reducers: {},
});

export const {} = constantsSlice.actions;

export default constantsSlice.reducer;
