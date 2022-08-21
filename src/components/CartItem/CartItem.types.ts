import { HTMLProps } from 'react';
import { CartProdutDTO } from '../../lib/types';

/**
 * CartItemProps component
 * @export
 */
export type CartItemProps = {
	item: CartProdutDTO;
} & HTMLProps<HTMLDivElement>;
