import { Injectable } from '@angular/core';

@Injectable()
export class MenuClassProvider {

    public menu: any = {};

    constructor() {}

    public setMenu(tipo) {
        this.menu = {
            escritorio: tipo.escritorio,
            empresa: tipo.empresa,
            usuarios: tipo.usuarios
        };
    }
}