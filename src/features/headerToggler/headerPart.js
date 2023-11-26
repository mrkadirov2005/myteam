import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  value: 'myteam',
}
//TODO rename this folder as reducers
export const headerReducer = createSlice({
  name: 'Update_header_part',
  initialState,
  reducers: {
    about:(state)=>{
      state.value="about";

    },
    myteam:(state)=>{
      state.value='myteam'
    },
    home:(state)=>{
      state.value="home"
    },
    contact:(state)=>{
      state.value='contact'
    }

  },
})

// Action creators are generated for each case reducer function
export const { about,myteam,home,contact} = headerReducer.actions

export default headerReducer.reducer