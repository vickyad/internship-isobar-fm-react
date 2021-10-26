import Logo from '../../assets/logo.png'
import GoBack from '../../assets/left-chevron.png'
import './styles.css'

interface ArtistHeaderProps {
    onGoBack: () => void
}

const ArtistHeader: React.FC<ArtistHeaderProps> = ({ onGoBack }) => {
    return (
        <header className="artist-header">
            <button className="artist-header__go-back-button" onClick={onGoBack}><img src={GoBack} alt="go back to artist's list" /></button>
            <img className="artist-header__logo" src={Logo} alt="" />
        </header>
    )
}
export default ArtistHeader