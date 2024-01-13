import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
