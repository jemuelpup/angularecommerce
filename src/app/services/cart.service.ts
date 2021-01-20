import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: CartProduct[] = [];

  constructor() { }
}
