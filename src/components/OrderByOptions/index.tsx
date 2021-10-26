import './styles.css'

interface OrderByOptionsProps {
    sortAlphabetically: () => void
    sortByPopularity: () => void
}

const OrderByOptions: React.FC<OrderByOptionsProps> = ({ sortAlphabetically, sortByPopularity }) => {
    return (
        <div className="order-by-dialog">
            <button className="order-by-dialog__button" onClick={sortAlphabetically}>Ordem alfabética</button>
            <button className="order-by-dialog__button" onClick={sortByPopularity}>Popularidade</button>
        </div>
    )
}
export default OrderByOptions