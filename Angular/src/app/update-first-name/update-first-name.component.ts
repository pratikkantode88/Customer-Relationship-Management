import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-first-name',
  templateUrl: './update-first-name.component.html',
  styleUrl: './update-first-name.component.css'
})
export class UpdateFirstNameComponent {

  id:number=0;
  firstName:string="";
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  updateFirstName(){
         this.customerService.getById(this.id).subscribe((data)=>{
          
             this.customerService.updateFirstName(this.id,this.firstName).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer's First Name Update Successfully!";
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
