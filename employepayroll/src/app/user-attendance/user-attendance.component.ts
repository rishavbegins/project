import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Attendance } from './attendance';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-user-attendance',
  templateUrl: './user-attendance.component.html',
  styleUrls: ['./user-attendance.component.css']
})
export class UserAttendanceComponent implements OnInit {


  atnDetail !: FormGroup;
  atnObj : Attendance =new Attendance();
  atnList : Attendance[] = [];
  edata:String;
  constructor(private formBuilder : FormBuilder, private atnService : AttendanceService) { }

  ngOnInit(): void {

    let data=localStorage.getItem('empid');
    if(data!=null){
      this.edata=data.replace(/['"]+/g, '');
      console.log(this.edata);
      this.getAttById(this.edata);
    }
    
    this.getAttById(this.edata);
    this.atnDetail = this.formBuilder.group({ 
      id : [''],
      employeeid : [''],
      name : [''],
      starttime: [''],
      endtime: [''],
      date: [''],
      status : [''],
    });  

  }
  
  addAttendance(){

    console.log("addAttendance ----------------------->",JSON.stringify(this.atnService));
    this.atnObj.id = this.atnDetail.value.id;
    this.atnObj.employeeid = this.atnDetail.value.employeeid;
    this.atnObj.name = this.atnDetail.value.name;
    this.atnObj.starttime = this.atnDetail.value.starttime;
    this.atnObj.endtime = this.atnDetail.value.endtime;
    this.atnObj.date = this.atnDetail.value.date;
    this.atnObj.status = this.atnDetail.value.status;



    this.atnService.addAttendance(this.atnObj).subscribe(res=>{
      console.log(res);
      this.getAttById(this.edata);
  },err=>{
      console.log(err);
  });

}
getAttById(id: String) {
  this.atnService.getAttById(id).subscribe(res=>{
      this.atnList = res;
  },err=>{
    console.log("error while fetching data.")
  });
}
editAttendance(atn : Attendance) {
  this.atnDetail.controls['id'].setValue(atn.id);
  this.atnDetail.controls['employeeid'].setValue(atn.employeeid);
  this.atnDetail.controls['name'].setValue(atn.name);
  this.atnDetail.controls['starttime'].setValue(atn.starttime);
  this.atnDetail.controls['endtime'].setValue(atn.endtime);
  this.atnDetail.controls['date'].setValue(atn.date);
  this.atnDetail.controls['status'].setValue(atn.status);

  
}

updateAttendance() {

  this.atnObj.id = this.atnDetail.value.id;
  this.atnObj.employeeid = this.atnDetail.value.employeeid;
  this.atnObj.name = this.atnDetail.value.name;
  this.atnObj.starttime = this.atnDetail.value.starttime;
  this.atnObj.endtime = this.atnDetail.value.endtime;
  this.atnObj.date = this.atnDetail.value.date;
  this.atnObj.status = this.atnDetail.value.status;

  this.atnService.updateAttendance(this.atnObj).subscribe(res=>{
    console.log(res);
    this.getAttById(this.edata);
  },err=>{
    console.log(err);
  })


}

deleteAttendance(atn : Attendance) {

  this.atnService.deleteAttendance(atn).subscribe(res=>{
    console.log(res);
    alert('Attendance deleted successfully');
    this.getAttById(this.edata);
  },err => {
    console.log(err);
  });

}
}
