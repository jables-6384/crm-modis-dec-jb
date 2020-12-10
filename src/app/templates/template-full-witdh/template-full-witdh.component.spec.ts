import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFullWitdhComponent } from './template-full-witdh.component';

describe('TemplateFullWitdhComponent', () => {
  let component: TemplateFullWitdhComponent;
  let fixture: ComponentFixture<TemplateFullWitdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFullWitdhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFullWitdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
