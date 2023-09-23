import axios from "axios";
import { NOW_PLAYING, POPULAR_MOVIE, TOP_RATED, TRENDING_MOVIE } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const TopRatedSlice = createSlice({
    name:"toprated",
    initialState:{
        toprated:[]
    },
    reducers:{
        setToprated:(state,action)=>{
            state.toprated = action.payload
        }
    }

})

export const {setToprated} = TopRatedSlice.actions;

export default TopRatedSlice.reducer;


export function TopratedData (load){
    return async function TopratedDatathunk (dispatch,getState){

        try {
            const{data} = await axios.get(`${TOP_RATED}&page=${load}`);
            dispatch(setToprated(data.results));
        } catch (error) {
            console.log(error);
        }

    }
}