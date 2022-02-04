import NewPlaylist from "../../screens/NewPlaylist";
import Playlist from "../../screens/Playlist";
import ButtonGetAllPlaylists from "../ButtonGetPlaylists";

export default function Main() {
    return (
        <div>
            <NewPlaylist />
            <Playlist />
            <ButtonGetAllPlaylists>Pegar Playlists</ButtonGetAllPlaylists>
        </div>
    );
}
