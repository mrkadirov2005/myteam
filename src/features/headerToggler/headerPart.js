import { createSlice } from '@reduxjs/toolkit'
import Index from '../../components/myTeam/Container/Index'
import Aboutindex from '../../components/about/Container/Aboutindex'
import ContactsContainer from '../../components/contactPart/container/ContactsContainer'

export const initialState = {
  value: <Index/>,
}
//TODO rename this folder as reducers
export const headerReducer = createSlice({
  name: 'Update_header_part',
  initialState,
  reducers: {
    myteam:(state)=>{
      state.value=<Index/> 

    },
     about:(state)=>{
      state.value=<Aboutindex/>
    },
    contact:(state)=>{
      state.value=<ContactsContainer/>
    }

  },
})

// Action creators are generated for each case reducer function
export const { about,myteam,home,contact} = headerReducer.actions

export default headerReducer.reducer