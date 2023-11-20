import http from "./http-common";

const serviceUrl = "/music"

const getPopularAlbums = () => {
    return http.get(serviceUrl + "/top50");
};

const getNewReleases = () => {
    return http.get(serviceUrl + "/newReleases");
};

const findVideoId = (trackId: string, searchQuery: string) => {
    return http.post(serviceUrl + "/find/videoId", {
        trackId,
        searchQuery
    });
};

const TrackService = {
    getPopularAlbums,
    getNewReleases,
    findVideoId
};

export default TrackService;