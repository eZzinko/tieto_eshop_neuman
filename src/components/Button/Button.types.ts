import React, { HTMLProps } from 'react';

/** button variants */
declare const BUTTON_VARIANTS: ['primary', 'secondary', 'danger', 'ghost'];
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

/** button sizes */
declare const BUTTON_SIZES: ['normal', 'large'];
export type ButtonSize = typeof BUTTON_SIZES[number];

/** icon position */
declare const ICON_POSITION: ['start', 'end'];
export type IconPosition = typeof ICON_POSITION[number];

/**
 * ButtonProps component
 * @export
 */
export type ButtonProps = {
	variant: ButtonVariant;
	size?: ButtonSize;
	icon?: React.ReactElement;
	iconPosition?: IconPosition;
	link?: HTMLProps<HTMLAnchorElement>;
	disabled?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'>;
