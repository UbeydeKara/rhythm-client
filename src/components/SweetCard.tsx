import {Box, Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography} from "@mui/material";
import React, {useMemo, useRef, useState} from "react";
import {SongType} from "@/src/types/SongType";
import usePlayer from "@/src/hooks/usePlayer";
import {getAverageRGB} from "@/src/utils/getImageColor";
import {marquee} from "@/src/utils/marquee";

interface ISweetCard extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: SongType
}

const cardContentStyle = {
    zIndex: 1,
    transition: "transform .3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)"
    },
}

export default function SweetCard({item} : ISweetCard) {
    const {playSong} = usePlayer();
    const imgRef = useRef<any>();
    const [hoveredCardId, setCardId] = useState("none");

    const cardColor = useMemo(() => {
        if (imgRef && imgRef.current)
            return getAverageRGB(imgRef.current);
        return "initial;";
    }, [imgRef.current]);

    const playCard = () => {
        playSong(item);
    };

    return(
        <>
            {item ?
                <>
                    <Card sx={[cardContentStyle, {bgcolor: cardColor}]} onClick={playCard} onMouseEnter={() => setCardId(item.id)}
                          onMouseLeave={() => setCardId("none")}>
                        <CardActionArea sx={{height: "100%"}}>
                            <CardMedia
                                ref={imgRef}
                                component="img"
                                image={item.image}
                                crossOrigin="anonymous"
                                sx={{objectFit: "fill"}}
                                alt={item.name}>
                            </CardMedia>
                            <CardContent sx={{py: 1, px: 2, textWrap: "nowrap", position: "relative"}}>
                                <Box overflow="hidden" textAlign="center" color="white">
                                    <Typography fontWeight="bold"
                                                sx={{animation: hoveredCardId === item.id ? marquee(item.name, 3.2) : ""}}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2"
                                                fontWeight={100}
                                                sx={{animation: hoveredCardId === item.id ? marquee(item.artists, 2) : ""}}>
                                        {item.artists}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Box
                        sx={{filter: 'blur(100px)'}}
                        position="absolute"
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        m="auto"
                        width="70%"
                        height="70%"
                        bgcolor={cardColor}/>
                    </>
                :
                <Skeleton variant="rounded" sx={{aspectRatio: "1/1.2", height: "unset"}}/>}
        </>
    )
}
