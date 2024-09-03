import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-less-than-age',
  templateUrl: './get-by-less-than-age.component.html',
  styleUrl: './get-by-less-than-age.component.css'
})
export class GetByLessThanAgeComponent {
  age:number=0;
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

  getByLessThanAge(){
     console.log(this.age);
     this.customerService.getByLessThanAge(this.age).subscribe((data)=>{
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
