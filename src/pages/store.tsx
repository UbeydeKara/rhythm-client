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
import TopBar from "@/src/components/TopBar";
import {SongType} from "../types/SongType";
import NewReleases from "../sections/new-releases";

// ----------------------------------------------------------------------
Store.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Store() {
    const {top50} = useAppSelector(x => x.tracks);
    const dispatch = useAppDispatch();

    const retrieveData = async () => {
        await Promise.all([
            dispatch(getPopularAlbums())
        ]);
    }

    useEffect(() => {
        if (top50[0] === undefined)
            retrieveData();
    }, []);

    return (
        <Page title="Store">
            <Box component="section">
                <NewReleases/>
                <TopBar title="Popular" playlist={top50}/>
                <Grid container spacing={{xs: 2, md: 4, lg: 8}} columns={{xs: 2, md: 3, lg: 4}}>
                    {top50.map((item: SongType, index: React.Key) =>
                        <Grid key={index} sx={{position: "relative"}} xs={1}>
                            <SweetCard item={item}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Page>
    )
}
