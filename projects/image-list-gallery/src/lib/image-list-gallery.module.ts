import { NgModule } from '@angular/core';
import { ImageListGalleryComponent } from './image-list-gallery.component';
import { ImageComponentModule, ImageListWidgetModule } from 'image-list-widget-asad';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ImageListGalleryComponent],
  imports: [
    ImageComponentModule,
    ImageListWidgetModule,
    HttpClientModule
  ],
  exports: [ImageListGalleryComponent]
})
export class ImageListGalleryModule { }
