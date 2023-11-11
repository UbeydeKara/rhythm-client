import {Box, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {popularArtists} from "@/src/constants/popular-artists";
import SweetCard from "@/src/components/SweetCard";

export default function Popular() {
    return(
        <Box component="section">
            <Typography variant="subtitle1" color="primary">Artists</Typography>
            <Typography variant="h3">Popular</Typography>

            <Grid container mt={1} spacing={8} justifyContent={{xs: "center", lg: "start"}}>
                {popularArtists.map((item) =>
                    <Grid key={item.id} sx={{position: "relative"}}>
                        <SweetCard title={item.artist} subtitle={item.song} imgSrc={item.img}/>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};
