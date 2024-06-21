import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSuperheroeComponent } from './buscar-superheroe.component';

describe('BuscarSuperheroeComponent', () => {
  let component: BuscarSuperheroeComponent;
  let fixture: ComponentFixture<BuscarSuperheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarSuperheroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarSuperheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
