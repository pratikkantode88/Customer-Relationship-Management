import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-last-name',
  templateUrl: './get-by-last-name.component.html',
  styleUrl: './get-by-last-name.component.css'
})
export class GetByLastNameComponent {
  lastName:string="";
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

  getByLastName(){
     console.log(this.lastName);
     this.customerService.getByLastName(this.lastName).subscribe((data)=>{
      console.log(data);
      this.customers=data;
      setTimeout(()=>{
        this.router.navigate(["/admin"]);
      },4000)
     },
    (error)=>{
          this.msg="Customer Not Found!";
          setTimeout(()=>{
            this.router.navigate(["/admin"]);
          },2000)
    })

  }
}
