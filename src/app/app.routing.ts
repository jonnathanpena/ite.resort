import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DetalleEmpresaComponent } from './empresa/detalle/detalle-empresa.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'empresa',
        component: EmpresaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

