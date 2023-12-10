import {GET_ALBUM_DETAIL} from "@/src/redux/types";
import {AnyAction, PayloadAction} from "@reduxjs/toolkit";
import {AlbumTrack, AlbumType} from "@/src/types/AlbumType";

const initialState = {
    tracks: Array(20).fill(undefined)
}

function AlbumReducer(state = initialState, action: PayloadAction<AlbumType[]> | AnyAction) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALBUM_DETAIL:
            return {...payload, tracks: payload.tracks.map((item: AlbumTrack) => (
                    {...item, image: payload.image}
                ))};
        default:
            return state;
    }
}

export default AlbumReducer;
