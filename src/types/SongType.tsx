import {ArtistType} from "@/src/types/ArtistType";

export interface SongType {
    id: string,
    name: string,
    image: string,
    artists: ArtistType[]
}
