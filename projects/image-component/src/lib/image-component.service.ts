import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageComponentService {

  constructor() { }
}

export class ImageModel {
  image: string = ""
  text: string = ""
}

