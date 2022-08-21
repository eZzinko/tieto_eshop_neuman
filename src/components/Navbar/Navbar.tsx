import { FunctionComponent } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { SiInstacart } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useContextRequired } from '../../hooks';
import { CartProviderContext } from '../../providers/CartProvider';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { NavbarProps } from './Navbar.types';

import { Cart } from '../Cart';

/**
 * Navbar component
 * @return JSX.Element
 */
const Navbar: FunctionComponent<NavbarProps> = () => {
	// get global cart context
	const { open, setOpen, cartItems } = useContextRequired(CartProviderContext);

	return (
		<nav className="sticky top-0 z-50 bg-white">
			{/* container for width control */}
			<div className="p-4 max-w-7xl m-auto flex justify-between">
				{/* logo section */}
				<Link to="/" className="flex gap-2 items-center">
					<span>
						<SiInstacart fontSize={24} />
					</span>
					<Heading level={2}>Logo Ipsum</Heading>
				</Link>

				{/* cart section */}

				<div className="relative">
					{/* cart toggle button */}
					<Button variant="primary" className="w-content" icon={<BsCartFill fontSize={16} />} onClick={() => setOpen(true)}>
						Cart
					</Button>

					{/* cart quantitity */}
					{cartItems.length > 0 && (
						<span className="absolute z-50 -top-2 -right-4 bg-rose-400 rounded-full w-6 h-6 text-xs flex items-center justify-center text-white outline outline-white">
							{cartItems.length}
						</span>
					)}
				</div>

				{/* cart container */}
				{open && <Cart />}
			</div>
		</nav>
	);
};

/**
 * Navbar component default export
 * @default
 */
export default Navbar;
