import { FunctionComponent } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Button, Card, Heading, Rating } from "..";
import { useFormat } from "../../hooks";
import { ProductCardProps } from "./ProductCard.types";

/**
 * ProductCard component
 * @return JSX.Element
 */
const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  ...props
}) => {
  const format = useFormat();
  return (
    <Card className={`flex flex-col gap-4 relative ${props.className}`}>
      {/* header section */}
      <Link to={`/product/${product.productId}`} className="grid gap-4">
        {/* product image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-fill"
        />

        {/* rating component */}
        <Rating rating={product.rating} />

        {/* product name */}
        <Heading level={2}>{product.name}</Heading>
      </Link>

      {/* action section */}
      <div className="flex flex-col gap-4 justify-between h-full">
        {/* description */}
        <p className="line-clamp-3">{product.desctiption}</p>

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
  );
};

/**
 * ProductCard component default export
 * @default
 */
export default ProductCard;
