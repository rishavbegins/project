import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  leaves:Leaves[];
  edata:String;
  constructor(private service:LeaveService,private router:Router) { }

  ngOnInit(): void {
    let data=localStorage.getItem('empid');
    if(data!=null){
      this.edata=data.replace(/['"]+/g, '');
      console.log(this.edata);
    }
    this.service.getLeaveById(this.edata) .subscribe(data =>{
      this.leaves=data;
    });

  }

}
