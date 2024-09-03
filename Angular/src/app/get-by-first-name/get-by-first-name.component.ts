import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-first-name',
  templateUrl: './get-by-first-name.component.html',
  styleUrl: './get-by-first-name.component.css'
})
export class GetByFirstNameComponent {
  firstName:string="";
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

  getByFirstName(){
     console.log(this.firstName);
     this.customerService.getByFirstName(this.firstName).subscribe((data)=>{
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
