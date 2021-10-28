import { useEffect, useState } from "react"
import ArtistCard from "../../components/ArtistCard"
import MenuHeader from "../../components/MenuHeader"
import OrderByOptions from "../../components/OrderByOptions"
import OrderEnum from "../../constants/OrderEnum"
import api from "../../request/band"
import BandBannerType from "../../types/BandBannerType"
import './styles.css'

interface HomeProps {
    onProfileClick: (artistId: string | null) => void
}

const Home: React.FC<HomeProps> = ({ onProfileClick }) => {
    const [searchInput, setSearchInput] = useState('')
    const [showOrderByOptions, setShowOrderByOptions] = useState(false)
    const [bandList, setBandList] = useState<BandBannerType[]>([]);
    const [currentOrder, setCurrentOrder] = useState(OrderEnum.ALPHABETICALLY)
    const [allBandsPlayCount, setAllBandsPlayCount] = useState(new Map());

    const setBandPlayCount = (bandId: string, playCount: number) => {
        const nextState = new Map(allBandsPlayCount.set(bandId, playCount))
        setAllBandsPlayCount(nextState);
    }

    useEffect(() => {
        api
            .get("/bands")
            .then((response) => setBandList(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err)
            })
    }, [bandList])

    const listOnDisplay = (currentOrder ? [...bandList.sort((a, b) => {
        const playCountA = allBandsPlayCount.get(a.id)
        const playCountB = allBandsPlayCount.get(b.id)

        if (playCountA < playCountB) {
            return 1
        } else if (playCountA > playCountB) {
            return -1
        } else {
            return 0
        }
    })] : [...bandList]).filter((artist) => {
        return artist.name.toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <div className="home">
            <MenuHeader
                inputValue={searchInput}
                searchResults={listOnDisplay.length}
                handleInputChange={newString => setSearchInput(newString)}
                handleButtonClick={event => event.preventDefault()}
                toggleOrderBy={() => setShowOrderByOptions(!showOrderByOptions)}
            />
            {showOrderByOptions &&
                <OrderByOptions
                    sortAlphabetically={() => setCurrentOrder(OrderEnum.ALPHABETICALLY)}
                    sortByPopularity={() => setCurrentOrder(OrderEnum.BY_POPULARITY)}
                    currentOrder={currentOrder}
                />
            }
            {listOnDisplay.map(band => <ArtistCard key={band.id} band={band} onUpdate={(bandId, playCount) => setBandPlayCount(bandId, playCount)} onClick={() => onProfileClick(band.id)} />)}
        </div>
    )
}
export default Home