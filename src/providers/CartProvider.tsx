import { createContext, Dispatch, FunctionComponent, PropsWithChildren, SetStateAction, useReducer, useState } from 'react';
import { CartReducerActionType } from '../lib/enum';
import { CartProdutDTO } from '../lib/types';

/**
 * CartProvider Context
 * @type {React.Context<undefined>}
 */
export const CartProviderContext = createContext<CartProviderContextProps | undefined>(undefined);

/*
 * CartProvider component
 * @constructor
 */
const CartProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [cartItems, dispatch] = useReducer(cartReducer, []);

	return <CartProviderContext.Provider value={{ open, setOpen, cartItems, dispatch }}>{children}</CartProviderContext.Provider>;
};

export const cartReducer = (state: CartProdutDTO[], action: CartReducerAction) => {
	switch (action.type) {
		case CartReducerActionType.ADD_TO_CART:
			return [...state, action.payload];

		case CartReducerActionType.REMOVE_FROM_CART:
			return state.filter((product) => product.productId !== action.payload.productId);

		case CartReducerActionType.CHANGE_PRODUCT_QUANTITY:
			return state.filter((product) =>
				product.productId === action.payload.productId ? (product.quantity = action.payload.quantity) : product.quantity,
			);

		default:
			return state;
	}
};

export default CartProvider;

type CartProviderContextProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	cartItems: CartProdutDTO[];
	dispatch: Dispatch<CartReducerAction>;
};

type CartReducerAction = {
	type: CartReducerActionType;
	payload: CartProdutDTO;
};
