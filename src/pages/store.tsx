import React, {useEffect} from "react";

import Layout from "./layout";

// components
import Page from '../components/Page';
import SweetCard from "../components/SweetCard";

// mui
import {Box, Unstable_Grid2 as Grid} from "@mui/material";

// redux
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {getPopularAlbums} from "../redux/actions/TrackAction";
import {SongType} from "../types/SongType";
import TopBar from "@/src/components/TopBar";

// ----------------------------------------------------------------------
Store.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Store() {
    const tracks: SongType[] = useAppSelector(x => x.tracks);
    const dispatch = useAppDispatch();

    const retrieveData = async() => {
        await Promise.all([
            dispatch(getPopularAlbums())
        ]);
    }

    useEffect(() => {
        if (tracks[0] === undefined)
            retrieveData();
    }, []);

    return(
        <Page title="Store">
            <Box component="section" maxWidth={1000}>
                <TopBar title="Popular" subtitle="Store"/>
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
