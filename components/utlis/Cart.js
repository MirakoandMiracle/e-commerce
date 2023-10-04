
"use client"

import { CartContext } from "@/context/CartProvider";
import { useContext, useState } from "react";
import { BsCartDash, BsCartFill } from "react-icons/bs";
const Cart = ({product}) => {

  const { addCard }= useContext(CartContext);
  const onClickAddCart =()=>{
product.orderQuantity = 1;
addCard(product);


  }
// const [bought, setBought] = useState(false);

// const onClickboughtHandler=()=>{
//   setBought(!bought)
// }

  return (
    <>
    {/* {bought? (
        <BsCartFill size={24} className="text-violet-900 cursor-pointer" onClick={onClickboughtHandler} />
      ) : (
        <BsCartDash size={24} className="text-violet-900 cursor-pointer" onClick={onClickboughtHandler} />
      )}
    */}
<BsCartFill size={24} className="text-violet-900 cursor-pointer" onClick={onClickAddCart} />

    </>
  );
};

export default Cart;
