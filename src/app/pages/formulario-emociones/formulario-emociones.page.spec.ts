import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioEmocionalPage } from './formulario-emociones.page';

describe('FormularioEmocionalPage', () => {
  let component: FormularioEmocionalPage;
  let fixture: ComponentFixture<FormularioEmocionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEmocionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
