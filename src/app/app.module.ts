import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { TranslationsModule } from "./translation/translation.module";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//Providers
import { MenuClassProvider } from './menu/menu.clases';
import { EmpresaMenuProvider } from './empresa/menu.provider';
import { UsuariosMenuProvider } from './usuarios/menu.provider';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DetalleEmpresaComponent } from './empresa/detalle/detalle-empresa.component';
import { PropiedadesComponent } from './empresa/propiedades/propiedades.component';
import { DepartamentosComponent } from './empresa/departamentos/departamentos.component';
import { RolesComponent } from './empresa/roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo/nuevo-usuario.component';
import { ListarUsuariosComponent } from './usuarios/listar/listar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DashboardComponent,
    EmpresaComponent,
    DetalleEmpresaComponent,
    PropiedadesComponent,
    DepartamentosComponent,
    RolesComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslationsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    MenuClassProvider,
    EmpresaMenuProvider,
    UsuariosMenuProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
