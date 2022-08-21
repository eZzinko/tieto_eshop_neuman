import React, { FunctionComponent } from 'react';
import { Heading, ProductCard } from '../components';
import { getProductList } from '../helpers/data';
import { ProductListDTO } from '../lib/types';

/*
 * Products page
 * @return JSX.Element
 */
const Products: FunctionComponent = () => {
	// get all products
	const products: ProductListDTO = getProductList();

	return (
		<React.Fragment>
			<Heading level={1}>List of all products</Heading>

			{/* render products in grid */}
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-3 sm:grid-cols-2">
				{products && products.length > 0 && products.map((product) => <ProductCard key={product.productId} product={product} />)}
			</div>
		</React.Fragment>
	);
};

/*
 * Products page default export
 * @default
 */
export default Products;
