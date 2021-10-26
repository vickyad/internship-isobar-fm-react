import { useState } from "react"
import ArtistCard from "../../components/ArtistCard"
import MenuHeader from "../../components/MenuHeader"
import OrderByOptions from "../../components/OrderByOptions"
import './styles.css'

const Home: React.FC = () => {
    const [searchInput, setSearchInput] = useState('')
    const [showOrderByOptions, setShowOrderByOptions] = useState(false)

    const handleSearchButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        console.log('pesquisa pesquisa')
    }

    const handleSortAlphabetically = () => {
        console.log('ordenando por ordem alfabética')
    }

    const handleSortByPopularity = () => {
        console.log('ordenando por popularidade')
    }

    return (
        <div className="home">
            <MenuHeader inputValue={searchInput} searchResults={0} handleInputChange={newString => setSearchInput(newString)} handleButtonClick={event => handleSearchButton(event)} toggleOrderBy={() => setShowOrderByOptions(!showOrderByOptions)} />
            {showOrderByOptions &&
                <OrderByOptions sortAlphabetically={() => handleSortAlphabetically()} sortByPopularity={() => handleSortByPopularity()} />
            }
            <ArtistCard imageUrl="https://www.vagalume.com.br/pink-floyd/images/pink-floyd.jpg" name="Pink Floyd" points={600} onClick={() => console.log('faço nada')} />
        </div>
    )
}
export default Home