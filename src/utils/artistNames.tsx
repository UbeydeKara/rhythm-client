import {ArtistType} from "@/src/types/SongType";
import React from "react";
import Link from "next/link";

export const artistNames = (artists: ArtistType[]) => (
    artists.map((item, index) => {
        const comma = (index + 1) < artists.length ? ", " : "";
        return item.name + comma;
    }).join()
);

export const artistNamesAsLink = (artists: ArtistType[]) => (
    artists.map((item, index) => {
        const comma = (index + 1) < artists.length ? ", " : "";
        return <Link key={item.id} href="/">{item.name + comma}</Link>
    })
);