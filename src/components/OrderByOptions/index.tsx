import './styles.css'

interface OrderByOptionsProps {
    currentOrder: number
    sortAlphabetically: () => void
    sortByPopularity: () => void
}

const OrderByOptions: React.FC<OrderByOptionsProps> = ({ currentOrder, sortAlphabetically, sortByPopularity }) => {
    return (
        <div className="order-by-dialog">
            <button className={`order-by-dialog__button ${!currentOrder && 'activated-button'}`} onClick={sortAlphabetically}>Ordem alfabética</button>
            <button className={`order-by-dialog__button ${currentOrder && 'activated-button'}`} onClick={sortByPopularity}>Popularidade</button>
        </div>
    )
}
export default OrderByOptions