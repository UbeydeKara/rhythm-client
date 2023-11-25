import http from "./http-common";

const serviceUrl = "/chart"

const getWeeklyTracks = () => {
    return http.get(serviceUrl + "/weeklyTracks");
};

const getWeeklyAlbums = () => {
    return http.get(serviceUrl + "/weeklyAlbums");
};

const getWeeklyArtists = () => {
    return http.get(serviceUrl + "/weeklyArtists");
};

const getWeeklyReleases = () => {
    return http.get(serviceUrl + "/weeklyReleases");
};

const ChartService = {
    getWeeklyTracks,
    getWeeklyAlbums,
    getWeeklyArtists,
    getWeeklyReleases
};

export default ChartService;