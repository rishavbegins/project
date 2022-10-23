import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SalaryDashboardComponent } from './salary-dashboard/salary-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminSalaryComponent } from './admin-salary/admin-salary.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent,
    SignUpComponent,
    SalaryDashboardComponent,
    AdminDashboardComponent,
    AdminLeaveComponent,
    UserAttendanceComponent,
    AdminAttendanceComponent,
    AdminEmployeeComponent,
    AdminSalaryComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
