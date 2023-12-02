import {useCallback} from "react";

// icons
import {
    FavoriteTwoTone,
    LibraryMusicTwoTone,
    MusicNoteTwoTone,
    Person2TwoTone,
    PodcastsTwoTone,
    RadioButtonCheckedTwoTone,
    StorefrontTwoTone,
    SubscriptionsTwoTone
} from "@mui/icons-material";

// mui
import {
    Drawer, Grow,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SvgIconTypeMap,
    Typography
} from "@mui/material";

// next
import Link from "next/link";
import {useRouter} from "next/router";

// types
import {OverridableComponent} from "@mui/types";

// components
import Box from "@mui/material/Box";
import usePlayer from "@/src/hooks/usePlayer";

const drawerWidth = 240;

const discoverButtons = [
    { id: 0, text: 'For You', icon: FavoriteTwoTone, to: "/for-you" },
    { id: 1, text: 'Browse', icon: RadioButtonCheckedTwoTone, to: "/browse" },
    { id: 2, text: 'Podcasts', icon: PodcastsTwoTone, to: "/podcasts" },
    { id: 3, text: 'Store', icon: StorefrontTwoTone, to: "/store" }
]

const libraryButtons = [
    { id: 4, text: 'Playlists', icon: SubscriptionsTwoTone, to: "/playlists" },
    { id: 5, text: 'Artists', icon: Person2TwoTone, to: "/artists" },
    { id: 6, text: 'Albums', icon: LibraryMusicTwoTone, to: "/albums" },
    { id: 7, text: 'Songs', icon: MusicNoteTwoTone, to: "/songs" }
]

interface IButtons {
    id: number,
    text: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    to: string
}

export default function Sidebar() {
    const router = useRouter();
    const player = usePlayer();

    const SweetItem = useCallback((item: IButtons) => {
        const IconComponent = item.icon;
        const color = router.pathname === item.to ? "primary.main" : "inherit";
        return(
            <ListItem key={item.id} disablePadding>
                <ListItemButton component={Link} href={item.to} sx={{my: .2, borderRadius: 1, color: color}} disabled={item.id !== 3}>
                    <ListItemIcon>
                        <IconComponent fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItemButton>
            </ListItem>
        )}, [router.pathname]);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    p: 3,
                    bgcolor: "background.sidebar",
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left">
            <List sx={{color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>DISCOVER</Typography>
                {discoverButtons.map((item) => SweetItem(item))}
            </List>
            <List sx={{color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>LIBRARY</Typography>
                {libraryButtons.map((item) => SweetItem(item))}
            </List>

            <Grow in={player.song.id !== undefined}>
                <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    mt="auto"
                    mb={8}
                    borderRadius={2}
                    overflow="hidden"
                    sx={{pointerEvents: "none"}}>
                    <div id="player"/>
                </Box>
            </Grow>
        </Drawer>
    )
}
