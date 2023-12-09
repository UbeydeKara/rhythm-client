import {Unstable_Grid2 as Grid, Typography, CardActionArea, Link, Box, Skeleton} from "@mui/material";
import {randomBg} from "@/src/utils/bgGenerator";
import TopBar from "@/src/components/TopBar";
import {useEffect, useState} from "react";

const genres_mock = ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music"];
const randomGenres = Math.round(Math.random() * genres_mock.length) - 8;

export default function Genres() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return(
        <Box component="section">
            <TopBar title="Genres"/>
            <Grid container spacing={4}>
                {genres_mock.slice(randomGenres, randomGenres + 8).map((item, index) => (
                    hasMounted ?
                    <Grid key={index} sx={{width: {xs: "50%", md: "25%"}, aspectRatio: "1/.5"}}>
                        <Link href={`/genre/${item}`} color="white" underline="none">
                            <CardActionArea sx={{background: randomBg(), height: "100%", borderRadius: 2}}>
                                <Typography variant="body1" textAlign="center" fontWeight="bold">{item}</Typography>
                            </CardActionArea>
                        </Link>
                    </Grid> : <Skeleton key={index} sx={{height: "unset", width: "25%", aspectRatio: "1/.5"}}/>
                ))}
            </Grid>
        </Box>
    )

}
