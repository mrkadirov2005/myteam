import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { AuthcompanyName, Authemail, Authname } from './selector/selector'

export const initialState = {
  info:0,

}


//TODO rename this folder as reducers
export const Authreducer = createSlice({
  name: 'update_user_Info',
  initialState,
  reducers: {
    userInfo:(state,payload)=>{
        state.info=payload.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { userInfo} = Authreducer.actions

export default Authreducer.reducer