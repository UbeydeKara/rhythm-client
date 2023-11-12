import {Avatar, IconButton, Slider, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Pause, VolumeUp, SkipPrevious, SkipNext} from "@mui/icons-material";

const stackStyle = {
    color: "white",
    background: "linear-gradient(90deg, rgba(61,58,111,1) 0%, rgba(44,43,66,1) 50%, rgba(61,58,111,1) 100%);",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1300,
    px: 3,
    py: 1.5
};

const sliderStyle = {
    color: "inherit",
    ml: 4,
    mr: 2,
    '& .MuiSlider-thumb': {
        width: 15,
        height: 15
    },
    '& .MuiSlider-rail': {
        opacity: 0.28,
    }
};

export default function Player() {
    return (
        <Stack direction="row" sx={stackStyle} alignItems="center">
            <Avatar/>

            <Box ml={2} width={200}>
                <Typography variant="subtitle2">Song Title</Typography>
                <Typography variant="body2">Author</Typography>
            </Box>

            <IconButton color="inherit">
                <SkipPrevious/>
            </IconButton>
            <IconButton color="inherit">
                <Pause/>
            </IconButton>
            <IconButton color="inherit">
                <SkipNext/>
            </IconButton>

            <Slider sx={sliderStyle}></Slider>

            <IconButton color="inherit" sx={{mx: 2}}>
                <VolumeUp/>
            </IconButton>
        </Stack>
    );
};
