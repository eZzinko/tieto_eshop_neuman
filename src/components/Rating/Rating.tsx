import React, { FunctionComponent, PropsWithChildren } from 'react';
import { RatingProps } from './Rating.types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

/**
 * Rating component
 * @return JSX.Element
 */
const Rating: FunctionComponent<PropsWithChildren<RatingProps>> = ({ rating }) => {
	return (
		<div className="flex">
			{[...Array(5)].map((_, index) => (
				<div key={index}>
					{rating > index ? <AiFillStar fontSize={24} className="text-amber-400" /> : <AiOutlineStar fontSize={24} className="text-amber-400" />}
				</div>
			))}
		</div>
	);
};

/**
 * Rating component default export
 * @default
 */
export default Rating;
