import {GET_NEW_RELEASES, GET_POPULAR_ALBUMS} from "../types";
import {SongType} from "@/src/types/SongType";
import {AnyAction, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    top50: Array(20).fill(undefined),
    newReleases: Array(5).fill(undefined)
}

function TrackReducer(state = initialState, action: PayloadAction<SongType[]> | AnyAction) {
    const { type, payload } = action;

    switch (type) {
        case GET_POPULAR_ALBUMS:
            return {...state, top50: payload};
        case GET_NEW_RELEASES:
            return {...state, newReleases: payload};
        default:
            return state;
    }
}

export default TrackReducer;