import { Component } from '@angular/core';
import { UsuariosMenuProvider } from '../menu.provider';

@Component({
  selector: 'listar-usuarios',
  templateUrl: 'listar-usuarios.component.html',
  styleUrls: ['listar-usuarios.component.css']
})
export class ListarUsuariosComponent {
  constructor(private menu: UsuariosMenuProvider) {
    this.menu.setMenu({
      nuevo: '',
      listar: 'active'
    });
  }
}