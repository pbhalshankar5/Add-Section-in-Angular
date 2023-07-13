import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddsectionComponent } from './addsection/addsection.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    AppComponent,
    AddsectionComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SplitterModule,
    FieldsetModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
