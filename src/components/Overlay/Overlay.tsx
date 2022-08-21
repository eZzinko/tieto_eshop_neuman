import React, { FunctionComponent, PropsWithChildren } from 'react';
import { OverlayProps } from './Overlay.types';

/**
 * Overlay component
 * @return JSX.Element
 */
const Overlay: FunctionComponent<PropsWithChildren<OverlayProps>> = ({ active, children, ...props }) => {
	return (
		<div className={`fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black/50 z-50 ${active ? 'block' : 'hidden'} overflow-y-scroll`}>
			{children}
		</div>
	);
};

/**
 * Overlay component default export
 * @default
 */
export default Overlay;
