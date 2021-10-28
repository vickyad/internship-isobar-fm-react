import { useState } from 'react'
import './styles.css'

interface ArtistInfoTextProps {
    text: HTMLElement
}

const ArtistInfoText: React.FC<ArtistInfoTextProps> = ({ text }) => {
    const [expandText, setExpandText] = useState(false)

    return (
        <section className="artist-info-text">
            <div className={`artist-info-text__text-wrapper ${expandText && 'read-more-opened'}`}>
                <div>
                    {text}
                </div>
                <div className="degrade"></div>
            </div>
            <button className={`read-more-button ${expandText && 'read-more-opened'}`} onClick={() => setExpandText(!expandText)}>
                <div className="item-divider"></div>
                <span id="button-symbol">{expandText ? '-' : '+'}</span>
                <div className="item-divider"></div>
            </button>
        </section>
    )
}
export default ArtistInfoText