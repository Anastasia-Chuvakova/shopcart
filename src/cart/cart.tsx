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
const calculateTotal = (items: CartItemType[]) => 
items.reduce((acc:number, item) => acc + item.price * item.quantity, 0);


    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Cart is empty</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ) )}
            <h2>Total: $ {calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;