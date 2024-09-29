import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadeFormComponent } from './localidade-form.component';

describe('LocalidadeFormComponent', () => {
  let component: LocalidadeFormComponent;
  let fixture: ComponentFixture<LocalidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalidadeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
