import {ArtistType} from "@/src/types/ArtistType";

export interface AlbumType {
    id: string,
    name: string,
    image: string,
    artists: ArtistType[],
    tracks: AlbumTrack[],
    genres: String[],
    total_tracks: number
}

export interface AlbumTrack {
    id: string,
    name: string,
    image: string,
    artists: ArtistType[],
    duration_ms: number,
    track_number: number
}
