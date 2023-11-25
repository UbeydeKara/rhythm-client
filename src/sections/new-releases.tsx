import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getWeeklyReleases} from "@/src/redux/actions/ChartAction";
import React, {useEffect} from "react";
import Carousel from "@/src/components/Carousel";
import TopBar from "@/src/components/TopBar";

export default function NewReleases() {
    const {weeklyReleases} = useAppSelector(x => x.charts);
    const dispatch = useAppDispatch();

    const retrieveData = async() => {
        await Promise.all([
            dispatch(getWeeklyReleases())
        ]);
    }

    useEffect(() => {
        if (weeklyReleases[0] === undefined)
            retrieveData();
    }, []);

    return(
        <>
            <TopBar title="New Releases" subtitle="Store"/>
            <Carousel tracks={weeklyReleases}/>
        </>
    );
};
