import { Component } from '@angular/core';
import { MenuClassProvider } from '../menu/menu.clases';
import { EmpresaMenuProvider } from './menu.provider';

import { DetalleEmpresaComponent } from './detalle/detalle-empresa.component';

@Component({
  selector: 'app-empresa',
  templateUrl: 'empresa.component.html',
  styleUrls: ['empresa.component.css']
})
export class EmpresaComponent {
  constructor(
    private menus: MenuClassProvider,
    public menu: EmpresaMenuProvider
    ) {}

  ngOnInit() {
    this.menus.setMenu({
      escritorio: '',
      empresa: 'active',
      usuarios: ''
    });
  }
}