import {Box, Card, CardActionArea, CardActions, CardMedia, Typography} from "@mui/material";
import React from "react";
import {SongType} from "@/src/types/SongType";
import usePlayer from "@/src/hooks/usePlayer";

interface ISweetCard extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: SongType
}

const cardHeight = 240;
const cardWidth = 200;

const cardShadowHoverStyle = {
    position: "absolute",
    bottom: 30,
    filter: "blur(30px)"
}

const cardFooterStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    bgcolor: "#000000b3"
};

const cardContentStyle = {
    position: "relative",
    zIndex: 1,
    width: cardWidth,
    transition: "transform .3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)"
    },
}

export default function SweetCard({item} : ISweetCard) {
    const player = usePlayer();

    const playCard = () => {
        player.playSong(item);
    };

    const cardEffect = (
        <Box
            sx={cardShadowHoverStyle}
            component="img"
            height={cardHeight}
            width={cardWidth}
            src={item.img}
            alt={item.title}
        />
    );

    return(
        <div>
            <Card sx={cardContentStyle} onClick={playCard}>
                <CardActionArea sx={{height: cardHeight}}>
                    <CardMedia
                        component="img"
                        height="100%"
                        width={cardWidth}
                        image={item.img}
                        sx={{objectFit: "fill"}}
                        alt={item.title}>
                    </CardMedia>
                    <CardActions sx={cardFooterStyle}>
                        <Box textAlign="center" width="100%" color="white">
                            <Typography fontWeight="bold">{item.title}</Typography>
                            <Typography variant="body2" fontWeight={100}>{item.artist}</Typography>
                        </Box>
                    </CardActions>
                </CardActionArea>
            </Card>
            {cardEffect}
        </div>
    )
}
