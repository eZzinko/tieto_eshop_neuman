import { FunctionComponent, PropsWithChildren } from "react";
import { HeadingProps } from "./Heading.types";
import tw from "twin.macro";

// custom heading styles
const H1 = tw.h1`font-bold text-gray-800 text-3xl mb-4`;
const H2 = tw.h2`font-bold text-gray-800 text-2xl`;
const H3 = tw.h3`font-bold text-gray-800 text-lg mb-1`;
const H4 = tw.h4`font-bold text-base text-gray-700 mb-1`;
const H5 = tw.h5`font-bold text-base text-gray-600 mb-1`;

/**
 * Heading component
 * @return JSX.Element
 */
const Heading: FunctionComponent<PropsWithChildren<HeadingProps>> = ({
  level,
  children,
  ...props
}) => {
  switch (level) {
    case 1:
      return <H1>{children}</H1>;
    case 2:
      return <H2>{children}</H2>;
    case 3:
      return <H3>{children}</H3>;
    case 4:
      return <H4>{children}</H4>;
    default:
      return <H5>{children}</H5>;
  }
};

/**
 * Heading component default export
 * @default
 */
export default Heading;
