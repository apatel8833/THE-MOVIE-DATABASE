import axios from "axios";
import { NOW_PLAYING, POPULAR_MOVIE, TOP_RATED, TRENDING_MOVIE } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const NowPlayingSlice = createSlice({
    name:"nowplaying",
    initialState:{
        nowplaying:[],
    },
    reducers:{
        setNowplaying:(state,action)=>{
            state.nowplaying = action.payload
        }
    }

})

export const {setNowplaying} = NowPlayingSlice.actions;

export default NowPlayingSlice.reducer;


export function NowplayingData (load){
    return async function NowplayingDatathunk (dispatch,getState){

        try {
            const{data} = await axios.get(`${NOW_PLAYING}&page=${load}`);
            dispatch(setNowplaying(data.results));
        } catch (error) {
            console.log(error);
        }

    }
}