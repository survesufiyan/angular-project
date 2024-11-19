import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  errorMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }
submitform(): any{
  if (this.name === '') {
    this.errorMessage = 'name should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
  }
  if (this.email === '') {
    this.errorMessage = 'email should not be blank';
    document.getElementById('errordiv')?.scrollIntoView(true);
    return;
}
this.errorMessage='';
}
}
