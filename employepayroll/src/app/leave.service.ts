import { Leaves } from './leaves';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leaveUrl: string='';

  constructor(private http:HttpClient) {
    this.leaveUrl= "http://localhost:8080/leave";
   }

   //Employee applies for leave
   applyLeave(leaves:Leaves) : Observable<any> {
    return this.http.post(`${this.leaveUrl}`,leaves);
   }

   //Employee views all his leave details
   getLeaveById(employeeid:String) : Observable<any> {
    return this.http.get(`${this.leaveUrl}/${employeeid}`);
   }

   //Admin views all leave details
   getLeave() :Observable<any> {
    return this.http.get(`${this.leaveUrl}`);
   }

   pendingLeave():Observable<any> {
    // return this.http.get(`${this.leaveUrl}/pending`);
    return this.http.get(`${this.leaveUrl}/pending`);
   }
   
   remainingLeave():Observable<any> {
    return this.http.get(`${this.leaveUrl}/remaining`);
   }

   //Admin leave status
   updateLeave(id:number,leaves:Leaves):Observable<any> {
    return this.http.put(`${this.leaveUrl}/${id}`,leaves);
   }

   //Delete Leave
   deleteLeave(employeeid:string):Observable<any> {
    return this.http.delete(`${this.leaveUrl}/${employeeid}`);
   }
}
