import React, { FunctionComponent, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Heading, Rating, ImageGallery } from "../components";
import { isDefined } from "../helpers/common";
import { getProductList, productListType } from "../helpers/data";
import { useFormat } from "../hooks";
import { BsCartPlusFill } from "react-icons/bs";

/*
 * Product page
 * @return JSX.Element
 */
const Product: FunctionComponent = () => {
  // get productId from URL
  const { productId } = useParams();

  // hooks
  const format = useFormat();

  // find product by productID -> only testing example
  const product = useMemo(() => {
    // get all products
    const products: productListType[] = getProductList();

    // find selected product by productId
    return products.find((product) => product.productId === productId);
  }, [productId]);

  if (!isDefined(product)) {
    throw new Error("Product not found");
  }

  return (
    <div className="grid gap-4">
      {/* product section */}
      <section>
        <Card className="grid md:grid-cols-2 gap-4">
          <div>
            <ImageGallery images={product.images} />
          </div>
          <div>
            <Heading level={2}>{product.name}</Heading>

            <Rating rating={product.rating} />

            <p>{product.desctiption}</p>

            {/* action container */}
            <div className="grid grid-cols-2 items-center">
              {/* formatted price */}
              <span className="text-xl font-bold text-rose-500">
                {format.price(product.price)}
              </span>

              {/* action button */}
              <Button
                variant="primary"
                size="large"
                icon={<BsCartPlusFill />}
                onClick={() => console.log("Clicked")}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* related products section */}
      <section>
        <Heading level={2}>Related products</Heading>
      </section>
    </div>
  );
};

/*
 * Product page default export
 * @default
 */
export default Product;
