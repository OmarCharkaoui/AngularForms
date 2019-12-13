import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFormComponent } from './TemplateDravenForm/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RFormComponent } from './ReactiveForm/rform.component';


@NgModule({
  declarations: [
    AppComponent,
    TDFormComponent,
    RFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
