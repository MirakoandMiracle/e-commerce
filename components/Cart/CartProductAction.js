"use client"


import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartProductAction = ({ product }) => {

    const {cartUpdate} = useContext(CartContext);

    const onAddQuantity = () => {
        product.orderQuantity += 1;
        cartUpdate(product);
      };
      const onMinusQuantity = () => {
        product.orderQuantity -= 1;
        cartUpdate(product);
      };
  return (
    <div className="flex gap-3 mt-3">
      

        <button onClick={onMinusQuantity} disabled={product.orderQuantity == 1}>
        <AiOutlineMinus size={26} className={`${
            product.orderQuantity == 1 ? "text-gray-500" : "text-violet-700"
          }`} />
        </button>
       
      
      <p>{product.orderQuantity}</p>
      <button
        onClick={onAddQuantity}
        disabled={product.orderQuantity == product.stock}
      >
        <AiOutlinePlus
          size={26}
          className={`${
            product.orderQuantity == product.stock
              ? "text-gray-500"
              : "text-violet-700"
          }`}
        />
      </button>
    </div>
  );
};

export default CartProductAction;
