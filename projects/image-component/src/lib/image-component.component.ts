import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from './image-component.service';
@Component({
  selector: 'lib-image-component',
  template: `
  <div class="flex-container">
  <img [src]="imageSource.image" alt="image-broken" onError="this.src='https://via.placeholder.com/50'" class="image"/>
  <p class="text-center">{{imageSource.text}}</p>
  </div>
  `,
  styles: [
    `.image{
      width: fit-content;
      height: fit-content;
    }
    .flex-container{
        display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex-shrink: 1;
      width: min-content;
      max-width: fit-content;

    }
    .text-center{
      text-align: center;
    }
    `
  ]
})
export class ImageComponentComponent implements OnInit {
  @Input()
  imageSource: ImageModel = new ImageModel()

  imagePresent = false

  constructor() {
    this.imagePresent = this.imageSource.image === "" ? false : true
  }

  ngOnInit(): void {
  }

}
