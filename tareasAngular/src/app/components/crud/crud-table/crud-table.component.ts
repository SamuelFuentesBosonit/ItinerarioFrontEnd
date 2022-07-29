import { Component, OnInit } from '@angular/core';

//interfaces
import { User } from 'src/app/interfaces/user.interface';
//service
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {

  //@Input() ussers: Usser[] = []

  id : string = '';

  user : User = {
    name: '',
    pass: '',
    promotion: true,
    mail: '',
    country: '',
    city: '',
    id: ''
  }
  
  users! : User[];

  selectedUser! : User[];

  editing: boolean = false;

  constructor( private userSvc: CrudService ) { }

  ngOnInit ( ): void {
    //lista de usuarios cargados desde el JSON
    this.userSvc.getUsers()
      .subscribe( ( usersList: User[] ) => {
        this.users = usersList});
  }

  deleteUser ( user: User ) {
    this.userSvc.delUser( user )
      .subscribe()
  }

}
