import React, {forwardRef} from 'react';
// next
import Head from 'next/head';
// @mui
import {Box} from '@mui/material';

// ----------------------------------------------------------------------

interface IPage {
    children: React.ReactNode,
    title: string,
    meta?: React.ReactNode
}

const Page = forwardRef(({ children, title = '', meta, ...other }: IPage, ref) => (
  <>
    <Head>
      <title>{`${title} | Rhythm`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.displayName = 'Page';

export default Page;
