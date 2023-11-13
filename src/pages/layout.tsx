import {Container, Fade} from "@mui/material";
import React from "react";
import Sidebar from "@/src/sections/sidebar";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import Player from "@/src/components/Player";

interface ILayout {
    children: React.ReactNode
}

const containerCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: 6,
    pb: 18
}

export default function Layout({ children } : ILayout) {
    const router = useRouter();
    return (
            <Box display="flex" overflow="hidden">
                <Sidebar/>
                <Container component="main" sx={containerCenter}>
                    <Fade in key={router.pathname} timeout={500}>
                        <div>
                            {children}
                        </div>
                    </Fade>
                </Container>
                <Player/>
            </Box>
    );
}
