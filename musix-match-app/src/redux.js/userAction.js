import { getUserLyrics,readLyrics } from '../api/serverApi';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getlyrics = createAsyncThunk('user/lyrics', async (data) => {
    console.log('user/lyrics');
    const response = await getUserLyrics(data);
    if (response) {
        // console.log('response',response);
        return response
    }
});

export const readlyrics = createAsyncThunk('user/readLyrics', async (data) => {
    console.log('user/readLyrics');
    const response = await readLyrics(data);
    if (response) {
        // console.log('response',response);
        return response
    }
});