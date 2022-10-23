import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { AdminSalaryComponent } from './admin-salary/admin-salary.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LoginComponent } from './login/login.component';
import { SalaryDashboardComponent } from './salary-dashboard/salary-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserAttendanceComponent } from './user-attendance/user-attendance.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = 
[
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'userdashboard', component:UserdashboardComponent},
  {path: "applyleave", component:ApplyLeaveComponent},
  {path: "leavestatus", component:LeaveStatusComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "salary", component:SalaryDashboardComponent},
  {path: "admindashboard", component:AdminDashboardComponent},
  {path: "adminleave", component:AdminLeaveComponent},
  {path: "attendance", component:UserAttendanceComponent},
  {path: "adminsalary", component:AdminSalaryComponent},
  {path: "adminattendance", component: AdminAttendanceComponent},
  {path: "adminemployee", component: AdminEmployeeComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
