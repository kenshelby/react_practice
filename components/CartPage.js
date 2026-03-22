import { useSelector } from "react-redux"

const CartPage = () => {
    const item = useSelector((store) => store.cart.item);
    return(
        <div>This is cart page

        </div>
    )
}

export default CartPage;