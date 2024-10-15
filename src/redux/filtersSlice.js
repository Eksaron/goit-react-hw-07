import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { changeFilter } = searchFilterSlice.actions;
export const selectNameFilter = (state) => state.searchFilter.searchText;

export default searchFilterSlice.reducer;
