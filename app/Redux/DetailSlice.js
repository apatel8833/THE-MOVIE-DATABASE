import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const DetailSlice = createSlice({
    name:"detail",
    initialState:{
        detail:[]
    },
    reducers:{
        setDetail:(state,action)=>{
            state.detail = action.payload
        }
    }
})

export const {setDetail} = DetailSlice.actions

export default DetailSlice.reducer



export function detailData(id){
    return async function detailDatathunk(dispatch,getState){
        try {
            const {data} = await axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=03f1548b65a603b16ff790d32bce2275&append_to_response=videos
            `)
            dispatch(setDetail(data));
        } catch (error) {
            console.log(error);
        }
    }
}