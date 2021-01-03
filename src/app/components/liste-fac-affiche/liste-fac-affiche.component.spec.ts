import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacAfficheComponent } from './liste-fac-affiche.component';

describe('ListeFacAfficheComponent', () => {
  let component: ListeFacAfficheComponent;
  let fixture: ComponentFixture<ListeFacAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFacAfficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFacAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
