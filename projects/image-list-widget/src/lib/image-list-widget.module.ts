import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageListWidgetComponent } from './image-list-widget.component';
import { ImageComponentModule } from 'image-component-asad'


@NgModule({
  declarations: [ImageListWidgetComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ImageComponentModule
  ],
  exports: [ImageListWidgetComponent, ImageComponentModule]
})
export class ImageListWidgetModule { }
