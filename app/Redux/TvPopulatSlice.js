import axios from "axios";
import { TV_POPULAR } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const TvPopularSlice = createSlice({
    name:"tvpopular",
    initialState:{
        tvpopular:[]
    },
    reducers:{
        setTvpopular:(state,action)=>{
            state.tvpopular = action.payload
        }
    }
})

export const {setTvpopular} = TvPopularSlice.actions

export default TvPopularSlice.reducer



export function TvpopularData(load){
    return async function TvpopularDatathunk(dispatch,action){
        try {
            const {data} = await axios.get(`${TV_POPULAR}&page=${load}`);
            dispatch(setTvpopular(data.results));
        } catch (error) {
            console.log(error);
        }

    }

}