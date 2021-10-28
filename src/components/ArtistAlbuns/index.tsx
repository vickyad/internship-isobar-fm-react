import AlbumInfoType from "../../types/AlbumInfoType"
import AlbumCard from "../AlbumCard"
import './styles.css'

interface ArtistAlbunsProps {
    albumList: AlbumInfoType[]
}

const ArtistAlbuns: React.FC<ArtistAlbunsProps> = ({ albumList }) => {
    return (
        <>
            <h2 className="artist-albuns__title">Albuns</h2>
            <div className="artist-albuns__album-grid">
                {albumList && albumList.map(album => <AlbumCard key={album.id} image={album.image} title={album.name} />)}
            </div>
        </>
    )
}
export default ArtistAlbuns