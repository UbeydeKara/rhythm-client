import {useEffect, useState} from "react";

interface IYTPlayer {
    loadVideoById: (mediaContentUrl: String, startSeconds?: Number) => void,
    playVideo: () => void,
    pauseVideo: () => void,
    mute: () => void,
    unMute: () => void,
    seekTo: (seconds: Number, allowSeekAhead?: Boolean) => void,
    getDuration: () => number,
    getCurrentTime: () => number
}

export default function useYoutube() {
    const [player, setPlayer] = useState<IYTPlayer>();

    const loadYoutubeFrame = () => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];

        if (firstScriptTag.parentNode)
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        tag.onload = onYouTubeIframeAPIReady;
    }

    /**
     * playerVars:
     */
    const onYouTubeIframeAPIReady = () => {
        (window as any).YT.ready(function() {
            const playerObj = new (window as any).YT.Player('player', {
                height: '200',
                width: '200',
                playerVars: {
                    controls: 0,
                    rel: 0
                }
            });
            setPlayer(playerObj);
        });
    }

    useEffect(() => {
        if (!(window as any).YT)
            loadYoutubeFrame();
        else
            onYouTubeIframeAPIReady();
    }, []);

    return [player];
}
