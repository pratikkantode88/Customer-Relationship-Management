import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrl: './save.component.css'
})
export class SaveComponent {
  customerCreated:string="";
   
  customer:Customer=new Customer();

  constructor(private customerService:CustomerService,
              private router:Router){}

  save(){
     this.customerService.saveCustomer(this.customer).subscribe((data)=>{
      console.log(data);
     });
     this.customerCreated="Customer Save Successfully!";
     setTimeout(()=>{
       this.router.navigate(["/admin"]);
     },2000)
  }
}
