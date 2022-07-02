import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftskComponent } from './hardsoftsk.component';

describe('HardsoftskComponent', () => {
  let component: HardsoftskComponent;
  let fixture: ComponentFixture<HardsoftskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardsoftskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
