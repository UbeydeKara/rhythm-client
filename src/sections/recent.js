import {
    Box,
    Unstable_Grid2 as Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import {popularArtists} from "@/src/constants/popular-artists";
import SweetCard from "@/src/components/SweetCard";
import {PlayArrow} from "@mui/icons-material";
import {ShuffleIcon} from "@/src/theme/overrides/CustomIcons";
import {recentArtists} from "@/src/constants/recent-artists";

const iconButtonStyle = {
    bgcolor: "primary.main",
    color: "white",
    "&:hover": {
        bgcolor: "primary.light"
    },
}

export default function Recent() {
    return (
        <Box component="section" mt={6}>
            <Stack direction="row" alignItems="center">
                <Typography variant="h3">Recent</Typography>

                <Stack direction="row" ml="auto" spacing={1.5}>
                    <IconButton aria-label="mix" sx={{bgcolor: "divider"}}>
                        <ShuffleIcon/>
                    </IconButton>
                    <IconButton aria-label="play" sx={iconButtonStyle}>
                        <PlayArrow/>
                    </IconButton>
                </Stack>

            </Stack>

            <Grid container mt={1} spacing={8} justifyContent={{xs: "center", lg: "start"}}>
                {recentArtists.map((item) =>
                    <Grid key={item.id} sx={{position: "relative"}}>
                        <SweetCard title={item.artist} subtitle={item.song} imgSrc={item.img}/>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};
