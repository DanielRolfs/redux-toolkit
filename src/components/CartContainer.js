import CartItem from "./CartItem"
import {useSelector} from "react-redux"

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((store) => store.cart)
  
    if (amount < 1){
        return <section class='cart'>
            <header>
                <h2>your bag</h2>
                <h4 class='empty-cart'>is currently empty</h4>
            </header>
        </section>
    }
  
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return (
                        <CartItem key={item.id} {...item}/>
                    )
                })}
            </div>

        </section>
    )
}

export default CartContainer