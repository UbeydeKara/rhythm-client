import {useCallback} from "react";

// icons
import {
    FavoriteTwoTone,
    LibraryMusic,
    MusicNote,
    Person2,
    RadioButtonCheckedTwoTone,
    StorefrontTwoTone,
    Subscriptions, WebAssetTwoTone
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

const icons = [
    Subscriptions, Person2, LibraryMusic, MusicNote, StorefrontTwoTone, RadioButtonCheckedTwoTone,
    FavoriteTwoTone, WebAssetTwoTone
]

const libraryButtons = [
    { id: 0, text: 'Playlists', icon: icons[0], to: "/playlists" },
    { id: 1, text: 'Artists', icon: icons[1], to: "/artists" },
    { id: 2, text: 'Albums', icon: icons[2], to: "/albums" },
    { id: 3, text: 'Songs', icon: icons[3], to: "/songs" }
]
const discoverButtons = [
    { id: 4, text: 'Store', icon: icons[4], to: "/store" },
    { id: 5, text: 'Radio', icon: icons[5], to: "/radio" },
    { id: 6, text: 'For You', icon: icons[6], to: "/for-you" },
    { id: 7, text: 'Browse', icon: icons[7], to: "/browse" }
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
                <ListItemButton component={Link} href={item.to} sx={{my: .2, borderRadius: 1, color: color}}>
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
                    bgcolor: "divider",
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left">
            <List sx={{color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>LIBRARY</Typography>
                {libraryButtons.map((item) => SweetItem(item))}
            </List>
            <List sx={{color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>DISCOVER</Typography>
                {discoverButtons.map((item) => SweetItem(item))}
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
