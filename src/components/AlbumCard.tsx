// mui
import {Card, CardActionArea, CardMedia, Typography} from "@mui/material";

// types
import {SongType} from "@/src/types/SongType";

// utils
import {beautifyURL} from "@/src/utils/beautifyURL";

interface IAlbumCard {
    album: SongType
}

export default function AlbumCard({album}: IAlbumCard) {
    const albumUrl = `/album/${beautifyURL(album.name)}/${album.id}`;

    return(
        <Card sx={{minWidth: {xs: "65%", sm: "50%", md: "35%", lg: "22%"}, bgcolor: "initial", boxShadow: 0}}>
            <CardActionArea sx={{p: 1.5, borderRadius: 2}} href={albumUrl}>
                <CardMedia component="img" src={album.image} alt={album.name} sx={{mb: 2, borderRadius: 2}}/>
                <Typography variant="body2" fontWeight="bold">{album.name}</Typography>
                <Typography variant="body2" fontWeight={100}>{album.artists[0].name}</Typography>
            </CardActionArea>
        </Card>
    );
};
