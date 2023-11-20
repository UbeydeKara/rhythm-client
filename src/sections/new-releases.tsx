import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getNewReleases} from "@/src/redux/actions/TrackAction";
import React, {useEffect} from "react";
import Carousel from "@/src/components/Carousel";
import TopBar from "@/src/components/TopBar";

export default function NewReleases() {
    const {newReleases} = useAppSelector(x => x.tracks);
    const dispatch = useAppDispatch();

    const retrieveData = async() => {
        await Promise.all([
            dispatch(getNewReleases())
        ]);
    }

    useEffect(() => {
        if (newReleases[0] === undefined)
            retrieveData();
    }, []);

    return(
        <>
            <TopBar title="New Releases" subtitle="Store"/>
            <Carousel tracks={newReleases}/>
        </>
    );
};
