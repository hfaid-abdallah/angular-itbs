import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFacComponent } from './ajout-fac.component';

describe('AjoutFacComponent', () => {
  let component: AjoutFacComponent;
  let fixture: ComponentFixture<AjoutFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
