import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'footer-loading',
  templateUrl: './footer-loading.component.html',
  styleUrls: ['./footer-loading.component.scss'],
})
export class FooterLoadingComponent implements OnInit {
  @Input("loading")
  loading: boolean = false;
  constructor() { }

  ngOnInit() {}

}
