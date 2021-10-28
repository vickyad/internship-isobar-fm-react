import React, { useEffect, useState } from 'react'
import BandBannerType from '../../types/BandBannerType'
import api from '../../request/band'
import './styles.css'

interface ArtistCardProps {
    band: BandBannerType
    onUpdate: (bandId: string, playCount: number) => void
    onClick: () => void
}

const ArtistCard: React.FC<ArtistCardProps> = ({ band, onUpdate, onClick }) => {
    const [bandId, setBandId] = useState(0)
    useEffect(() => {
        api
            .get(`/bands/${band.id}`)
            .then((response) => {
                setBandId(response.data.numPlays)
                onUpdate(band.id, response.data.numPlays)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err)
            })
    }, [bandId])

    return (
        <button className="artist-card-wrapper" onClick={onClick}>
            <div className="artist-card">
                <img className="artist-card__img" src={band.image} alt={`${band.name} profile`} />
                <div className="artist-card__info">
                    <h2>{band.name}</h2>
                    <span>{new Intl.NumberFormat("es-ES").format(bandId)} plays</span>
                </div>
            </div>
            <hr className="artist-card__divider" />
        </button>
    )
}
export default ArtistCard