import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Salary } from '../salary-dashboard/salary';
import { SalaryService } from '../salary-dashboard/salary.service';

@Component({
  selector: 'app-admin-salary',
  templateUrl: './admin-salary.component.html',
  styleUrls: ['./admin-salary.component.css']
})
export class AdminSalaryComponent implements OnInit {

  salaryInfo:Salary=new Salary(); 

  formValue!:FormGroup;
  salaryData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  showUpdateTitle!:boolean
  showAddTitle!:boolean;

  constructor(private service:SalaryService,private http:HttpClient,private formBulider:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formValue=this.formBulider.group({
      empid:[''],
      name:[''],
      year:[''],
      month:[''],
      salary:['']
    })
    this.getAllInfo();
  }

  addButtonClickFunction(){
    this.formValue.reset();
    this.showUpdate=false;
    this.showAdd=true;
    this.showUpdateTitle=false;
    this.showAddTitle=true;
  }
  getAllInfo(){
    this.service.getData().subscribe(a=>{
      this.salaryData=a;
    })
  }

  postSalaryDetails(){
    this.salaryInfo.id=this.formValue.value.id;
    this.salaryInfo.employeeid=this.formValue.value.empid;
    this.salaryInfo.name=this.formValue.value.name;
    this.salaryInfo.year=this.formValue.value.year;
    this.salaryInfo.month=this.formValue.value.month;
    this.salaryInfo.salary=this.formValue.value.salary;
    let cancel = document.getElementById("cancel");
    this.service.postData(this.salaryInfo).subscribe(a=>{
      console.log(a);
      alert("Record Inserted Successfully");
      cancel?.click();
      this.formValue.reset();
      this.getAllInfo();
    })
  }

 

  deleteInfo(row:any){
    this.service.deleteData(row.id).subscribe(a=>{
      alert("Record Deleted Successfully")
      this.getAllInfo();
    })
  }
    
  updateSalary(row:any){
    this.showUpdate=true;
    this.showAdd=false;
    this.showUpdateTitle=true;
    this.showAddTitle=false;
    this.salaryInfo.id=row.id;
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateSalaryDetails(){
    
    this.salaryInfo.salary=this.formValue.value.salary;
    this.service.updateData(this.salaryInfo,this.salaryInfo.id).subscribe(a=>{

      alert("Record Updated Successfully");
      let cancel=document.getElementById("cancel1");
      cancel?.click();
      this.formValue.reset();
      this.getAllInfo();
    
    })
  }

}