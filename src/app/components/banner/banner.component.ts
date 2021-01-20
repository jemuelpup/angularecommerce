import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public bannerTitle: string | undefined;
  @Input() public bannerDescription: string | undefined;
  @Input() public bannerImage: string | undefined;
  @Input() public bannerLink: string | undefined;
  @Input() public bannerLinkText: string | undefined;
  @Input() public addedClass: string | undefined;

}
