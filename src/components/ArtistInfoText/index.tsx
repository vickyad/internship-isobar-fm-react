import { useState } from 'react'
import './styles.css'

const ArtistInfoText: React.FC = () => {
    const [expandText, setExpandText] = useState(false)

    return (
        <section className="artist-info-text">
            <div className={`artist-info-text__text-wrapper ${expandText && 'read-more-opened'}`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris leo, mollis et lorem ac, suscipit placerat augue. Phasellus dapibus vulputate imperdiet. Nullam ac vestibulum tellus. Fusce tristique pretium neque non feugiat. Quisque sit amet nunc in sapien rutrum sodales vitae a dolor. Ut commodo, velit placerat interdum cursus, odio sapien tristique elit, a aliquam dolor enim in nunc. Suspendisse potenti. Cras vel ex eu massa rhoncus rhoncus. In feugiat dolor fermentum, commodo quam eget, euismod urna. Aenean congue consequat efficitur. Nunc vitae nulla id eros placerat facilisis ut eu metus. Praesent orci erat, vestibulum et justo auctor, sodales sodales neque. In vel blandit mi.
                </p>
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