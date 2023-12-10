import {Box, IconButton, Stack, Typography} from "@mui/material";
import {ShuffleIcon} from "@/src/theme/overrides/CustomIcons";
import {ArrowBack, PlayArrow} from "@mui/icons-material";
import React from "react";
import usePlayer from "@/src/hooks/usePlayer";
import {useRouter} from "next/router";
import {AlbumTrack} from "@/src/types/AlbumType";
import useResponsive from "@/src/hooks/useResponsive";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

interface ITitleBar {
    avatar?: string,
    title: string,
    subtitle?: string,
    playlist?: AlbumTrack[],
    backButton?: boolean
}

export default function TitleBar({avatar, title, subtitle, playlist = [], backButton = false}: ITitleBar) {
    const {playSong} = usePlayer();
    const router = useRouter();
    const isDesktop = useResponsive("up", "md");
    const iconSize = isDesktop ? "medium" : "small";

    const playTracks = (mode: any) => {
        const trackId = mode === "shuffle" ? Math.floor(Math.random() * playlist.length) : 0;
        playSong(playlist[trackId]);
    }

    return(
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" my={{xs: 2, md: 4}} mb={{xs: 1, md: 4}}>

            {isDesktop && backButton &&
                <IconButton sx={{mr: {xs: 2, md: 4}, bgcolor: "divider"}} onClick={() => router.back()} size={iconSize}>
                    <ArrowBack/>
                </IconButton>
            }

            {avatar &&
                <Box component="img" src={avatar} width={{xs: "90%", sm: "70%", md: "15%"}} mr={{md: 4}}/>
            }

            <Box>
                <Typography variant={isDesktop ? "h3" : "h4"}>{title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{subtitle}</Typography>
            </Box>

            {playlist?.length > 0 &&
                <Stack direction="row" ml={{md: "auto !important"}} spacing={1.5} mt={2}>
                    <IconButton aria-label="mix" sx={{bgcolor: "divider"}}
                                size={iconSize} onClick={() => playTracks("shuffle")}>
                        <ShuffleIcon/>
                    </IconButton>
                    <IconButton aria-label="play" sx={iconButtonStyle} size={iconSize} onClick={playTracks}>
                        <PlayArrow/>
                    </IconButton>
                </Stack>
            }
        </Stack>
    );
};
