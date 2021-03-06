import { Component } from '@angular/core';
import { EmpresaMenuProvider } from '../menu.provider';

@Component({
  selector: 'detalle-empresa',
  templateUrl: 'detalle-empresa.component.html',
  styleUrls: ['detalle-empresa.component.css']
})
export class DetalleEmpresaComponent {
  constructor(private menu: EmpresaMenuProvider) {
    this.menu.setMenu({
      detalle: 'active',
      propiedades: '',
      departamentos: '',
      roles: ''
    });
  }
}