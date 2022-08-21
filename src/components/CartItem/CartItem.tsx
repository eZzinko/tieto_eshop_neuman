import { FunctionComponent, PropsWithChildren } from "react";
import { useFormat } from "../../hooks";
import { Card, Heading, Button } from "../index";
import { CartItemProps } from "./CartItem.types";

/**
 * CartItem component
 * @return JSX.Element
 */
const CartItem: FunctionComponent<PropsWithChildren<CartItemProps>> = ({
  item,
}) => {
  const format = useFormat();

  return (
    <Card className="flex gap-2">
      <img src={item.image} alt={item.name} className="w-32 aspect-video" />

      <div>
        <Heading level={2}>{item.name}</Heading>
        <p className="line-clamp-3">{item.desctiption}</p>
      </div>
      <div className="">
        <Button variant="ghost" className="w-min">
          Remove
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <input type="number" className="bg-gray-50" defaultValue={1} />

          {/* formatted price */}
          <span className="text-xl font-bold text-rose-500">
            {format.price(item.price)}
          </span>
        </div>
      </div>
    </Card>
  );
};

/**
 * CartItem component default export
 * @default
 */
export default CartItem;
