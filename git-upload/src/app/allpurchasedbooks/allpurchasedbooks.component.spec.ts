import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpurchasedbooksComponent } from './allpurchasedbooks.component';

describe('AllpurchasedbooksComponent', () => {
  let component: AllpurchasedbooksComponent;
  let fixture: ComponentFixture<AllpurchasedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpurchasedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpurchasedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
