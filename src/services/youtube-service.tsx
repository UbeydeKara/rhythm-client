import http from "./http-common";

const serviceUrl = "/youtube"

const findVideoId = (trackId: string, searchQuery: string) => {
    return http.post(serviceUrl + "/find", {
        trackId,
        searchQuery
    });
};

const YoutubeService = {
    findVideoId
};

export default YoutubeService;