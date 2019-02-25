import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropietarioComponent } from './detalle-propietario.component';

describe('DetallePropietarioComponent', () => {
  let component: DetallePropietarioComponent;
  let fixture: ComponentFixture<DetallePropietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePropietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
