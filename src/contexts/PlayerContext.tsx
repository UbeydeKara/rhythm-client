import React, {createContext, useEffect, useState} from 'react';
import useYoutube from "@/src/hooks/useYoutube";
import {SongType} from "@/src/types/SongType";

// ----------------------------------------------------------------------

const initialState = {
    song: {} as SongType,
    isPLaying: false,
    isMuted: false,
    offset: 0,
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
    const [isPLaying, setPlaying] = useState(initialState.isPLaying);
    const [isMuted, setMuted] = useState(initialState.isMuted);
    const [offset, setOffset] = useState(initialState.offset);

    const [ytPlayer] = useYoutube();

    const playSong = (item: SongType) => {
        document.title = `${item.title} - ${item.artist} | Rhythm`;

        setSong(item);
        setOffset(0);
        setPlaying(true);

        ytPlayer?.loadVideoById(item.source);
        ytPlayer?.playVideo();
    }

    const resumeSong = () => {
        ytPlayer?.playVideo();
        setPlaying(true);
    }

    const pauseSong = () => {
        ytPlayer?.pauseVideo();
        setPlaying(false);
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
        if (newOffset - 1 !== offset) {
            ytPlayer?.seekTo(newOffset);
            setPlaying(true);
        }

        setOffset(newOffset);
    }

    useEffect(() => {
        if (!isPLaying || song.duration === offset)
            return;

        const id = setInterval(() => updateOffset(offset + 1), 1000);
        return () => {
            clearInterval(id);
        };
    }, [isPLaying, offset]);

    return (
        <PlayerContext.Provider
            value={{
                song,
                isPLaying,
                isMuted,
                offset,
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
