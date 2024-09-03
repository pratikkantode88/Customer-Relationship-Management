import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css'
})
export class OperationsComponent implements OnInit{

  selectedOp:string="";

getAll:string="get All Customers";
deleteCustomer:string="delete";
getById: string="getById";
update: string="update";
saveCustomer:string="save";
getByFirstName:string="getByFirstName";
getByLastName:string="getByLastName";
getByAge:string="getByAge";
getByLessthanAge:string="getByLessthanAge";
getByGreaterthanAge:string="getByGreaterthanAge";
getByEmail:string="getByEmail";
updateFirstName:string="updateFirstName";
updateLastName:string="updateLastName";
updateEmail:string="updateEmail";
updateMobile:string="updateMobile";
updateAge:string="updateAge";
getAllFirstNames:string="getAllFirstNames";

    constructor(private router:Router){}

  ngOnInit(): void {
   
  } 

  submit(){
    console.log(this.selectedOp);
  
    switch (this.selectedOp) {
      case 'delete':
          this.router.navigate(["/delete"]);
          break;
      case 'get All Customers':
          this.router.navigate(["/admin"]);
          break;
      case 'getById':
          this.router.navigate(["/getbyid"]);
          break;
      case 'update':
          this.router.navigate(["/update"]);
          break;
      case 'save':
          this.router.navigate(["/save"]);
          break;
      case 'getByFirstName':
          this.router.navigate(["/getbyfirstname"]);
          break;
      case 'getByLastName':
          this.router.navigate(["/getBylastname"]);
          break;
      case 'getByAge':
          this.router.navigate(["/getbyage"]);
          break;
      case 'getByLessthanAge':
          this.router.navigate(["/getbylessthanage"]);
          break;
      case 'getByGreaterthanAge':
          this.router.navigate(["/getbygreaterthanage"]);
          break;
      case 'getByEmail':
          this.router.navigate(["/getbyemail"]);
          break;
      case 'updateFirstName':
          this.router.navigate(["/updatefirstname"]);
          break;
      case 'updateLastName':
          this.router.navigate(["/updatelastname"]);
          break;
      case 'updateEmail':
          this.router.navigate(["/updateemail"]);
          break;
      case 'updateMobile':
          this.router.navigate(["/updatemobile"]);
          break;
      case 'updateAge':
          this.router.navigate(["/updateage"]);
          break;
      case 'getAllFirstNames':
          this.router.navigate(["/getallfirstnames"]);
          break;

      default:
        this.router.navigate(["/"]);
  }
  }
  
  
     
}
