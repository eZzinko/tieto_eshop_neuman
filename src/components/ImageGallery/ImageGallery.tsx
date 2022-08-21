import React, { FunctionComponent, useState } from 'react';
import { ImageGalleryProps } from './ImageGallery.types';

/**
 * ImageGallery component
 * @return JSX.Element
 */
const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ images }) => {
	// track active image
	const [activeThumb, setActiveThumb] = useState<string | undefined>(images[0]);

	return (
		<div className="grid gap-4">
			{/* display active image */}
			<div className="max-h-80 w-auto overflow-hidden object-scale-down">
				<img src={activeThumb} alt="product" />
			</div>

			{/* show rest images */}
			<div className="grid grid-flow-col gap-2 overflow-x-auto auto-cols-[21%] overscroll-contain">
				{images.map((image, index) => (
					<div onClick={() => setActiveThumb(image)} className="cursor-pointer" key={index}>
						<img src={image} alt="product" />
					</div>
				))}
			</div>
		</div>
	);
};

/**
 * ImageGallery component default export
 * @default
 */
export default ImageGallery;
