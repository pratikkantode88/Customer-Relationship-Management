import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-email',
  templateUrl: './get-by-email.component.html',
  styleUrl: './get-by-email.component.css'
})
export class GetByEmailComponent {
  email:string="";
  msg:string="";
  customers:Customer[]=[];
  constructor(private customerService:CustomerService,
              private router:Router){}

   getByEmail(){
     console.log(this.email);
     this.customerService.getByEmail(this.email).subscribe((data)=>{
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
