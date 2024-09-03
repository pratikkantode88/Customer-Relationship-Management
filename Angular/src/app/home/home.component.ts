import { Component } from '@angular/core';
import { CustomerAuthService } from '../_service/customer-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private customerAuthService:CustomerAuthService,
    private router:Router){}


public isLoggedIn(){
return  this.customerAuthService.isLoggedIn();
}

public logout(){
this.customerAuthService.clear();
this.router.navigate(["/login"]);
}
}
