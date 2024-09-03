import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerAuthService } from '../_service/customer-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  constructor(private customerService:CustomerService,
    private customerAuthService:CustomerAuthService,
    private router:Router){}

    isAdmin=true;

username:string="";
password:string="";

login(){
console.log("username : "+this.username+" , password : "+this.password)
this.customerService.login(this.username,this.password).subscribe((data:any)=>{
this.customerAuthService.setRoles(data.user.role);
this.customerAuthService.setToken(data.jwtToken);

const role=data.user.role[0].roleName;
if(role==="admin"){
this.router.navigate(["/admin"]);
}
},
(error)=>{
console.log(error);

this.isAdmin=false;
  setTimeout(()=>{
    this.isAdmin=true;
  },2000)
}
)

}
}
