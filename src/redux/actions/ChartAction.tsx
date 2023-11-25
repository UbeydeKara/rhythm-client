import {AppDispatch} from "@/src/redux/store";
import ChartService from "@/src/services/chart-service";
import {GET_WEEKLY_ALBUMS, GET_WEEKLY_ARTISTS, GET_WEEKLY_RELEASES, GET_WEEKLY_TRACKS} from "@/src/redux/types";

export const getWeeklyTracks = () => async (dispatch: AppDispatch) => {
    try {
        const res = await ChartService.getWeeklyTracks();
        dispatch({
            type: GET_WEEKLY_TRACKS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const getWeeklyAlbums = () => async (dispatch: AppDispatch) => {
    try {
        const res = await ChartService.getWeeklyAlbums();
        dispatch({
            type: GET_WEEKLY_ALBUMS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const getWeeklyArtists = () => async (dispatch: AppDispatch) => {
    try {
        const res = await ChartService.getWeeklyArtists();
        dispatch({
            type: GET_WEEKLY_ARTISTS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}

export const getWeeklyReleases = () => async (dispatch: AppDispatch) => {
    try {
        const res = await ChartService.getWeeklyReleases();
        dispatch({
            type: GET_WEEKLY_RELEASES,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
}
