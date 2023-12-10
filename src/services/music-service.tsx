import http from "./http-common";

const serviceUrl = "/spotify"

const getAlbumDetail = (id: string) => {
    return http.get(serviceUrl + "/album/" + id);
};

const MusicService = {
    getAlbumDetail,
};

export default MusicService;
