import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../userdashboard/user';
import { UserService } from '../userdashboard/user.service';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {

  employeeModelObj : User = new User();

  formValue!:FormGroup;
  employeeData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  showUpdateTitle!:boolean
  showAddTitle!:boolean;


  constructor(private formBulider:FormBuilder,private service:UserService) { }

  addButtonClickFunction(){
    this.formValue.reset();
    this.showUpdate=false;
    this.showAdd=true;
    this.showUpdateTitle=false;
    this.showAddTitle=true;

  }
  ngOnInit(): void {
    this.formValue=this.formBulider.group({
      id:[''],
     empid:[''],
      name:[''],
      mobile:[''],
      email:[''],
      gender:[''],
      dob:[''],
      doj:[''],
      password:[''],
      designation:[''],
      role:[''],
      schedule:[''],
    })
    this.getAllEmployee();
  }

  postEmployeeDetails(){
    this.employeeModelObj.id=this.formValue.value.id;
    this.employeeModelObj.employeeid=this.formValue.value.empid;
    this.employeeModelObj.name=this.formValue.value.name;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.gender=this.formValue.value.gender;
    this.employeeModelObj.dob=this.formValue.value.dob;
    this.employeeModelObj.doj=this.formValue.value.doj;
    this.employeeModelObj.password=this.formValue.value.password;
    this.employeeModelObj.designation=this.formValue.value.designation;
    this.employeeModelObj.role=this.formValue.value.role;
    this.employeeModelObj.schedule=this.formValue.value.schedule;
    
    
    let cancel = document.getElementById("cancel");
    this.service.postData(this.employeeModelObj).subscribe(a=>{
      console.log(a);
      alert("Record Inserted Successfully");
      cancel?.click();this.formValue.reset();
      this.getAllEmployee();
    })
  }

  getAllEmployee(){
    this.service.getData().subscribe(a=>{
      this.employeeData=a;
    })

  }

  deleteEmployee(row:any){
    this.service.deleteData(row.id).subscribe(a=>{
      alert("Record Deleted Successfully");
      this.getAllEmployee();
    })
  }

  updateEmployee(row:any){
    this.showUpdate=true;
    this.showAdd=false;
    this.showUpdateTitle=true;
    this.showAddTitle=false;
    this.employeeModelObj.id=row.id;
    this.employeeModelObj.employeeid=row.empid;
    
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['doj'].setValue(row.doj);
    this.formValue.controls['role'].setValue(row.role);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['designation'].setValue(row.designation);
    this.formValue.controls['schedule'].setValue(row.schedule);
  }
 
  updateEmployeeDetails(){
    
    this.employeeModelObj.name=this.formValue.value.name;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.gender=this.formValue.value.gender;
    this.employeeModelObj.dob=this.formValue.value.dob;
    this.employeeModelObj.doj=this.formValue.value.doj;
    this.employeeModelObj.password=this.formValue.value.password;
    this.employeeModelObj.designation=this.formValue.value.designation;
    this.employeeModelObj.schedule=this.formValue.value.schedule;
    this.employeeModelObj.role=this.formValue.value.role;
    this.service.updateData(this.employeeModelObj,this.employeeModelObj.id).subscribe(a=>{
      alert("Record Updated Successfully");
      let cancel=document.getElementById("cancel1");
      cancel?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

  getEmployeeById(row:any){
    this.service.getDataById(row.id).subscribe(a=>{
      this.employeeData=a;
    })

  }

}