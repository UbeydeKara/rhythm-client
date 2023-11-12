import Image from "next/image";
import Link from "next/link";

import {Typography, Button, Box, Stack} from "@mui/material";
import {HomeTwoTone} from "@mui/icons-material";

import Page from "@/src/components/Page";

export default function Custom404() {
    const vector404 = require("../theme/vectors/_404.svg") as string;
    return (
        <Page title="Page Not Found">
            <Stack direction={{xs: "column", md: "row"}} height="100vh" gap={2} alignItems="center" justifyContent="center">
                <Image src={vector404} height={404} width={404} alt="404"/>
                <Box maxWidth={404}>
                    <Typography variant="h3" gutterBottom>Sorry, page not found!</Typography>
                    <Typography sx={{ color: 'text.secondary' }} paragraph>
                        Sorry, we couldn’t find the page you’re looking for.
                        Perhaps you’ve mistyped the URL? Be sure to check your spelling.
                    </Typography>
                    <Link href="/">
                        <Button size="large" variant="contained" startIcon={<HomeTwoTone/>}>
                            Go to Home
                        </Button>
                    </Link>
                </Box>
            </Stack>
        </Page>
    )
}
