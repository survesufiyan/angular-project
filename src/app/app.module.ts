import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
//import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { TemplatedrivenComponent } from './components/templatedriven/templatedriven.component';
import { ReactivedrivenComponent } from './components/reactivedriven/reactivedriven.component';
import { InlinetemplateComponent } from './components/inlinetemplate/inlinetemplate.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    TemplatedrivenComponent,
    ReactivedrivenComponent,
    InlinetemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
