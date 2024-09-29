import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaDetailsComponent } from './problema-details.component';

describe('ProblemaDetailsComponent', () => {
  let component: ProblemaDetailsComponent;
  let fixture: ComponentFixture<ProblemaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
