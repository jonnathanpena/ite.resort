import { Component} from '@angular/core';
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(translate: TranslateService) {
      translate.addLangs(["en", "es"]);
      translate.setDefaultLang('es');
  }
}
