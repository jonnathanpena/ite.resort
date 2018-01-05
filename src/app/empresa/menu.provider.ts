import { Injectable } from '@angular/core';

@Injectable()
export class EmpresaMenuProvider {

    public menu: any = {};

    constructor() {}

    public setMenu(objeto) {
        this.menu = {
            detalle: objeto.detalle,
            propiedades: objeto.propiedades,
            departamentos: objeto.departamentos,
            roles: objeto.roles
        };
    }
}