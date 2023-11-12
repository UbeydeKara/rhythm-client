import {useContext} from "react";
import {PlayerContext} from "../contexts/PlayerContext";

const usePlayer = () => useContext(PlayerContext);

export default usePlayer;
