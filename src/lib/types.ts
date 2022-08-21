// expected data types from API -> just for example purposes
export type ProductDTO = { productId: string; name: string; desctiption: string; image: string; images: string[]; rating: number; price: number };

export type ProductListDTO = ProductDTO[];

export type CartProdutDTO = ProductDTO & { quantity: number };
