import { createSlice } from '@reduxjs/toolkit'
import { getlyrics,readlyrics} from "./userAction";

const lyrics = createSlice({
    name: 'lyrics',
    initialState: {
        lyrics:[]
    },
    extraReducers: builder => {

        builder.addCase(
            getlyrics.fulfilled,
            (state, { payload }) => {
                console.log(`getlyrics.fulfilled,`);
                return {
                    ...state,
                    lyrics: payload,
                    isLoading: false,
                    isLoggedIn: false,
                }
            }
        )
        builder.addCase(
            getlyrics.pending,
            (state, { payload }) => {
                console.log(`getlyrics.pending,`);
                return { ...state, isLoading: true }
            }
        )
        builder.addCase(
            getlyrics.rejected,
            (state, { payload }) => {
                console.log(`getlyrics.rejected,`);
                return { ...state, isLoading: false }
            }
        )

        builder.addCase(
            readlyrics.fulfilled,
            (state, { payload }) => {
                console.log(`getlyrics.fulfilled,`);
                return {
                    ...state,
                    readlyrics: payload,
                    isLoading: false,
                    isLoggedIn: false,
                }
            }
        )
        builder.addCase(
            readlyrics.pending,
            (state, { payload }) => {
                console.log(`getlyrics.pending,`);
                return { ...state, isLoading: true }
            }
        )
        builder.addCase(
            readlyrics.rejected,
            (state, { payload }) => {
                console.log(`getlyrics.rejected,`);
                return { ...state, isLoading: false }
            }
        )
        
    }
})

export default lyrics.reducer