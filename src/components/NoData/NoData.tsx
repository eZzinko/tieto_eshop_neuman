import React, { FunctionComponent, PropsWithChildren } from 'react';
import { isDefined } from '../../helpers/common';
import { Card } from '../Card';
import { GoCircleSlash } from 'react-icons/go';
import { NoDataProps } from './NoData.types';

/**
 * NoData component
 * @return JSX.Element
 */
const NoData: FunctionComponent<PropsWithChildren<NoDataProps>> = ({ children }) => {
	return (
		<Card className="flex flex-col gap-2 items-center justify-center">
			{/* noData icon */}
			<span>
				<GoCircleSlash fontSize={32} className="text-rose-400" />
			</span>

			{/* display noData text */}
			<span>{isDefined(children) ? children : 'No data avaiable'}</span>
		</Card>
	);
};

/**
 * NoData component default export
 * @default
 */
export default NoData;
