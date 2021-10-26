import React from 'react'
import SearchBar from '../SearchBar'
import Logo from '../../assets/logo.png'
import OrderBy from '../../assets/order_by.png'
import './styles.css'

interface SearchBarProps {
    inputValue: string
    searchResults: number
    handleInputChange: (newValue: string) => void
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    toggleOrderBy: () => void
}

const MenuHeader: React.FC<SearchBarProps> = ({ inputValue, searchResults, handleInputChange, handleButtonClick, toggleOrderBy }) => {
    return (
        <header className="menu-header">
            <div className="menu-header__top-header">
                <SearchBar inputValue={inputValue} handleInputChange={handleInputChange} handleButtonClick={handleButtonClick} />
                <img className="menu-header__top-header__logo" src={Logo} alt="" />
            </div>
            <div className="menu-header__bottom-header">
                <span className={`menu-header__bottom-header__search-results ${inputValue && 'show-box'}`}>
                    {searchResults} resultado(s)
                </span>
                <button className="menu-header__bottom-header__order-by-button" onClick={toggleOrderBy}><img src={OrderBy} alt="order by" /></button>
            </div>
        </header>
    )
}
export default MenuHeader