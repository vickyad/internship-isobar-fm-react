import './styles.css'

interface ArtistBannerProps {
    name: string
    image: string
    genre: string
    plays: number
}

const ArtistBanner: React.FC<ArtistBannerProps> = ({ name, image, genre, plays }) => {
    return (
        <section className="artist-banner">
            <img alt="" src={image} />
            <div className="artist-banner__profile">
                <h1 className="artist-banner__profile__artist-name">{name}</h1>
                <img alt="" src={image} />
            </div>
            <div className="artist-banner__general-info">
                <span>{genre}</span>
                <span>{plays} plays</span>
            </div>
        </section>
    )
}
export default ArtistBanner