import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageComponentModule } from "image-component"
import { ImageListWidgetModule } from 'image-list-widget';
import { ImageListGalleryModule } from 'image-list-gallery';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImageListWidgetModule,
    ImageComponentModule,
    ImageListGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
