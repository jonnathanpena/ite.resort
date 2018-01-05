import { Component } from '@angular/core';
import { UsuariosMenuProvider } from '../menu.provider';

@Component({
  selector: 'nuevo-usuario',
  templateUrl: 'nuevo-usuario.component.html',
  styleUrls: ['nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  constructor(private menu: UsuariosMenuProvider) {
    this.menu.setMenu({
      nuevo: 'active',
      listar: ''
    });
  }
}