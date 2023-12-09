// mui
import {Card, CardActionArea, CardMedia, Typography, Link} from "@mui/material";

// types
import {SongType} from "@/src/types/SongType";

// utils
import {beautifyURL} from "@/src/utils/beautifyURL";

interface IAlbumCard {
    album: SongType
}

export default function AlbumCard({album}: IAlbumCard) {
    const albumUrl = `/album/${beautifyURL(album.name)}/${album.id}`;
    const artistUrl = `/artist/${beautifyURL(album.artists[0].name)}/${album.artists[0].id}`;

    return(
        <Card sx={{minWidth: {xs: "65%", sm: "50%", md: "35%", lg: "22%"}, bgcolor: "initial", boxShadow: 0}}>
            <Link href={albumUrl} color="inherit">
                <CardActionArea sx={{p: 1.5, borderRadius: 2}}>
                    <CardMedia component="img" src={album.image} alt={album.name} sx={{mb: 2, borderRadius: 2}}/>
                    <Link href={albumUrl} color="inherit">
                        <Typography variant="body2" fontWeight="bold">{album.name}</Typography>
                    </Link>
                    <Link href={artistUrl} color="inherit">
                        <Typography variant="body2" fontWeight={100}>{album.artists[0].name}</Typography>
                    </Link>
                </CardActionArea>
            </Link>
        </Card>
    );
};
