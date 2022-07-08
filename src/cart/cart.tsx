import CartItem from "../cartItem/cartItem";
//Styles
import { Wrapper } from "./cart.styles";
//Types
import { CartItemType } from "../App";

//props
type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

//create component
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Cart is empty</p> : null}
            {cartItems.map(item => (
                <CartItem/>
            ) )}
        </Wrapper>
    )
}

export default Cart;