
import Link from "next/link";
import CartCount from "./CartCount";



const Navbar = () => {
    return (<header className="py-4 bg-violet-100 sticky top-0 z-10">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between ">
        <div>logo</div>
        <div className="flex ">
        <Link href={"products/favorite"}>My favorites</Link>
        <div className="cart ml-8">
          <CartCount/>
        </div>
        </div>
      </nav>
    </div>
  </header>
    );
}

export default Navbar;