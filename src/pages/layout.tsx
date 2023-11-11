import {Container, Fade} from "@mui/material";
import React from "react";
import Sidebar from "@/src/sections/sidebar";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";

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
    const router = useRouter();
    return (
            <Box sx={{display: "flex"}}>
                <Sidebar/>
                <Container component="main" sx={containerCenter}>
                    <Fade in key={router.pathname} timeout={500}>
                        <div>
                            {children}
                        </div>
                    </Fade>
                </Container>
            </Box>
    );
}
