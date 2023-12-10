// next
import {useRouter} from "next/router";

// react
import React, {useLayoutEffect} from "react";

// components
import Page from "@/src/components/Page";

// layout
import Layout from "@/src/pages/layout";

// section
import TrackList from "@/src/sections/track-list";

// redux
import {useAppDispatch, useAppSelector} from "@/src/redux/hooks";
import {getAlbumDetail} from "@/src/redux/actions/AlbumAction";
import {AlbumType} from "@/src/types/AlbumType";
import TitleBar from "@/src/components/TitleBar";

// ----------------------------------------------------------------------
Album.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Album() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const albumDetail: AlbumType = useAppSelector(root => root.album);

    const id = router.query.album_id?.toString();

    useLayoutEffect(() => {
        if (id)
            dispatch(getAlbumDetail(id));
    }, [dispatch, id]);

    return(
        <Page title={albumDetail.name || "Album"}>
            <TitleBar avatar={albumDetail.image} title={albumDetail.name} subtitle="Album"
                      playlist={albumDetail.tracks} backButton/>
            <TrackList albumTracks={albumDetail.tracks} artists={albumDetail.artists}/>
        </Page>
    );
};
