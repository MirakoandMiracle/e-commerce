"use client"



import { ProductContext } from "@/context/ProductProvider";
import { useContext,  useEffect,  useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Favorite = ({product}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavoriteProduct, removeFavoriteProduct , favoriteProducts} = useContext(
    ProductContext
  );

  useEffect(() => {
    setIsFavorite(favoriteProducts.some((favProduct) => favProduct.id === product.id));
  }, [favoriteProducts, product.id]);



  const onClickFavoriteHandler=()=>{
    if (!isFavorite) {
      addFavoriteProduct(product);
 
     
      
    }else{
      removeFavoriteProduct(product.id);
      
    }
  
  }
  return (
    <>
      <button className="absolute top-2 right-2" onClick={() => onClickFavoriteHandler()}>
      {isFavorite ? (
        <AiFillHeart size={24} className="text-violet-900 cursor-pointer"  />
      ) : (
        <AiOutlineHeart size={24} className="text-violet-900 cursor-pointer" />
      )}
      </button>
    </>
  );
};

export default Favorite;
