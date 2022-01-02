import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageModel } from 'image-list-widget';
@Injectable({
  providedIn: 'root'
})
export class ImageListGalleryService {

  constructor(private _httpClient: HttpClient) { }

  getData(jsonPath: string) {
    return this._httpClient.get(jsonPath)
  }

}
