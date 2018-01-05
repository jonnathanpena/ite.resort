import { Component } from '@angular/core';
import { EmpresaMenuProvider } from '../menu.provider';

@Component({
  selector: 'roles',
  templateUrl: 'roles.component.html',
  styleUrls: ['roles.component.css']
})
export class RolesComponent {
  constructor(private menu: EmpresaMenuProvider) {
    this.menu.setMenu({
      detalle: '',
      propiedades: '',
      departamentos: '',
      roles: 'active'
    });
  }
}