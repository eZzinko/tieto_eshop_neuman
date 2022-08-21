import { FunctionComponent, PropsWithChildren } from 'react';
import { CardProps } from './Card.types';

/**
 * Card component
 * @return JSX.Element
 */
const Card: FunctionComponent<PropsWithChildren<CardProps>> = ({ noShadow = false, children, ...props }) => {
	return (
		<div className={`bg-white rounded-xl p-4 w-full ${!noShadow && 'shadow-lg hover:shadow-xl transition-all duration-200'} ${props.className}`}>
			{children}
		</div>
	);
};

/**
 * Card component default export
 * @default
 */
export default Card;
