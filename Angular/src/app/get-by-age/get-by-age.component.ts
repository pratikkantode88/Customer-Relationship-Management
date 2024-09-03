import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-age',
  templateUrl: './get-by-age.component.html',
  styleUrl: './get-by-age.component.css'
})
export class GetByAgeComponent {
  age:number=0;
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

  getByAge(){
     console.log(this.age);
     this.customerService.getByAge(this.age).subscribe((data)=>{
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
