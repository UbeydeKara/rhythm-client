import Box from "@mui/material/Box";
import TopBar from "../components/TopBar";
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import AlbumCard from "@/src/components/AlbumCard";
import {Skeleton, Stack} from "@mui/material";
import {SongType} from "@/src/types/SongType";
import {getWeeklyAlbums} from "@/src/redux/actions/ChartAction";
import React, {useEffect} from "react";
import {useHorizontalScroll} from "@/src/hooks/useHorizontalScroll";

const skeletonStyle = {
    height: "unset",
    minWidth: {xs: "45%", md: "35%", lg: "22%"},
    aspectRatio: "1/1.1"
};

export default function Albums() {
    const {weeklyAlbums} = useAppSelector(x => x.charts);
    const dispatch = useAppDispatch();
    const scrollRef = useHorizontalScroll();

    const retrieveData = async () => {
        await Promise.all([
            dispatch(getWeeklyAlbums())
        ]);
    }

    useEffect(() => {
        if (weeklyAlbums[0] === undefined)
            retrieveData();
    }, []);

    return(
        <Box component="section">
            <TopBar title="Albums"/>
            <Stack ref={scrollRef} direction="row" spacing={2} sx={{overflowX: {xs: "auto", md: "hidden"}}}>
                {weeklyAlbums.slice(0, 20).map((item: SongType, index: React.Key) => (
                    item ? <AlbumCard key={index} album={item}/> :
                        <Skeleton key={index} variant="rounded" sx={skeletonStyle}/>
                ))}
            </Stack>
        </Box>
    );
};
