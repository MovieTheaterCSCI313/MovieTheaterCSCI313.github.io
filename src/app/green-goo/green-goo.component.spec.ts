import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGooComponent } from './green-goo.component';

describe('GreenGooComponent', () => {
  let component: GreenGooComponent;
  let fixture: ComponentFixture<GreenGooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenGooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenGooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
