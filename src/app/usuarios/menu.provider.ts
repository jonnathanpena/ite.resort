import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosMenuProvider {

    public menu: any = {};

    constructor() {}

    public setMenu(objeto) {
        this.menu = {
            nuevo: objeto.nuevo,
            listar: objeto.listar
        };
    }
}