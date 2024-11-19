import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',//external
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
i:Array<number>=[1,2,3,4,5];
userName:string='';
revString:string='';
num1:number=0;
num2:number=0;
ans:number=0;
title:string='one way binding';
toggleOn:boolean=false;
public day = new Date().getDay();


 
num: number= 0;

  constructor() { 
   
  }

  ngOnInit(): void {
    console.log("******",this.day);
  }
  onkeyDown():void{
    const rev=this.userName.split('');
    console.log("rev========>",rev);
    this.revString=rev.reverse().join('');
    console.log("^^^^^^^",this.userName);
  }
  addition(){
this.ans=this.num1+this.num2;
  }
  

}
