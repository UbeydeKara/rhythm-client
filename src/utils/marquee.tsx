import {keyframes} from "@mui/material";

export const marquee = (text: string, ratio: number) => {
    if (text.length > 25) {
        const to = "-" + (text.length * ratio) + "px";
        return keyframes`
          from { transform: translateX(5px); }
          to { transform: translateX(${to}); }` + " 12s linear infinite alternate";
    }
}
