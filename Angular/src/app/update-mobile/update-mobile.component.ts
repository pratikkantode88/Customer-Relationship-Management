import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrl: './update-mobile.component.css'
})
export class UpdateMobileComponent {

  id:number=0;
  mobile:string="";
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  updateMobile(){
         this.customerService.getById(this.id).subscribe((data)=>{
          
             this.customerService.updateMobile(this.id,this.mobile).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer's Mobile Number Update Successfully!";
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
