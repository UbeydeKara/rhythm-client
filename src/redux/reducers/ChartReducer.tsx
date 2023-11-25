import {GET_WEEKLY_ALBUMS, GET_WEEKLY_ARTISTS, GET_WEEKLY_RELEASES, GET_WEEKLY_TRACKS} from "@/src/redux/types";
import {SongType} from "@/src/types/SongType";
import {AnyAction, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    weeklyTracks: Array(20).fill(undefined),
    weeklyAlbums: Array(20).fill(undefined),
    weeklyArtists: Array(20).fill(undefined),
    weeklyReleases: Array(20).fill(undefined)
}

function ChartReducer(state = initialState, action: PayloadAction<SongType[]> | AnyAction) {
    const { type, payload } = action;

    switch (type) {
        case GET_WEEKLY_TRACKS:
            return {...state, weeklyTracks: payload};
        case GET_WEEKLY_ALBUMS:
            return {...state, weeklyAlbums: payload};
        case GET_WEEKLY_ARTISTS:
            return {...state, weeklyArtists: payload};
        case GET_WEEKLY_RELEASES:
            return {...state, weeklyReleases: payload};
        default:
            return state;
    }
}

export default ChartReducer;