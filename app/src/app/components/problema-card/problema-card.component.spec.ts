import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaCardComponent } from './problema-card.component';

describe('ProblemaCardComponent', () => {
  let component: ProblemaCardComponent;
  let fixture: ComponentFixture<ProblemaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
