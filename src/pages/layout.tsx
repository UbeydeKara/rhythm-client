import {Container, Fade} from "@mui/material";
import React from "react";
import Sidebar from "@/src/sections/sidebar";
import Box from "@mui/material/Box";

interface ILayout {
    children: React.ReactNode
}

const containerCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: 8
}

export default function Layout({ children } : ILayout) {
    return (
        <Fade in>
            <Box sx={{display: "flex"}}>
                <Sidebar/>
                <Container component="main" sx={containerCenter}>
                    {children}
                </Container>
            </Box>
        </Fade>
    );
}
