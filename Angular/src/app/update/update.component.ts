import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  customer:Customer=new Customer();
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  update(){
         this.customerService.getById(this.customer.id).subscribe((data)=>{
          
             this.customerService.update(this.customer).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer Update Successfully!";
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)

         },
    (error)=>{
      this.customerUpdated="Customer Not Found with "+this.customer.id;
      console.log(error);
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)
    })
  }
}
