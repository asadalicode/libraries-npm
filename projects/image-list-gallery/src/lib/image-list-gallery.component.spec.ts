import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListGalleryComponent } from './image-list-gallery.component';

describe('ImageListGalleryComponent', () => {
  let component: ImageListGalleryComponent;
  let fixture: ComponentFixture<ImageListGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
