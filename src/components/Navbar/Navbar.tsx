import { FunctionComponent } from "react";
import { BsCartFill } from "react-icons/bs";
import { SiInstacart } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContextRequired } from "../../hooks";
import { CartProviderContext } from "../../providers/CartProvider";

import { Button } from "../Button";
import { CartItem } from "../CartItem";
import { Heading } from "../Heading";
import { NavbarProps } from "./Navbar.types";
import { AiFillCloseCircle } from "react-icons/ai";

/**
 * Navbar component
 * @return JSX.Element
 */
const Navbar: FunctionComponent<NavbarProps> = () => {
  const { open, setOpen, cartItems } = useContextRequired(CartProviderContext);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      {/* container for width control */}
      <div className="p-4 max-w-7xl m-auto flex justify-between">
        {/* logo section */}
        <Link to="/" className="flex gap-2 items-center">
          <span>
            <SiInstacart fontSize={24} />
          </span>
          <Heading level={2}>Logo Ipsum</Heading>
        </Link>

        {/* cart section */}
        <div>
          <Button
            variant="primary"
            className="w-min rounded-full"
            icon={<BsCartFill fontSize={16} />}
            onClick={() => setOpen(true)}
          />
          {/* cart container */}
          {open && (
            <div className="absolute bg-black/50 w-screen h-screen left-0 top-0 overflow-hidden">
              <div className="absolute bg-white w-1/2 h-full right-0 p-4">
                <header className="flex justify-between">
                  <Heading level={2}>Cart detail</Heading>
                  <Button
                    variant="primary"
                    className="w-min"
                    icon={<AiFillCloseCircle />}
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </Button>
                </header>

                <div className="grid gap-2">
                  {cartItems.map((item) => (
                    <CartItem key={item.productId} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

/**
 * Navbar component default export
 * @default
 */
export default Navbar;
