import { Component } from '@angular/core';
import { EmpresaMenuProvider } from '../menu.provider';

@Component({
  selector: 'departamentos',
  templateUrl: 'departamentos.component.html',
  styleUrls: ['departamentos.component.css']
})
export class DepartamentosComponent {
  constructor(private menu: EmpresaMenuProvider){
    this.menu.setMenu({
      detalle: '',
      propiedades: '',
      departamentos: 'active',
      roles: ''
    });
  }
}