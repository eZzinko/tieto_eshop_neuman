import { Context, useContext } from 'react';
import { isDefined } from '../helpers/common';

/**
 * Hook that return NonNullable context
 * @param {React.Context<T>} context
 * @returns {NonNullable<T>}
 */

export const useContextRequired = <T>(context: Context<T>) => {
	const requiredContext = useContext(context);
	if (!isDefined(requiredContext)) throw new Error('Context is not active');

	return requiredContext;
};
