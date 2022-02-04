import getAllPlaylists from '../../services/getAllPlaylists';

export default function ButtonGetAllPlaylists() {
    return (
        <div>
            <button onClick={getAllPlaylists}></button>
        </div>
    );
}
