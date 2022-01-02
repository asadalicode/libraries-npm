import { TestBed } from '@angular/core/testing';

import { ImageComponentService } from './image-component.service';

describe('ImageComponentService', () => {
  let service: ImageComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
