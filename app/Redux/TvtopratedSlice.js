import axios from "axios";
import { TV_AIRING_TODAY, TV_ON_TV, TV_POPULAR, TV_TOP_RATED } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const TvtopratedSlice = createSlice({
    name:"tvtoprated",
    initialState:{
        tvtoprated:[]
    },
    reducers:{
        setToprated:(state,action)=>{
            state.tvtoprated = action.payload
        }
    }
})

export const {setToprated} = TvtopratedSlice.actions

export default TvtopratedSlice.reducer



export function TvtopratedData(load){
    return async function TvtopratedDatathunk(dispatch,action){
        try {
            const {data} = await axios.get(`${TV_TOP_RATED}&page=${load}`);
            dispatch(setToprated(data.results));
        } catch (error) {
            console.log(error);
        }

    }

}