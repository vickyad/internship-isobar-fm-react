import './styles.css'

interface AlbumCardProps {
    image: string
    title: string
}

const AlbumCard: React.FC<AlbumCardProps> = ({ image, title }) => {
    return (
        <div className="album-card">
            <img className="album-card-img" src={image} alt="album cover" />
            <span className="album-card-title">{title}</span>
        </div>
    )
}
export default AlbumCard