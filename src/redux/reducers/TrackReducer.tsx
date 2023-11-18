import {GET_POPULAR_ALBUMS} from "../types";
import {SongType} from "@/src/types/SongType";
import {AnyAction, PayloadAction} from "@reduxjs/toolkit";

const initialState: SongType[] = [];

function TrackReducer(state = initialState, action: PayloadAction<SongType[]> | AnyAction) {
    const { type, payload } = action;

    switch (type) {
        case GET_POPULAR_ALBUMS:
            return payload;
        default:
            return state;
    }
}

export default TrackReducer;