import {AppDispatch} from "@/src/redux/store";
import {GET_ALBUM_DETAIL} from "@/src/redux/types";
import MusicService from "@/src/services/music-service";

export const getAlbumDetail = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await MusicService.getAlbumDetail(id);
        dispatch({
            type: GET_ALBUM_DETAIL,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
