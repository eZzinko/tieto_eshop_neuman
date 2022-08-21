import React, { FunctionComponent } from "react";
import { Heading, ProductCard } from "../components";
import { getProductList, productListType } from "../helpers/data";

/*
 * Products page
 * @return JSX.Element
 */
const Products: FunctionComponent = () => {
  const products: productListType[] = getProductList();

  return (
    <React.Fragment>
      <Heading level={1}>List of all products</Heading>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
      </div>
    </React.Fragment>
  );
};

/*
 * Products page default export
 * @default
 */
export default Products;
