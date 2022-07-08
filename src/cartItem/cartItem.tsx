import  Button  from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
import { Wrapper } from "../App.styles";
import Item from "../item/item";

//props
type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: $ {item.price}</p>
                <p>Total: $ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button 
                size="small"
                disableElevation
                variant="contained" 
                color="primary" 
                onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <p>{item.quantity}</p>
                <Button 
                size="small"
                disableElevation
                variant="contained" 
                color="primary" 
                onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem;