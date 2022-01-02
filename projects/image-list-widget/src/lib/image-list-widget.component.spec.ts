import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListWidgetComponent } from './image-list-widget.component';

describe('ImageListWidgetComponent', () => {
  let component: ImageListWidgetComponent;
  let fixture: ComponentFixture<ImageListWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
