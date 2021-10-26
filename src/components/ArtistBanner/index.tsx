import './styles.css'

const ArtistBanner: React.FC = () => {
    return (
        <section className="artist-banner">
            <img alt="" src="https://www.vagalume.com.br/pink-floyd/images/pink-floyd.jpg" />
            <div className="artist-banner__profile">
                <h1 className="artist-banner__profile__artist-name">Pink Floyd</h1>
                <img alt="" src="https://www.vagalume.com.br/pink-floyd/images/pink-floyd.jpg" />
            </div>
            <div className="artist-banner__general-info">
                <span>rock</span>
                <span>284.212 plays</span>
            </div>
        </section>
    )
}
export default ArtistBanner