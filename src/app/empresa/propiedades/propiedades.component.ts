import { Component } from '@angular/core';
import { EmpresaMenuProvider } from '../menu.provider';

@Component({
  selector: 'propiedades',
  templateUrl: 'propiedades.component.html',
  styleUrls: ['propiedades.component.css']
})
export class PropiedadesComponent {
  constructor(private menu: EmpresaMenuProvider){
    this.menu.setMenu({
      detalle: '',
      propiedades: 'active',
      departamentos: '',
      roles: ''
    });
  }
}