import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageComponentComponent } from './image-component.component';



@NgModule({
  declarations: [ImageComponentComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [ImageComponentComponent]
})
export class ImageComponentModule { }
