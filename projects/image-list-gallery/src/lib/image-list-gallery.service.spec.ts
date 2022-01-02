import { TestBed } from '@angular/core/testing';

import { ImageListGalleryService } from './image-list-gallery.service';

describe('ImageListGalleryService', () => {
  let service: ImageListGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageListGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
