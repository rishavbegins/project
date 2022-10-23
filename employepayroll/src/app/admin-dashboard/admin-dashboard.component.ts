import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../userdashboard/user';
import { UserService } from '../userdashboard/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public user : any;
  formValue : FormGroup;
  userObj : User = new User();
  userData : any;
  idData: number;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,  private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    let dataa = localStorage.getItem('userid');
    if(dataa!=null)
     this.idData = parseInt(dataa);
     console.log(this.idData);
      this.getUser(this.idData);

      this.formValue = this.formBuilder.group({
        name:[''],
        mobile:[''],
        email:[''],
        gender:[''],
        dob:[''],
        doj:[''],
        password:[''],
        designation:[''],
        currUser: [this.idData]
  
      })
  }

  getUser(userid: number): void
  {
    this.userService.getUserById(userid).subscribe(
      (res: User[]) =>{
        this.user = res;
        console.log(this.user);
      },
      (error : HttpErrorResponse)=>{
        alert("Login First");
        this.router.navigate(['login']);
       
      }
    );
  }

  logoutSession()
  {
    console.log("in funciton");
    localStorage.setItem('userid',JSON.stringify(null));
    localStorage.setItem('empid',JSON.stringify(null));
    this.router.navigate(['login']);

  }

  edit(row:any){
    this.userObj.id=row.id;
    this.userObj.employeeid=row.employeeid;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['doj'].setValue(row.doj);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['designation'].setValue(row.designation);
    this.userObj.role = row.role;
  }
 

  updateEmployeeDetails(){
    this.userObj.name= this.formValue.value.name;
    this.userObj.mobile= this.formValue.value.mobile;
    this.userObj.email= this.formValue.value.email;
    this.userObj.gender= this.formValue.value.gender;
    this.userObj.dob= this.formValue.value.dob;
    this.userObj.doj= this.formValue.value.doj;
    this.userObj.password= this.formValue.value.password;
    this.userObj.designation= this.formValue.value.designation;

    this.userService.updateData(this.userObj,this.userObj.id).subscribe(data=> {
      alert("Record Updated Successfully");
      let cancel=document.getElementById("cancel1");
      cancel?.click();
      this.formValue.reset();
      this.router.navigate(['/admindashboard']);
      
    })

  }

}