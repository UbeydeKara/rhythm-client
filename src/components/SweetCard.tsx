import {Box, Card, CardActionArea, CardActions, CardMedia, Typography} from "@mui/material";
import React from "react";

interface ISweetCard extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    subtitle: string,
    imgSrc: string
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

export default function SweetCard({title, subtitle, imgSrc, ...props} : ISweetCard) {

    const cardEffect = (
        <Box
            sx={cardShadowHoverStyle}
            component="img"
            height={cardHeight}
            width={cardWidth}
            src={imgSrc}
            alt={title}
        />
    );

    return(
        <div {...props}>
            <Card sx={cardContentStyle}>
                <CardActionArea sx={{height: cardHeight}}>
                    <CardMedia
                        component="img"
                        height="100%"
                        width={cardWidth}
                        image={imgSrc}
                        sx={{objectFit: "fill"}}
                        alt={title}>
                    </CardMedia>
                    <CardActions sx={cardFooterStyle}>
                        <Box textAlign="center" width="100%" color="white">
                            <Typography fontWeight="bold">{title}</Typography>
                            <Typography variant="body2" fontWeight={100}>{subtitle}</Typography>
                        </Box>
                    </CardActions>
                </CardActionArea>
            </Card>
            {cardEffect}
        </div>
    )
}
