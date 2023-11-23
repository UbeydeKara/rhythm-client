import {Avatar, Grow, IconButton, Slide, Slider, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Pause, VolumeUp, SkipPrevious, SkipNext, PlayArrow, VolumeOff} from "@mui/icons-material";
import usePlayer from "@/src/hooks/usePlayer";
import {useRef} from "react";
import useResponsive from "@/src/hooks/useResponsive";
import {marquee} from "@/src/utils/marquee";

const stackStyle = {
    color: "white",
    bgcolor: "background.player",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1300,
    px: {xs: 1, sm: 3},
    py: 1.5,
    height: 65,
    backdropFilter: "blur(10px)"
};

const sliderStyle = {
    color: "inherit",
    ml: {xs: 1, sm: 4},
    mr: {sm: 2},
    my: {xs: -1.5, sm: 0},
    width: {xs: "90%", sm: "100%"},
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
    const boxRef = useRef();
    const media = useResponsive("up", "sm");
    const buttonSize = media ? "medium" : "small";

    const handleOffsetChange = (event: Event, newValue: number | number[]) => {
        player.updateOffset(newValue as number);
    };

    const switchButtons = (
        <Box display="flex">
            <IconButton color="inherit" size={buttonSize}>
                <SkipPrevious/>
            </IconButton>
            {player.status === "playing" ?
                <IconButton color="inherit" onClick={player.pauseSong} size={buttonSize}>
                    <Pause/>
                </IconButton>
                :
                <IconButton color="inherit" onClick={player.resumeSong} size={buttonSize}>
                    <PlayArrow/>
                </IconButton>}
            <IconButton color="inherit" size={buttonSize}>
                <SkipNext/>
            </IconButton>
        </Box>
    );

    const miniVideoPlayer = (
        <Grow in={player.song.id !== undefined}>
            <Box
                position="fixed"
                bottom={65}
                right={10}
                zIndex={1400}
                borderRadius={2}
                overflow="hidden"
                sx={{pointerEvents: "none"}}>
                <div id="player" style={{height: 120}}/>
            </Box>
        </Grow>
    )

    return (
        <>
            {!media && miniVideoPlayer}
            {player.song.id &&
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Stack direction="row" sx={stackStyle} alignItems="center">
                    <Avatar src={player.song.image}/>

                    <Box ref={boxRef} ml={{xs: 1, sm: 2}} width={250} whiteSpace="nowrap" overflow="hidden">
                        <Typography variant="subtitle2" sx={{animation: marquee(player.song.name, 3.2)}}>
                            {player.song.name}
                        </Typography>
                        <Typography variant="body2" sx={{animation: marquee(player.song.artists, 2)}}>
                            {player.song.artists}
                        </Typography>
                    </Box>

                    <Stack direction={{xs: "column", sm: "row"}} width="100%" justifyContent="center" alignItems="center">
                        {switchButtons}
                        <Slider sx={sliderStyle} max={player.duration} value={player.offset} step={1} onChange={handleOffsetChange} size={buttonSize}></Slider>
                    </Stack>

                    <IconButton color="inherit" sx={{mx: {sm: 2}}} onClick={player.toggleMute} size={buttonSize}>
                        {player.isMuted ? <VolumeOff/> : <VolumeUp/>}
                    </IconButton>
                </Stack>
            </Slide>}
        </>
    );
};
