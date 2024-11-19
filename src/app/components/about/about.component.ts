import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userName:string='';
  passWord:string='';
  uname:string='';
  constructor() { }

  ngOnInit(): void {
  }
  getLength():any{
    return this.passWord.length;
  }

}
