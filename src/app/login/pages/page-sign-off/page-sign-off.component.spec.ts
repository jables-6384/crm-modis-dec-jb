import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignOffComponent } from './page-sign-off.component';

describe('PageSignOffComponent', () => {
  let component: PageSignOffComponent;
  let fixture: ComponentFixture<PageSignOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSignOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
