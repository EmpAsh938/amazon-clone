import { createContext, useContext, useEffect, useState } from "react";
import prods from "./products.json";

const AddContext = createContext();

export default function CartContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  const getItem = (param) => {
    setCartItems((prevState) => [
      ...prevState,
      prods.find((item) => item.title === param),
    ]);
  };

  const removeItem = (param) => {
    let newCart = cartItems.filter((item) => item.title !== param);
    setCartItems(newCart);
  };

  const totalAmount = () => {
    let tempTotal = cartItems.reduce((acc, next) => {
      acc += next.price;
      return acc
    }, 0);
    setTotal(tempTotal)
  };

  useEffect(() => {
    totalAmount()
  }, [cartItems]);

  return (
    <AddContext.Provider
      value={{
        cartItems,
        getItem,
        removeItem,
        total,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}

export const useAddCart = () => {
  return useContext(AddContext);
};

export { AddContext, CartContext };
