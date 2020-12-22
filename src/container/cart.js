import { Cart } from "../components";
import { useAddCart } from '../addCart'

export function CartContainer() {
  const { cartItems, removeItem, total } = useAddCart()
  
  return (
    <Cart>
      <Cart.Image src="/images/ads.png" alt="Advertisement" />
      <Cart.Wrapper>
        {cartItems.length !== 0 ? (cartItems.map((item, id) => {
            const { title, image, price } = item
            return (
                <Cart.Item key={id}>
                    <Cart.Image src={image} alt={title} />
                    <Cart>
                        <Cart.Title>{title}</Cart.Title>
                        <Cart.Price>${price}</Cart.Price>
                        <Cart.Button onClick={() => removeItem(title)}>Remove an item</Cart.Button>
                    </Cart>
                </Cart.Item>
            ) 
        })) : (
          <h1>Your cart is empty!</h1>
        )}
        <Cart style={{marginBottom:'10px'}}>
          <Cart.Title>Total</Cart.Title>
          <Cart.Price>${total.toFixed(2)}</Cart.Price>
          <Cart.Button style={{width: '100%'}}>Checkout</Cart.Button>
        </Cart>
      </Cart.Wrapper>
    </Cart>
  );
}

