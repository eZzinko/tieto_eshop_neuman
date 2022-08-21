import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { useContextRequired, useFormat } from '../../hooks';
import { CartProviderContext } from '../../providers/CartProvider';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { CartProps } from './Cart.types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { CartItem } from '../CartItem';
import { NoData } from '../NoData';
import { Overlay } from '../Overlay';

/**
 * Cart component
 * @return JSX.Element
 */
const Cart: FunctionComponent<PropsWithChildren<CartProps>> = ({ noShadow = false, children }) => {
	// get global cart context
	const { open, setOpen, cartItems } = useContextRequired(CartProviderContext);

	// hooks
	const format = useFormat();

	// calculate totalPrice
	const totalPrice = useMemo(() => cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0), [cartItems]);

	return (
		<Overlay active={open}>
			{/* cart container */}
			<div className="bg-white xl:w-1/2 min-h-full h-content right-0 p-4">
				{/* cart header */}
				<header className="flex justify-between">
					{/* cart title */}
					<Heading level={2}>Cart detail</Heading>

					{/* cart close button */}
					<Button variant="primary" className="w-min" icon={<AiFillCloseCircle />} onClick={() => setOpen(false)}>
						Close
					</Button>
				</header>

				{/* cart body */}
				{cartItems.length ? (
					<div className="grid gap-4">
						{/* render cart items */}
						<div className="grid gap-2">
							{cartItems.map((item) => (
								<CartItem key={item.productId} item={item} />
							))}
						</div>

						{/* display total price */}
						<Heading level={2}>
							Summary: <span className="text-rose-500">{format.price(totalPrice)}</span>
						</Heading>
					</div>
				) : (
					<NoData>The cart is empty</NoData>
				)}
			</div>
		</Overlay>
	);
};

/**
 * Cart component default export
 * @default
 */
export default Cart;
