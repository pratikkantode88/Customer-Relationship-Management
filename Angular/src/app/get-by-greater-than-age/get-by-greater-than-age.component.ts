import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-greater-than-age',
  templateUrl: './get-by-greater-than-age.component.html',
  styleUrl: './get-by-greater-than-age.component.css'
})
export class GetByGreaterThanAgeComponent {
  age:number=0;
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

  getByGreaterthanAge(){
     console.log(this.age);
     this.customerService.getByGreaterThanAge(this.age).subscribe((data)=>{
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
