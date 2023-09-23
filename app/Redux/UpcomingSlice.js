import axios from "axios";
import { POPULAR_MOVIE, TRENDING_MOVIE,UPCOMING_MOVIE } from "../Utils/Constant";

const { createSlice } = require("@reduxjs/toolkit");

const UpcomingSlice = createSlice({
    name:"upcoming",
    initialState:{
        upcoming:[]
    },
    reducers:{
        setUpcoming:(state,action)=>{
            state.upcoming = action.payload
        }
    }

})

export const {setUpcoming} = UpcomingSlice.actions;

export default UpcomingSlice.reducer;


export function UpcomingData (load){
    return async function UpcomingDatathunk (dispatch,getState){

        try {
            const{data} = await axios.get(`${UPCOMING_MOVIE}&page=${load}`);
            dispatch(setUpcoming(data.results));
        } catch (error) {
            console.log(error);
        }

    }
}