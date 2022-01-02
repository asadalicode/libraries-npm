import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'image-list-widget-asad';
import { ImageListGalleryService } from './image-list-gallery.service';

@Component({
  selector: 'lib-image-list-gallery',
  template: `
    <lib-image-list-widget [imageList]="imageList"></lib-image-list-widget>
  `,
  styles: [
  ]
})
export class ImageListGalleryComponent implements OnInit {
  @Input()
  jsonSource = ""

  @Input()
  dataSource = new Array<ImageModel>()

  imageList = new Array<ImageModel>()

  constructor(private _galleryService: ImageListGalleryService) { }

  ngOnInit(): void {
    if (this.dataSource)
      this.imageList = this.dataSource
    if (this.jsonSource !== "")
      this._galleryService.getData(this.jsonSource).subscribe(resp => {
        console.log(resp)
        this.imageList = resp as Array<ImageModel>
      }, err => console.log(err))
  }

}
