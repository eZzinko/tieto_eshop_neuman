import { HTMLProps } from "react";
import { productListType } from "../../helpers/data";

/**
 * ProductCardProps component
 * @export
 */
export type ProductCardProps = {
  product: productListType;
} & HTMLProps<HTMLDivElement>;
