import { faker } from '@faker-js/faker';
import { ProductListDTO } from '../lib/types';

export const getProductList: Function = (): ProductListDTO => {
	// fixed seed
	faker.seed(90);
	return [...Array(10)].map(() => ({
		productId: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		desctiption: faker.commerce.productDescription(),
		image: faker.image.abstract(undefined, undefined, true),
		images: [...Array(faker.datatype.number({ min: 0, max: 8 }))].map(() => faker.image.abstract(undefined, undefined, true)),
		rating: faker.datatype.number({ min: 0, max: 5 }),
		price: Number(faker.commerce.price(10000, 50000, 2)),
	}));
};
