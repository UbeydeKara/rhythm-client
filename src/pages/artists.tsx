import React from "react";

// components
import Page from '../components/Page';
import Layout from "./layout";
import Popular from "../sections/popular";
import Recent from "../sections/recent";

// ----------------------------------------------------------------------
Artists.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default function Artists() {
    return (
        <Page title="Your Artists">
            <Popular/>
            <Recent/>
        </Page>
    )
}
