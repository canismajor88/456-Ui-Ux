import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTextComponent } from './output-text.component';

describe('OutputTextComponent', () => {
  let component: OutputTextComponent;
  let fixture: ComponentFixture<OutputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
