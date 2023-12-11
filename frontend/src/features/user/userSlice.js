import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice ({
    name: 'user',
    initialState :{
        currentUser: null,
        isFetching : false,
        error: false
    },
    reducers :{
        loginStart: (state)=>{
            state.isFetching=true
        },
        loginSucces: (state,action) =>{
            state.isFetching=false,
            state.currentUser=action.payload,
            state.error=false
        },
        loginError: (state)=>{
            state.isFetching=false,
            state.error=true
        }
    }
})
export const {loginStart, loginSucces,loginError}=userSlice.actions;
export default userSlice.reducer;