import axios from "axios";
import { TV_AIRING_TODAY, TV_POPULAR } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const TvAiringSlice = createSlice({
    name:"tvairing",
    initialState:{
        tvairing:[]
    },
    reducers:{
        setAiring:(state,action)=>{
            state.tvairing = action.payload
        }
    }
})

export const {setAiring} = TvAiringSlice.actions

export default TvAiringSlice.reducer



export function TvairingData(load){
    return async function TvairingDatathunk(dispatch,action){
        try {
            const {data} = await axios.get(`${TV_AIRING_TODAY}&page=${load}`);
            dispatch(setAiring(data.results));
        } catch (error) {
            console.log(error);
        }

    }

}