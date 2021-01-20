import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.less']
})
export class ProductcardComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    
	}
}
