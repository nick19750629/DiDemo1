import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: String = 'http://via.placeholder.com/820x230';
  size: number;
  divClass: String;
  isBig: boolean;
  divAnyClass: any = {
    a: false,
    b: false,
    c: false
  };
  isDev: boolean;
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  constructor() {
    this.isBig = false;
    this.isDev = true;
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.divAnyClass = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };
    }, 3000);
  }

  ngOnInit() {
    this.size = 2;
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }
}
