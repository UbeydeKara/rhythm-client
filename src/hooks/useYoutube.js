import {useEffect, useState} from "react";

export default function useYoutube() {
    const [player, setPlayer] = useState();

    const loadYoutubeFrame = () => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        tag.onload = onYouTubeIframeAPIReady;
    }

    const onYouTubeIframeAPIReady = () => {
        window.YT.ready(function() {
            const player = new YT.Player('player', {
                height: '200',
                width: '200',
                playerVars: {
                    controls: 0
                }
            });
            setPlayer(player);
        });
    }

    const playVideo = (videoId) => {
        player.loadVideoById(videoId);
        player.playVideo();
    }

    const stopVideo = () => {
        player.stopVideo();
    }

    useEffect(() => {
        if (!window.YT)
            loadYoutubeFrame();
    }, []);

    return {
        playVideo,
        stopVideo
    }
}
