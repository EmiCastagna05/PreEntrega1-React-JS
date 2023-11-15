import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartWidgetContainer">
            <button className="cartWidgetButton"><FaShoppingCart /></button>
            <p className="cartWidgetNumber">3</p>
        </div>
    )
}

export default CartWidget
