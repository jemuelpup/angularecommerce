import { Image } from './image';

export class Product{
	id: number|undefined;
	sku: string|undefined;
	name: string|undefined;
	url: string|undefined;
	image: Image|undefined;
	rating: number|undefined;
	price: number|undefined;
	salePrice: number|undefined;
}
