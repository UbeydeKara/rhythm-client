import React, {createContext, useEffect, useState} from 'react';
import useYoutube from "@/src/hooks/useYoutube";
import {SongType} from "@/src/types/SongType";
import {artistNames} from "@/src/utils/artistNames";
import YoutubeService from "@/src/services/youtube-service";
import {AlbumTrack} from "@/src/types/AlbumType";

// ----------------------------------------------------------------------

const initialState = {
    song: {} as SongType | AlbumTrack,
    status: "unstarted" as "unstarted" | "playing" | "paused" | "ended",
    isMuted: false,
    offset: 0,
    duration: 0,
    playSong: (item: SongType | AlbumTrack) => {},
    resumeSong: () => {},
    pauseSong: () => {},
    toggleMute: () => {},
    updateOffset: (newOffset: number) => {}
};

const PlayerContext = createContext(initialState);

// ----------------------------------------------------------------------

interface IPlayerProvider {
    children: React.ReactNode
}

function PlayerProvider({children}: IPlayerProvider) {
    const [song, setSong] = useState<SongType | AlbumTrack>(initialState.song);
    const [status, setStatus] = useState(initialState.status);
    const [isMuted, setMuted] = useState(initialState.isMuted);
    const [offset, setOffset] = useState(initialState.offset);
    const [duration, setDuration] = useState(initialState.duration);

    const [ytPlayer] = useYoutube();

    const playSong = async(item: SongType | AlbumTrack) => {
        const title = `${item.name} - ${artistNames(item.artists)}`;
        document.title = `${title} | Rhythm`;

        setSong(item);
        setOffset(0);
        setStatus("playing");

        if (ytPlayer) {
            const ytVideoId = await YoutubeService.findVideoId(item.id, title);
            ytPlayer.loadVideoById(ytVideoId.data);
            ytPlayer.playVideo();
        }
    }

    const resumeSong = () => {
        ytPlayer?.playVideo();
        setStatus("playing");
    }

    const pauseSong = () => {
        ytPlayer?.pauseVideo();
        setStatus("paused");
    }

    const toggleMute = () => {
        const muteStatus = !isMuted;

        if (muteStatus)
            ytPlayer?.mute();
        else
            ytPlayer?.unMute();

        setMuted(muteStatus);
    }

    const updateOffset = (newOffset: number) => {
        if (!ytPlayer)
            return;

        if (newOffset !== -1) {
            ytPlayer.seekTo(newOffset);
            setStatus("playing");
            return;
        }

        const currentTime = ytPlayer.getCurrentTime();
        const currentDuration = ytPlayer.getDuration();

        if (currentTime > 0 && currentTime === currentDuration)
            setStatus("ended");

        else {
            setDuration(currentDuration);
            setOffset(currentTime);
        }
    }

    useEffect(() => {
        if (status === "playing") {
            const id = setInterval(() => updateOffset(-1), 1000);
            return () => {
                clearInterval(id);
            };
        }
    }, [status]);

    return (
        <PlayerContext.Provider
            value={{
                song,
                status,
                isMuted,
                offset,
                duration,
                playSong,
                resumeSong,
                pauseSong,
                toggleMute,
                updateOffset
            }}>
            {children}
        </PlayerContext.Provider>
    );
}

export { PlayerProvider, PlayerContext };
