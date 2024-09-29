import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaNewComponent } from './problema-new.component';

describe('ProblemaNewComponent', () => {
  let component: ProblemaNewComponent;
  let fixture: ComponentFixture<ProblemaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemaNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
