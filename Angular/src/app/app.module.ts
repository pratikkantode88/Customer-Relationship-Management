import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomrTableComponent } from './customr-table/customr-table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OperationsComponent } from './operations/operations.component';
import { FormsModule } from '@angular/forms';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateComponent } from './update/update.component';
import { SaveComponent } from './save/save.component';
import { GetByFirstNameComponent } from './get-by-first-name/get-by-first-name.component';
import { GetByLastNameComponent } from './get-by-last-name/get-by-last-name.component';
import { GetByLessThanAgeComponent } from './get-by-less-than-age/get-by-less-than-age.component';
import { GetByGreaterThanAgeComponent } from './get-by-greater-than-age/get-by-greater-than-age.component';
import { GetByAgeComponent } from './get-by-age/get-by-age.component';
import { GetByEmailComponent } from './get-by-email/get-by-email.component';
import { UpdateFirstNameComponent } from './update-first-name/update-first-name.component';
import { UpdateLastNameComponent } from './update-last-name/update-last-name.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { UpdateAgeComponent } from './update-age/update-age.component';
import { GetAllFirstNamesComponent } from './get-all-first-names/get-all-first-names.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomrTableComponent,
    OperationsComponent,
    DeleteCustomerComponent,
    GetByIdComponent,
    UpdateComponent,
    SaveComponent,
    GetByFirstNameComponent,
    GetByLastNameComponent,
    GetByLessThanAgeComponent,
    GetByGreaterThanAgeComponent,
    GetByAgeComponent,
    GetByEmailComponent,
    UpdateFirstNameComponent,
    UpdateLastNameComponent,
    UpdateEmailComponent,
    UpdateMobileComponent,
    UpdateAgeComponent,
    GetAllFirstNamesComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    authGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
