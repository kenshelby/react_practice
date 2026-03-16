import { useSelector } from "react-redux";

const CartDialogBox = () => {

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
//   const { name, id, defaultPrice} = cartItems.info;
  return (
    <div className="cart-dialog-container">
        {cartItems.map(item => <div className="cart-dialogbox-oneItem" key={item.id}>{item.name}-{item.defaultPrice}</div> )}
    </div>
  )
}

export default CartDialogBox;
