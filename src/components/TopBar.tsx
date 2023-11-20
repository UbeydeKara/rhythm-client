import {Box, IconButton, Stack, Typography} from "@mui/material";
import {ShuffleIcon} from "@/src/theme/overrides/CustomIcons";
import {PlayArrow} from "@mui/icons-material";
import React from "react";
import usePlayer from "@/src/hooks/usePlayer";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

interface ITopBar {
    title: string,
    subtitle?: string,
    playlist?: []
}

export default function TopBar({title, subtitle, playlist = []}: ITopBar) {
    const {playSong} = usePlayer();

    const playTracks = (mode: any) => {
        const trackId = mode === "shuffle" ? Math.floor(Math.random() * playlist.length) : 0;
        playSong(playlist[trackId]);
    }

    return(
        <Stack direction="row" alignItems="center" my={4}>
            <Box>
                <Typography variant="subtitle1" color="primary">{subtitle}</Typography>
                <Typography variant="h3">{title}</Typography>
            </Box>

            {playlist?.length > 0 &&
                <Stack direction="row" ml="auto" spacing={1.5}>
                    <IconButton aria-label="mix" sx={{bgcolor: "divider"}} onClick={() => playTracks("shuffle")}>
                        <ShuffleIcon/>
                    </IconButton>
                    <IconButton aria-label="play" sx={iconButtonStyle} onClick={playTracks}>
                        <PlayArrow/>
                    </IconButton>
                </Stack>
            }
        </Stack>
    );
};
