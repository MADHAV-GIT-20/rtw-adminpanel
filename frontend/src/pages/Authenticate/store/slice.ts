import { createSlice } from '@reduxjs/toolkit';
import { login, signup } from '../thunk/authenticate';

interface Authentication {
    loading: boolean;
    error?: string;
    token?: string;
}
const initialState: Authentication = {
    loading: false,
};

const authentication = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        }).addCase(signup.pending, (state) => {
            state.loading = true;
        });
    },

});

export default authentication;
