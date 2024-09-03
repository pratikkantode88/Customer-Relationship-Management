import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrl: './update-email.component.css'
})
export class UpdateEmailComponent {

  id:number=0;
  email:string="";
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  updateEmail(){
         this.customerService.getById(this.id).subscribe((data)=>{
          
             this.customerService.updateEmail(this.id,this.email).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer's Email Update Successfully!";
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
