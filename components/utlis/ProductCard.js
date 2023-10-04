import Image from "next/image";
import Favorite from "./Favorite";
import Cart from "./Cart";



const ProductCard = ({ product }) => {
    return (
      <div className=" basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 ">
        <div className="bg-violet-50 relative">
          <button className="absolute bottom-3 right-4">
            <Cart product={product}/>
          </button>
          <div className="relative">
            <button className="absolute top-2 right-2">
              <Favorite />
            </button>
            <Image
              width={450}
              height={250}
              className="h-[150px] object-cover"
              src={product.images[0]}
              alt={product.title}
            />
          </div>
  
          <div className="pl-3 py-3">
            <h3>{product.title}</h3>
            <div className="flex flex-col">
              {product.discountPercentage && (
                <p className="text-violet-900 text-base font-medium">
                  $
                  {Math.round(
                    product.price -
                      product.price * (product.discountPercentage / 100)
                  )}
                </p>
              )}
              <div className="flex gap-2 items-center">
                <p
                  className={
                    product.discountPercentage
                      ? "line-through text-sm text-gray-500"
                      : "text-violet-900"
                  }
                >
                  ${product.price}
                </p>
                {product.discountPercentage && (
                  <span className="text-xs text-gray-600">
                    {product.discountPercentage}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  