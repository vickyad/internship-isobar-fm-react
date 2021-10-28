import { useEffect, useState } from "react"
import ArtistAlbuns from "../../components/ArtistAlbuns"
import ArtistBanner from "../../components/ArtistBanner"
import ArtistHeader from "../../components/ArtistHeader"
import ArtistInfoText from "../../components/ArtistInfoText"
import api from "../../request/band"
import AlbumInfoType from "../../types/AlbumInfoType"
import BandInfoType from "../../types/BandInfoType"

interface ArtistHeaderProps {
    artistId: string
    onGoBack: () => void
}

const ArtistPage: React.FC<ArtistHeaderProps> = ({ onGoBack, artistId }) => {
    const [artistData, setArtistData] = useState<BandInfoType>()
    const [albumList, setAlbumList] = useState<AlbumInfoType[]>()

    useEffect(() => {
        api.get(`/bands/${artistId}`)
            .then((response) => {
                setArtistData(response.data)
                if (artistData && artistData.albums) {
                    api.get('/albums')
                        .then((response) => {
                            const newAlbumList: AlbumInfoType[] = []

                            artistData.albums.forEach(item => {
                                const album = response.data.find((album: AlbumInfoType) => album.id === item)
                                newAlbumList.push(album)
                            })
                            setAlbumList(newAlbumList)
                        })
                        .catch((err) => {
                            console.error("ops! ocorreu um erro" + err)
                        })
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err)
            })
    }, [artistData, artistId])

    return (
        <>
            {artistData &&
                <>
                    <ArtistHeader onGoBack={onGoBack} />
                    <ArtistBanner name={artistData.name} image={artistData.image} genre={artistData.genre} plays={artistData.numPlays} />
                    <ArtistInfoText text={artistData.biography} />
                    {albumList && <ArtistAlbuns albumList={albumList} />}
                </>
            }
        </>
    )
}
export default ArtistPage