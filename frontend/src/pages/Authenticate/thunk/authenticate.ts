import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async () => {});

export const signup = createAsyncThunk('user/signup', async () => {});
