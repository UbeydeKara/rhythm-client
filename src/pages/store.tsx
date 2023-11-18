import React, {useEffect} from "react";

import Layout from "./layout";
import {ShuffleIcon} from "../theme/overrides/CustomIcons";

// components
import Page from '../components/Page';
import SweetCard from "../components/SweetCard";

// mui
import {Box, IconButton, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {PlayArrow} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {SongType} from "@/src/types/SongType";
import {getPopularAlbums} from "@/src/redux/actions/TrackAction";
import usePlayer from "@/src/hooks/usePlayer";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

// ----------------------------------------------------------------------
Store.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Store() {
    const tracks: SongType[] = useAppSelector(x => x.tracks);
    const player = usePlayer();
    const dispatch = useAppDispatch();

    const retrieveData = async() => {
        await Promise.all([
            dispatch(getPopularAlbums())
        ]);
    }

    const playTracks = (mode: any) => {
        const trackId = mode === "shuffle" ? Math.floor(Math.random() * tracks.length) : 0;
        player.playSong(tracks[trackId]);
    }

    useEffect(() => {
        if (tracks[0] === undefined)
            retrieveData();
    }, []);

    return(
        <Page title="Store">
            <Box component="section" maxWidth={1000}>
                <Stack direction="row" alignItems="center">
                    <Box>
                        <Typography variant="subtitle1" color="primary">Store</Typography>
                        <Typography variant="h3">Popular</Typography>
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

                <Grid container mt={1} spacing={8} justifyContent={{xs: "center", lg: "start"}}>
                    {tracks.map((item, index) =>
                        <Grid key={index} sx={{position: "relative"}}>
                            <SweetCard item={item}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Page>
    )
}
