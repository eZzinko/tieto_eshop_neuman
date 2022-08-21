import { FunctionComponent, PropsWithChildren } from 'react';
import { useContextRequired, useFormat } from '../../hooks';
import { CartReducerActionType } from '../../lib/enum';
import { CartProviderContext } from '../../providers/CartProvider';
import { Card, Heading, Button } from '../index';
import { CartItemProps } from './CartItem.types';

/**
 * CartItem component
 * @return JSX.Element
 */
const CartItem: FunctionComponent<PropsWithChildren<CartItemProps>> = ({ item }) => {
	// get global cart context
	const { dispatch } = useContextRequired(CartProviderContext);

	// hooks
	const format = useFormat();

	return (
		<Card className="flex gap-2 flex-col sm:flex-row">
			{/* product image */}
			<img src={item.image} alt={item.name} className="sm:w-32 h-32 sm:h-unset aspect-video object-cover" />

			{/* product info */}
			<div className="w-full">
				<Heading level={2}>{item.name}</Heading>
				<p className="line-clamp-3">{item.desctiption}</p>
			</div>

			{/* product actions */}
			<div className="flex flex-row-reverse sm:flex-col justify-between items-end">
				{/* remove cart item action */}
				<Button variant="ghost" className="w-min" onClick={() => dispatch({ type: CartReducerActionType.REMOVE_FROM_CART, payload: item })}>
					Remove
				</Button>

				<div className="flex items-center gap-4">
					{/* quantity control */}
					<span className="flex items-center gap-2">
						<label htmlFor={`quantity-${item.productId}`}>Quantity</label>
						<input
							id={`quantity-${item.productId}`}
							type="number"
							className="bg-gray-50 w-16"
							value={item.quantity}
							onChange={(e) =>
								dispatch({ type: CartReducerActionType.CHANGE_PRODUCT_QUANTITY, payload: { ...item, quantity: Number(e.target.value) } })
							}
						/>
					</span>

					{/* formatted price */}
					<span className="text-xl font-bold text-rose-500">{format.price(item.price)}</span>
				</div>
			</div>
		</Card>
	);
};

/**
 * CartItem component default export
 * @default
 */
export default CartItem;
