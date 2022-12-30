import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultMenu: "1",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    pushDefaultMenu(state, action) {
      state.defaultMenu = action.payload
    },
    clearDefaultMenu(state, action) {
      state.defaultMenu = "1"
    },
  },
});
const { actions, reducer } = menuSlice;

export const { pushDefaultMenu, clearDefaultMenu } = actions;
export const selectMenu = (state) => state["menu"].defaultMenu;

export default menuSlice.reducer;
