import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DetalleEmpresaComponent } from './empresa/detalle/detalle-empresa.component';
import { PropiedadesComponent } from './empresa/propiedades/propiedades.component';
import { DepartamentosComponent } from './empresa/departamentos/departamentos.component';
import { RolesComponent } from './empresa/roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo/nuevo-usuario.component';
import { ListarUsuariosComponent } from './usuarios/listar/listar-usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'empresa',
        component: EmpresaComponent,
        children: [
            {
                path: '',
                component: DetalleEmpresaComponent
            }, {
                path: 'propiedades',
                component: PropiedadesComponent
            }, {
                path: 'departamentos',
                component: DepartamentosComponent
            }, {
                path: 'roles',
                component: RolesComponent
            }
        ]
    }, {
        path: 'usuarios',
        component: UsuariosComponent,
        children: [
            {
                path: 'nuevo',
                component: NuevoUsuarioComponent
            }, {
                path: 'listar',
                component: ListarUsuariosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

