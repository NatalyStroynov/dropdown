import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import {DropdownService } from './dropdown/dropdown.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
