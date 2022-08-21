import { HTMLProps } from 'react';
import { ProductDTO } from '../../lib/types';

/**
 * ProductCardProps component
 * @export
 */
export type ProductCardProps = {
	product: ProductDTO;
} & HTMLProps<HTMLDivElement>;
