import { Component } from '@angular/core';

import { MenuClassProvider } from '../menu/menu.clases';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  constructor(private menus: MenuClassProvider) {}

  ngOnInit() {
    this.menus.setMenu({
      escritorio: 'active',
      empresa: '',
      usuarios: ''
    });
  }

 }