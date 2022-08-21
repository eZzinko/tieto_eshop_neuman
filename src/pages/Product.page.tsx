import React, { FunctionComponent, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button, Card, Heading, Rating, ImageGallery, ProductCard } from '../components';
import { isDefined } from '../helpers/common';
import { getProductList } from '../helpers/data';
import { useContextRequired, useFormat } from '../hooks';
import { BsCartPlusFill } from 'react-icons/bs';
import { ProductListDTO } from '../lib/types';
import { CartProviderContext } from '../providers/CartProvider';
import { CartReducerActionType } from '../lib/enum';

/*
 * Product page
 * @return JSX.Element
 */
const Product: FunctionComponent = () => {
	// get global cart context
	const { cartItems, dispatch } = useContextRequired(CartProviderContext);

	// get productId from URL
	const { productId } = useParams();

	// hooks
	const format = useFormat();

	// find product by productID -> only for testing example
	const product = useMemo(() => {
		// get all products
		const products: ProductListDTO = getProductList();

		// find selected product by productId
		return products.find((product) => product.productId === productId);
	}, [productId]);

	// decide if product is avaiable
	const productInCart = useMemo(() => cartItems.some((cartProduct) => cartProduct.productId === product?.productId), [cartItems, product?.productId]);

	// related products
	const relatedProducts: ProductListDTO = getProductList();

	// redirect to main page if product is not found
	if (!isDefined(product)) {
		console.error('Product not found');
		return <Navigate to="/" replace={true} />;
	}
	return (
		<div className="flex flex-col gap-4">
			{/* product section */}
			<section>
				<Card className="grid md:grid-cols-2 gap-4">
					{/* image gallery */}
					<ImageGallery images={product.images} />

					{/* product info */}
					<div className="flex flex-col gap-4">
						{/* product name */}
						<Heading level={2}>{product.name}</Heading>

						{/* product rating */}
						<Rating rating={product.rating} />

						{/* product description */}
						<p>{product.desctiption}</p>

						{/* action container */}
						<div className="grid grid-cols-2 items-center">
							{/* formatted price */}
							<span className="text-xl font-bold text-rose-500">{format.price(product.price)}</span>

							{/* action button */}
							<Button
								variant="primary"
								size="large"
								icon={<BsCartPlusFill />}
								onClick={() => dispatch({ type: CartReducerActionType.ADD_TO_CART, payload: { ...product, quantity: 1 } })}
								disabled={productInCart}
							>
								{productInCart ? 'In cart' : 'Add to cart'}
							</Button>
						</div>
					</div>
				</Card>
			</section>

			{/* related products section */}
			<section>
				<Heading level={2}>Related products</Heading>

				{/* display "related" products */}
				<div className="grid grid-flow-col gap-2 overflow-x-auto auto-cols-[70%] md:auto-cols-[33%] overscroll-contain">
					{relatedProducts.splice(0, 5).map((item) => (
						<ProductCard key={item.productId} product={item} />
					))}
				</div>
			</section>
		</div>
	);
};

/*
 * Product page default export
 * @default
 */
export default Product;
