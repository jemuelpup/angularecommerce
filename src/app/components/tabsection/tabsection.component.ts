import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabsection',
  templateUrl: './tabsection.component.html',
  styleUrls: ['./tabsection.component.less']
})
export class TabsectionComponent implements OnInit {

  @Input() public tabTitle: string | undefined;
  @Input() public tabDescription: string | undefined;
  @Input() public tabImage: string | undefined;
  @Input() public tabImageAlt: string | undefined;
  @Input() public tabButtonText: string | undefined;
  @Input() public tabButtonLink: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
