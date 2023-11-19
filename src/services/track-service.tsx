import http from "./http-common";

const serviceUrl = "/music"

const getPopularAlbums = () => {
    return http.get(serviceUrl + "/top50");
};

const findVideoId = (trackId: string, searchQuery: string) => {
    return http.post(serviceUrl + "/find/videoId", {
        trackId,
        searchQuery
    });
};

const TrackService = {
    getPopularAlbums,
    findVideoId
};

export default TrackService;