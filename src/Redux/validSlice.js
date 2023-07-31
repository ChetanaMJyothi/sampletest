import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogIn: false,
}

export const validSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    logoutUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogIn = false;
    },
    loginUser :(state)=>{
        state.isLogIn =true;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {logoutUser, loginUser } = validSlice.actions

export default validSlice.reducer