import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinetemplate',
  template: `
  {{title}}
  <hr>
  <h1>{{title}}</h1>
  <h2>Welcome to Inline template using backtick!</h2>
  <br>
  <p>Inline template no need to maintain separtate HTML file
  `,
  styleUrls: ['./inlinetemplate.component.scss']
})
export class InlinetemplateComponent implements OnInit {
title:string="Inline Template-->internal HTML with TS";
  constructor() { }

  ngOnInit(): void {
  }

}
