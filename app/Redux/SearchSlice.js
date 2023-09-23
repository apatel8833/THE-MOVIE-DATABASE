import axios from "axios";
import { NOW_PLAYING, POPULAR_MOVIE, SEARCH, TOP_RATED, TRENDING_MOVIE } from "../Utils/Constant";
import Search from "../Components/Search";

const { createSlice } = require("@reduxjs/toolkit");

const SearchSlice = createSlice({
    name:"search",
    initialState:{
        search:[]
    },
    reducers:{
        setSearch:(state,action)=>{
            state.search = action.payload
        }
    }

})

export const {setSearch} = SearchSlice.actions;

export default SearchSlice.reducer;


export function SearchData (input){
    return async function SearchDatathunk (dispatch,getState){

        try {
            const{data} = await axios.get(`${SEARCH}${input}`);
            console.log("SEARCH",data.results);
            dispatch(setSearch(data.results));
        } catch (error) {
            console.log(error);
        }

    }
}