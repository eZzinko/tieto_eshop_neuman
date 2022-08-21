import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { getProductList, productListType } from "../helpers/data";

/**
 * CartProvider Context
 * @type {React.Context<undefined>}
 */
export const CartProviderContext = createContext<
  CartProviderContextProps | undefined
>(undefined);

/*
 * CartProvider component
 * @constructor
 */
const CartProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const products: productListType[] = getProductList();
  const [cartItems, setCartItems] = useState<productListType[]>(
    products.splice(0, 4)
  );

  return (
    <CartProviderContext.Provider value={{ open, setOpen, cartItems }}>
      {children}
    </CartProviderContext.Provider>
  );
};

export default CartProvider;

export type CartProviderContextProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: productListType[];
};
