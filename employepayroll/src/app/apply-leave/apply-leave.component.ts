import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { LeaveService } from '../leave.service';
import { Leaves } from '../leaves';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean=false;
  empData: string;

  startdate:string='';
  enddate:string='';
  reason:string='';


  constructor(private builder:FormBuilder,private service:LeaveService,private router:Router) { }

  ngOnInit(): void {
    this.startdate = '';
    this.enddate ='';
    this.reason = '';
    this.registerForm= this.builder.group(
      {
        startdate:["",Validators.required],
        enddate:["",Validators.required],
        reason:["",Validators.required]
      }
    );
  }

  leaves : Leaves =new Leaves();

  OnSubmit(){

    let dataa = localStorage.getItem('empid');
    if(dataa!=null)
     this.empData = dataa.replace(/['"]+/g, '');
     console.log(this.empData);

    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else{
      this.leaves.status = "Pending";
      this.leaves.employeeid=this.empData;
      this.leaves.startdate = this.startdate;
      this.leaves.enddate = this.enddate;
      this.leaves.reason = this.reason;
      console.log(this.leaves);
      this.service.applyLeave(this.leaves).subscribe(res => {
        if(res == null){
          alert("Not Applied");
        }
        else{
          alert("Leave Applied Successfully");
          this.router.navigate(['userdashboard']);
        }
      })
      } 
  }

  get f(){
    return this.registerForm.controls;
  }


}
