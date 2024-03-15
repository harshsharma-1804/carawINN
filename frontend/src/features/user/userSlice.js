import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
    isUserValid: false,
    error: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.isUserValid = true
            state.error = null
        },
        loginFailure: (state, action) => {
            state.user = null
            state.isUserValid = false
            state.error = action.payload
        },
        registrationSuccess: (state,action) => {
            state.user = action.payload;
            state.error = null;
        },
        registrationFailure: (state,action) => {
            state.user = action.payload;
            state.error = action.payload;
        }
    }

    
})

export const {loginSuccess,loginFailure, registrationSuccess,registrationFailure} = userSlice.actions

export default userSlice.reducer 