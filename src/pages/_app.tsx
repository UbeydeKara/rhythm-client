import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// theme
import ThemeProvider from '../theme';

// ----------------------------------------------------------------------

MyApp.propTypes = {
    Component: PropTypes.func, pageProps: PropTypes.object, settings: PropTypes.object,
};

export default function MyApp(props: any) {
    const {Component, pageProps} = props;

    const getLayout = Component.getLayout ?? ((page: any) => page);

    return (<>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>

            <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>

        </>);
}
