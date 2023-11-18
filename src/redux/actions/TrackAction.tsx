import {AppDispatch} from "@/src/redux/store";
import TrackService from "@/src/services/track-service";
import {GET_POPULAR_ALBUMS} from "@/src/redux/types";

export const getPopularAlbums = () => async (dispatch: AppDispatch) => {
    try {
        const res = await TrackService.getPopularAlbums();
        dispatch({
            type: GET_POPULAR_ALBUMS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
