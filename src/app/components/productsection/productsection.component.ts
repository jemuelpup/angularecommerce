import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productsection',
  templateUrl: './productsection.component.html',
  styleUrls: ['./productsection.component.less']
})
export class ProductsectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public sectionTitle: string | undefined;
  @Input() public sectionDescription: string | undefined;
}
