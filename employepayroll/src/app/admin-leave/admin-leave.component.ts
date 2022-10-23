import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent implements OnInit {

  leaves: Leaves[];
  constructor(private service:LeaveService,private router:Router) { }

  ngOnInit(): void { this.pending();
  }
  
  pending(){
    this.service.pendingLeave().subscribe(data => {
      this.leaves = data;
    })
  }

  remaining(){
    this.service.remainingLeave().subscribe(data => {
      this.leaves = data;
    })
  }

  leave: Leaves = new Leaves();
  approve(employeeid:string,id:number){
    this.leave.status="Approved";
    this.service.updateLeave(id,this.leave).subscribe(data=> {
      this.pending();
    })
  }

  reject(employeeid:string,id:number){
    this.leave.status="Rejected";
    this.service.updateLeave(id,this.leave).subscribe(data=> {
      this.pending();
    })
  }



}