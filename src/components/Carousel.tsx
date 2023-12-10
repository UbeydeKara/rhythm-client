import {Box, Card, CardActionArea, Skeleton, Stack, Typography} from "@mui/material";
import {SongType} from "@/src/types/SongType";
import React from "react";
import {alpha} from "@mui/material/styles";
import {useHorizontalScroll} from "@/src/hooks/useHorizontalScroll";
import usePlayer from "@/src/hooks/usePlayer";
import {artistNames} from "@/src/utils/artistNames";

const actionAreaStyle = (img: string) => {
    return {
        height: "100%",
        minWidth: "100%",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center"
    }
}

interface ICarousel {
    tracks: SongType[]
}

export default function Carousel({tracks}: ICarousel) {
    const scrollRef = useHorizontalScroll();
    const {playSong} = usePlayer();

    return(
        <Stack
            ref={scrollRef}
            direction="row"
            spacing={{xs: 2, md: 3, lg: 4}}
            sx={{overflowX: {xs: "auto", md: "hidden"}}}
            mt={4}>
            {tracks?.slice(0, 20).map((item: SongType, index: React.Key) =>
            item ?  <Card key={index} sx={{aspectRatio: "2.2/1", minWidth: {xs: "80%", md: "70%", lg: "40%"}}}>
                        <CardActionArea sx={actionAreaStyle(item.image)} onClick={() => playSong(item)}>
                            <Stack height="100%" justifyContent="end">
                                <Box bgcolor={alpha("#000", .5)} px={3} py={1}>
                                    <Typography fontWeight="bold">{item.name}</Typography>
                                    <Typography variant="body2" fontWeight={100}>
                                        {artistNames(item.artists)}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardActionArea>
                    </Card>
                : <Skeleton key={index} variant="rounded" sx={{height: "unset", minWidth: "50%", aspectRatio: "2.2/1"}}/>
            )}
        </Stack>
    );
};
