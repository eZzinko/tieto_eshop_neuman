import { HTMLProps } from "react";
import { productListType } from "../../helpers/data";

/**
 * CartItemProps component
 * @export
 */
export type CartItemProps = {
  item: productListType;
} & HTMLProps<HTMLDivElement>;
