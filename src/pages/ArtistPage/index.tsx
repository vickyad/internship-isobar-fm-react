import ArtistBanner from "../../components/ArtistBanner"
import ArtistHeader from "../../components/ArtistHeader"
import ArtistInfoText from "../../components/ArtistInfoText"

interface ArtistHeaderProps {
    onGoBack: () => void
}

const ArtistPage: React.FC<ArtistHeaderProps> = ({ onGoBack }) => {
    return (
        <>
            <ArtistHeader onGoBack={onGoBack} />
            <ArtistBanner />
            <ArtistInfoText />
        </>
    )
}
export default ArtistPage