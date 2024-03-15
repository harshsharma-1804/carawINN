import {configureStore,applyMiddleware} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        User: userReducer
    }
},applyMiddleware(thunk));

export default store;