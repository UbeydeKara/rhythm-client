import http from "./http-common";

const serviceUrl = "/music"

const getPopularAlbums = () => {
    return http.get(serviceUrl + "/top50");
};

const TrackService = {
    getPopularAlbums,
};

export default TrackService;