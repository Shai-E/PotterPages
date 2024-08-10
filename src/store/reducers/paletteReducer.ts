import {createSlice} from '@reduxjs/toolkit';
// types
import Colors from '../../assets/colors/colors';

const initialState = {
  palette: Colors,
  isDarkMode: false,
};

export const paletteSlice = createSlice({
  name: 'colors',
  initialState: initialState,
  reducers: {},
});

export const {} = paletteSlice.actions;

export default paletteSlice.reducer;
