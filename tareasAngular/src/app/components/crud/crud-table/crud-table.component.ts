import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() message: boolean = true;
  @Output() messageToForm = new EventEmitter<boolean>();

  editing: boolean = true;

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

  constructor( private userSvc: CrudService ) { }

  ngOnInit ( ): void {
    //lista de usuarios cargados desde el JSON
    this.userSvc.getUsers()
      .subscribe( ( usersList: User[] ) => {
        this.users = usersList});

    this.userSvc.refresh$
      .subscribe( ( ) => {
        this.userSvc.getUsers()
          .subscribe( users => {
            this.users = users
          })

    })
  }
  //borrar usuario
  deleteUser ( user: User ) {
    this.userSvc.delUser( user )
      .subscribe()
  }

  //editar usuario
  editUser ( user: User ) {

  }
  toForm ( ) {
    console.log("hey")
    this.userSvc.sendFromTableToForm()
      .subscribe( message => {
        this.messageToForm.emit(this.editing);
        console.log(this.editing)
      })
  }  

}
