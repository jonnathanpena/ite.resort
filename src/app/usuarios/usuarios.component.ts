import { Component } from '@angular/core';
import { MenuClassProvider } from '../menu/menu.clases';
import { UsuariosMenuProvider } from './menu.provider';

@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.component.html',
  styleUrls: ['usuarios.component.css']
})
export class UsuariosComponent {
  constructor(
    private menus: MenuClassProvider,
    public menu: UsuariosMenuProvider
  ) {}

  ngOnInit() {
    this.menus.setMenu({
        escritorio: '',
        empresa: '',
        usuarios: 'active'
    });
  }
}