import { Component, OnInit } from '@angular/core';

import { Utils } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public info: any;

  constructor(
    private utils: Utils,
  ){}

  ngOnInit(){
    this.info = this.utils.getMachineInfo();
  }

}
