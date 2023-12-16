import {Box, List, ListItem, ListItemButton, ListItemText, Skeleton, Typography} from "@mui/material";
import {AlbumTrack} from "@/src/types/AlbumType";
import {ArtistType} from "@/src/types/ArtistType";
import {artistNames} from "@/src/utils/artistNames";
import {useCallback, useState} from "react";
import {PlayArrow} from "@mui/icons-material";
import {millisToDuration} from "@/src/utils/durationUtil";
import usePlayer from "@/src/hooks/usePlayer";

const ItemIcon = ({hoverId, track_number}: {hoverId: number, track_number: number}) => (
    hoverId === track_number ?
        <ListItemText secondary={<PlayArrow/>} sx={{flex: "none", position: "absolute", left: {xs: 0, md: 15}, top: 17}}/>
        :
        <ListItemText secondary={track_number} sx={{flex: "none", position: "absolute", left: {xs: 5, md: 23}}}/>
);

const ListItemSkeleton = () => (
    <ListItem>
        <Skeleton sx={{transform: "none", width: "100%", height: 50}}/>
    </ListItem>
);

export default function TrackList({albumTracks, artists}: {albumTracks: AlbumTrack[], artists: ArtistType[]}) {
    const [hoverId, setHoverId] = useState(-1);
    const {playSong} = usePlayer();

    const playItem = useCallback(() => {
        playSong(albumTracks[hoverId - 1]);
    }, [albumTracks, hoverId, playSong]);

    const Item = useCallback(({item}: {item: AlbumTrack}) => (
        <ListItemButton key={item.track_number}
                        onClick={playItem}
                        onMouseEnter={() => setHoverId(item.track_number)}
                        onMouseLeave={() => setHoverId(-1)} sx={{position: "relative"}}>
            <ItemIcon track_number={item.track_number} hoverId={hoverId}/>
            <Box ml={{xs: 2, md: 5}}>
                <Typography fontWeight="bold" variant="body2">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {artistNames(artists)}
                </Typography>
            </Box>
            <ListItemText secondary={millisToDuration(item.duration_ms)}
                          sx={{flex: "none", ml: "auto", display: {xs: "none", md: "initial"}}}/>
        </ListItemButton>
    ), [artists, hoverId, playItem]);

    return(
        <List>
            {albumTracks?.map((item, index) => (
                item ? <Item key={index} item={item}/> : <ListItemSkeleton key={index}/>
            ))}
        </List>
    );
};
