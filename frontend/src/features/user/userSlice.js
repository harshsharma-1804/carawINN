import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
    isUserValid: false,
    isUserLoggedIn: false,
    error: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login1Success: (state, action) => {
            state.user = action.payload
            state.isUserValid = true
            state.error = null
        },
        login1Failure: (state, action) => {
            state.user = null
            state.isUserValid = false
            state.error = action.payload
        },
        login2Success: (state, action) => {
            state.user = action.payload
            state.isUserLoggedIn = true
            state.error = null
        },
        login2Failure: (state, action) => {
            state.user = null
            state.isUserLoggedIn = false
            state.error = action.payload
        },
        registrationSuccess: (state,action) => {
            state.user = action.payload;
            state.error = null;
        },
        registrationFailure: (state,action) => {
            state.user = action.payload;
            state.error = action.payload;
        },
        logoutSuccess: (state,action) => {
            state.user = action.payload;
            state.isUserValid = false;
            state.isUserLoggedIn = false;
            state.error = null;
        },
        logoutFailure: (state,action) => {
            state.user = action.payload;
            state.error = action.payload;
        }
    }

    
})

export const {login1Success,login1Failure, login2Success, login2Failure,logoutSuccess, logoutFailure,registrationSuccess,registrationFailure} = userSlice.actions

export default userSlice.reducer 