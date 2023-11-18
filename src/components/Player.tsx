import {Avatar, IconButton, keyframes, Slide, Slider, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {Pause, VolumeUp, SkipPrevious, SkipNext, PlayArrow, VolumeOff} from "@mui/icons-material";
import usePlayer from "@/src/hooks/usePlayer";
import {useRef} from "react";

const stackStyle = {
    color: "white",
    background: "linear-gradient(90deg, rgba(61, 58, 111, .9) 0%, rgba(44, 43, 66, .9) 50%, rgba(61, 58, 111, .9) 100%);",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1300,
    px: 3,
    py: 1.5,
    height: 65,
    backdropFilter: "blur(10px)"
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

const marquee = (text: string, ratio: number) => {
    if (text.length > 25) {
        const to = "-" + (text.length * ratio) + "px";
        return keyframes`
          from { transform: translateX(5px); }
          to { transform: translateX(${to}); }`;
    }
}

export default function Player() {
    const player = usePlayer();
    const boxRef = useRef();

    const handleOffsetChange = (event: Event, newValue: number | number[]) => {
        player.updateOffset(newValue as number);
    };

    return (
        player.song.id && <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Stack direction="row" sx={stackStyle} alignItems="center">
                <Avatar src={player.song.image}/>

                <Box ref={boxRef} ml={2} width={250} whiteSpace="nowrap" overflow="hidden">
                    <Typography variant="subtitle2" sx={{animation: `${marquee(player.song.name, 3.2)} 12s linear infinite alternate`}}>
                        {player.song.name}
                    </Typography>
                    <Typography variant="body2" sx={{animation: `${marquee(player.song.artists, 2)} 10s linear infinite alternate`}}>
                        {player.song.artists}
                    </Typography>
                </Box>

                <IconButton color="inherit">
                    <SkipPrevious/>
                </IconButton>
                {player.status === "playing" ?
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

                <Slider sx={sliderStyle} max={player.duration} value={player.offset} step={1} onChange={handleOffsetChange}></Slider>

                <IconButton color="inherit" sx={{mx: 2}} onClick={player.toggleMute}>
                    {player.isMuted ? <VolumeOff/> : <VolumeUp/>}
                </IconButton>
            </Stack>
        </Slide>
    );
};
