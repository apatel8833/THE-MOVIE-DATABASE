import axios from "axios";
import { TV_AIRING_TODAY, TV_ON_TV, TV_POPULAR } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const TvOntvSlice = createSlice({
    name:"tvontv",
    initialState:{
        tvontv:[]
    },
    reducers:{
        setOntv:(state,action)=>{
            state.tvontv = action.payload
        }
    }
})

export const {setOntv} = TvOntvSlice.actions

export default TvOntvSlice.reducer



export function TvontvData(load){
    return async function TvontvDatathunk(dispatch,action){
        try {
            const {data} = await axios.get(`${TV_ON_TV}&page=${load}`);
            dispatch(setOntv(data.results));
        } catch (error) {
            console.log(error);
        }

    }

}