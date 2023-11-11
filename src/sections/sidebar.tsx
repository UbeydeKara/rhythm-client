import * as React from 'react';
import {
    FavoriteTwoTone,
    LibraryMusic,
    MusicNote,
    Person2,
    RadioButtonCheckedTwoTone,
    StorefrontTwoTone,
    Subscriptions, WebAssetTwoTone
} from "@mui/icons-material";
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {useCallback} from "react";

const drawerWidth = 240;

const icons = [Subscriptions, Person2, LibraryMusic, MusicNote, StorefrontTwoTone, RadioButtonCheckedTwoTone, FavoriteTwoTone, WebAssetTwoTone]

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

export default function Sidebar() {
    const router = useRouter();

    const SweetItem = useCallback((item: typeof libraryButtons[0]) => {
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
                    bgcolor: "divider",
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left">
            <List sx={{p: 3, color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>LIBRARY</Typography>
                {libraryButtons.map((item) => SweetItem(item))}
            </List>
            <List sx={{px: 3, color: "text.secondary"}}>
                <Typography variant="subtitle2" sx={{ml: 2, my: 2}}>DISCOVER</Typography>
                {discoverButtons.map((item) => SweetItem(item))}
            </List>
        </Drawer>
    )
}
