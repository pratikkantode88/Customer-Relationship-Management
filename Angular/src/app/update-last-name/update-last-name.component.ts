import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-last-name',
  templateUrl: './update-last-name.component.html',
  styleUrl: './update-last-name.component.css'
})
export class UpdateLastNameComponent {

  id:number=0;
  lastName:string="";
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  updateLastName(){
         this.customerService.getById(this.id).subscribe((data)=>{
          
             this.customerService.updateLastName(this.id,this.lastName).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer's Last Name Update Successfully!";
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)

         },
    (error)=>{
      this.customerUpdated="Customer Not Found with "+this.id;
      console.log(error);
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)
    })
  }
}
