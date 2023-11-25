export interface SongType {
    id: string,
    name: string,
    image: string,
    artists: ArtistType[]
}

export interface ArtistType {
    id: string,
    name: string
}
