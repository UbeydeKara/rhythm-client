import React, {createContext, useEffect, useState} from 'react';
import useYoutube from "@/src/hooks/useYoutube";
import {SongType} from "@/src/types/SongType";

// ----------------------------------------------------------------------

const initialState = {
    song: {} as SongType,
    status: "unstarted" as "unstarted" | "playing" | "paused" | "ended",
    isMuted: false,
    offset: 0,
    duration: 0,
    playSong: (item: SongType) => {},
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
    const [song, setSong] = useState<SongType>(initialState.song);
    const [status, setStatus] = useState(initialState.status);
    const [isMuted, setMuted] = useState(initialState.isMuted);
    const [offset, setOffset] = useState(initialState.offset);
    const [duration, setDuration] = useState(initialState.duration);

    const [ytPlayer] = useYoutube();

    const playSong = (item: SongType) => {
        document.title = `${item.name} - ${item.artists} | Rhythm`;

        setSong(item);
        setOffset(0);
        setStatus("playing");

        if (ytPlayer) {
            ytPlayer.loadVideoById(item.ytVideoId);
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

        if (duration > 0 && currentTime >= duration) {
            setStatus("ended");
        }

        setDuration(ytPlayer.getDuration());
        setOffset(currentTime);
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
