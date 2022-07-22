import { Component, OnInit } from '@angular/core';

//primeNG api
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
  
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
      this.items = [
          {
              label: 'Tareas',
              items: [
                  {
                    label: 'Tarea 01 - Display-Hide',
                    routerLink: 'tarea01'
                  },
                  {
                    label: 'Tarea 02 - Component-Communication',
                    routerLink: 'communication-parent-child'
                  },
                  {
                    label: 'Tarea 03 - Crud',
                    routerLink: 'crud'
                  },
                  {
                    label: 'Tarea 04 - Search-on-Type',
                    routerLink: 'search-on-type'
                  },
                  {
                    label: 'Tarea 05 - Light-Switch',
                    routerLink: 'light-switch'
                  },
                  {
                    label: 'Tarea 06 - External-Library-With-Data',
                    routerLink: 'external-library-with-data'
                  },
                  {
                    label: 'Tarea 07 - Counter',
                    routerLink: 'counter'
                  }
              ]
          }
      ];
  }

}
