import { Component, OnInit } from '@angular/core';

//primeNG
import { MenuItem } from 'primeng/api';
import { Tarea02Component } from '../../tareas/pages/tarea02/tarea02.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
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
                    routerLink: 'tarea02'
                  },
                  {
                    label: 'Tarea 03 - Crud',
                    routerLink: 'tarea03'
                  },
                  {
                    label: 'Tarea 04 - Search-on-Type',
                    routerLink: 'tarea04'
                  },
                  {
                    label: 'Tarea 05 - Light-Switch',
                    routerLink: 'tarea05'
                  },
                  {
                    label: 'Tarea 06 - External-Library-With-Data',
                    routerLink: 'tarea06'
                  },
                  {
                    label: 'Tarea 07 - Counter',
                    routerLink: 'tarea07'
                  }
              ]
          }
      ];
  }

}
