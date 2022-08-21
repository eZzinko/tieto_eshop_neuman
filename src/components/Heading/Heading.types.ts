import { HTMLProps } from "react";

/** Heading level type */
declare const HEADING_LEVELS: [1, 2, 3, 4, 5];
export type HeadingLevel = typeof HEADING_LEVELS[number];

/**
 * HeadingProps component
 * @export
 */
export type HeadingProps = { level: HeadingLevel } & Omit<
  HTMLProps<HTMLHeadingElement>,
  "as"
>;
