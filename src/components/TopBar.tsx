import {Box, IconButton, Stack, Typography} from "@mui/material";
import {ShuffleIcon} from "@/src/theme/overrides/CustomIcons";
import {PlayArrow} from "@mui/icons-material";
import React from "react";
import usePlayer from "@/src/hooks/usePlayer";
import {SongType} from "@/src/types/SongType";
import {useAppSelector} from "@/src/redux/hooks";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

interface ITopBar {
    title: string,
    subtitle?: string
}

export default function TopBar({title, subtitle}: ITopBar) {
    const tracks: SongType[] = useAppSelector(x => x.tracks);
    const {playSong} = usePlayer();

    const playTracks = (mode: any) => {
        const trackId = mode === "shuffle" ? Math.floor(Math.random() * tracks.length) : 0;
        playSong(tracks[trackId]);
    }

    return(
        <Stack direction="row" alignItems="center">
            <Box>
                <Typography variant="subtitle1" color="primary">{subtitle}</Typography>
                <Typography variant="h3">{title}</Typography>
            </Box>

            <Stack direction="row" ml="auto" spacing={1.5}>
                <IconButton aria-label="mix" sx={{bgcolor: "divider"}} onClick={() => playTracks("shuffle")}>
                    <ShuffleIcon/>
                </IconButton>
                <IconButton aria-label="play" sx={iconButtonStyle} onClick={playTracks}>
                    <PlayArrow/>
                </IconButton>
            </Stack>
        </Stack>
    );
};
