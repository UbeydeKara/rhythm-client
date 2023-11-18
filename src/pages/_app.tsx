import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// theme
import ThemeProvider from '../theme';
import {PlayerProvider} from "@/src/contexts/PlayerContext";
import store from "@/src/redux/store";
import {Provider} from "react-redux";
import React from "react";

// ----------------------------------------------------------------------

App.propTypes = {
    Component: PropTypes.func, pageProps: PropTypes.object, settings: PropTypes.object,
};

export default function App(props: any) {
    const {Component, pageProps} = props;

    const getLayout = Component.getLayout ?? ((page: any) => page);

    return (<>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>

        <PlayerProvider>
            <ThemeProvider>
                <Provider store={store}>
                    {getLayout(<Component {...pageProps} />)}
                </Provider>
            </ThemeProvider>
        </PlayerProvider>

        </>);
}
