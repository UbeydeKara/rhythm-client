import {Unstable_Grid2 as Grid, Typography, CardActionArea, Box, CardContent} from "@mui/material";
import TopBar from "@/src/components/TopBar";
import {top_genres} from "@/src/constants/genres";

const cardStyle = (item: string) => ({
    background: `url(${item})`,
    height: "100%",
    borderRadius: 2,
    textAlign: "center"
});

const contentStyle = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
};

export default function Genres() {
    return(
        <Box component="section">
            <TopBar title="Genres"/>
            <Grid container spacing={4}>
                {top_genres.map((item, index) => (
                    <Grid key={index} sx={{width: {xs: "50%", md: "25%"}, aspectRatio: "1/.5"}}>
                        <CardActionArea sx={cardStyle(item.url)} href={`/genre/${item.title}`}>
                            <CardContent sx={contentStyle}>
                                <Typography variant="h6">{item.title}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )

}
