"use client"
import axios from "axios";
import { POPULAR_MOVIE, TOP_RATED, TRENDING_MOVIE } from "../Utils/Constant";
import { useState } from "react";

const { createSlice } = require("@reduxjs/toolkit");

const TrendiSlice = createSlice({
    name:"trending",
    initialState:{
        trending:[]
    },
    reducers:{
        setTrending:(state,action)=>{
            state.trending = action.payload
        }
    }
})

export const {setTrending} = TrendiSlice.actions;

export default TrendiSlice.reducer;


export function TrendingData (){

    return async function TrendingDatathunk (dispatch,getState){

        try {
            const{data} = await axios.get(`${TRENDING_MOVIE}`);
            dispatch(setTrending(data.results));
            dispatch(setLoaderr())
        } catch (error) {
            console.log(error);
        }

    }
}