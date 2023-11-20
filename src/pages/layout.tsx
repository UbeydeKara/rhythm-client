import {Container, Fade} from "@mui/material";
import React from "react";
import Sidebar from "@/src/sections/sidebar";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import Player from "@/src/components/Player";
import useResponsive from "@/src/hooks/useResponsive";

interface ILayout {
    children: React.ReactNode
}

export default function Layout({ children } : ILayout) {
    const router = useRouter();
    const media = useResponsive("up", "sm");

    const containerStyle = {
        pt: 2,
        pb: 24,
        width: media ? "calc(100% - 240px)" : "100%"
    };

    return (
            <Box display="flex">
                {media && <Sidebar/>}
                    <Fade in key={router.pathname} timeout={500}>
                        <Container component="main" sx={containerStyle}>
                            {children}
                        </Container>
                    </Fade>
                <Player/>
            </Box>
    );
}
