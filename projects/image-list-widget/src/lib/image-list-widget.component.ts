import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'image-component-asad';

@Component({
  selector: 'lib-image-list-widget',
  template: `
  <ol>
    <li *ngFor="let image of imageList">
      <lib-image-component [imageSource]="image"></lib-image-component>
    </li>
  </ol>
  `,
  styles: [
    './image-list-widget.component.css'
  ]
})
export class ImageListWidgetComponent implements OnInit {
  @Input()
  imageList = new Array<ImageModel>()
  constructor() { }

  ngOnInit(): void {
  }

}
