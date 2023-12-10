import {ArtistType} from "@/src/types/ArtistType";

export const artistNames = (artists: ArtistType[]) => (
    artists?.map((item) => (item.name)).join(", ")
);
