import DetailSlice from "./DetailSlice";
import NowPlayingSlice from "./NowPlayingSlice";
import SearchSlice from "./SearchSlice";
import TopratedSlice from "./TopratedSlice";
import TrendingSlice from "./TrendingSlice";
import TvAiringSlice from "./TvAiringSlice";
import TvOntvSlice from "./TvOntvSlice";
import TvPopulatSlice from "./TvPopulatSlice";
import TvtopratedSlice from "./TvtopratedSlice";
import UpcomingSlice from "./UpcomingSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        trending:TrendingSlice,
        nowplaying:NowPlayingSlice,
        upcoming:UpcomingSlice,
        toprated:TopratedSlice,
        tvpopular:TvPopulatSlice,
        tvairing:TvAiringSlice,
        tvontv:TvOntvSlice,
        tvtoprated:TvtopratedSlice,
        search:SearchSlice,
        detail:DetailSlice
    }
})

export default store;