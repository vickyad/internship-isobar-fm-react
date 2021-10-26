import SearchIcon from '../../assets/search.png'
import './styles.css'

interface SearchBarProps {
    inputValue: string
    handleInputChange: (newValue: string) => void
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ inputValue, handleInputChange, handleButtonClick }) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(event.target.value)
    }

    return (
        <form>
            <div className="search-bar">
                <input className="search-bar__search-input" type="text" value={inputValue} onChange={handleOnChange} />
                <button className="search-bar__search-button" onClick={event => handleButtonClick(event)}><img src={SearchIcon} alt="search artists" /></button>
            </div>
        </form>
    )
}
export default SearchBar