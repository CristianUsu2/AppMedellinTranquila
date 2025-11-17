import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEmocionalPage } from './formulario-emociones.page';

describe('RegistroEmocionalPage', () => {
  let component: RegistroEmocionalPage;
  let fixture: ComponentFixture<RegistroEmocionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmocionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
