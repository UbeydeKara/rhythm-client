import {Avatar, IconButton, Slide, Slider, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Pause, VolumeUp, SkipPrevious, SkipNext, PlayArrow, VolumeOff} from "@mui/icons-material";
import usePlayer from "@/src/hooks/usePlayer";

const stackStyle = {
    color: "white",
    background: "linear-gradient(90deg, rgba(61,58,111,1) 0%, rgba(44,43,66,1) 50%, rgba(61,58,111,1) 100%);",
    position: "fixed",
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
    const player = usePlayer();

    const handleOffsetChange = (event: Event, newValue: number | number[]) => {
        player.updateOffset(newValue as number);
    };

    return (
        <Slide direction="up" in={player.song.id !== undefined} mountOnEnter unmountOnExit>
            <Stack direction="row" sx={stackStyle} alignItems="center">
                <Avatar src={player.song.img}/>

                <Box ml={2} width={200}>
                    <Typography variant="subtitle2">{player.song.title}</Typography>
                    <Typography variant="body2">{player.song.artist}</Typography>
                </Box>

                <IconButton color="inherit">
                    <SkipPrevious/>
                </IconButton>
                {player.isPLaying ?
                    <IconButton color="inherit" onClick={player.pauseSong}>
                        <Pause/>
                    </IconButton>
                    :
                    <IconButton color="inherit" onClick={player.resumeSong}>
                        <PlayArrow/>
                    </IconButton>}
                <IconButton color="inherit">
                    <SkipNext/>
                </IconButton>

                <Slider sx={sliderStyle} max={player.song.duration} value={player.offset} step={1} onChange={handleOffsetChange}></Slider>

                <IconButton color="inherit" sx={{mx: 2}} onClick={player.toggleMute}>
                    {player.isMuted ? <VolumeOff/> : <VolumeUp/>}
                </IconButton>
            </Stack>
        </Slide>
    );
};
