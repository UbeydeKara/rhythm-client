import React from "react";

import Layout from "./layout";
import {ShuffleIcon} from "../theme/overrides/CustomIcons";

// components
import Page from '../components/Page';
import SweetCard from "../components/SweetCard";

// mui
import {Box, IconButton, Stack, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {PlayArrow} from "@mui/icons-material";
import {popularAlbums} from "@/src/constants/popular-albums";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

// ----------------------------------------------------------------------
Albums.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Albums() {
    return(
        <Page title="Albums">
            <Box component="section">
                <Stack direction="row" alignItems="center">
                    <Box>
                        <Typography variant="subtitle1" color="primary">Albums</Typography>
                        <Typography variant="h3">Popular</Typography>
                    </Box>

                    <Stack direction="row" ml="auto" spacing={1.5}>
                        <IconButton aria-label="mix" sx={{bgcolor: "divider"}}>
                            <ShuffleIcon/>
                        </IconButton>
                        <IconButton aria-label="play" sx={iconButtonStyle}>
                            <PlayArrow/>
                        </IconButton>
                    </Stack>

                </Stack>

                <Grid container mt={1} spacing={8} justifyContent={{xs: "center", lg: "start"}}>
                    {popularAlbums.map((item) =>
                        <Grid key={item.id} sx={{position: "relative"}}>
                            <SweetCard title={item.artist} subtitle={item.song} imgSrc={item.img}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Page>
    )
}
