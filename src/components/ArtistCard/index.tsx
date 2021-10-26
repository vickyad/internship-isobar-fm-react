import React from 'react'
import './styles.css'

interface ArtistCardProps {
    imageUrl: string
    name: string
    points: number
    onClick: () => void
}

const ArtistCard: React.FC<ArtistCardProps> = ({ imageUrl, name, points, onClick }) => {
    return (
        <button className="artist-card-wrapper" onClick={onClick}>
            <div className="artist-card">
                <img className="artist-card__img" src={imageUrl} alt={`${name} profile`} />
                <div className="artist-card__info">
                    <h2>{name}</h2>
                    <span>{points} points</span>
                </div>
            </div>
            <hr className="artist-card__divider" />
        </button>
    )
}
export default ArtistCard