import { TestBed } from '@angular/core/testing';

import { ImageListWidgetService } from './image-list-widget.service';

describe('ImageListWidgetService', () => {
  let service: ImageListWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageListWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
