import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rform } from './rform';

describe('Rform', () => {
  let component: Rform;
  let fixture: ComponentFixture<Rform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
