import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  addAtnURL : string;
  getAtnURL : string;
  updateAtnUrl : string;
  deleteAtnUrl : string;
  getById: string;

  constructor(private http : HttpClient) {
    this. addAtnURL = "http://localhost:8080/api/attendance/";
    this. getAtnURL = "http://localhost:8080/api/attendance/";
    this. updateAtnUrl = "http://localhost:8080/api/attendance";
    this. deleteAtnUrl="http://localhost:8080/api/attendance";
    this.getById = "http://localhost:8080/api/attendance/emp";

  }

  addAttendance(atn : Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.addAtnURL,atn);
  }

  getAllAttendance(): Observable<Attendance[]>{
    return this.http.get<Attendance[]>(this.getAtnURL);
  }

  getAttById(id: String): Observable<Attendance[]>{
    return this.http.get<Attendance[]>(`${this.getById}/${id}`);
  }


  

  updateAttendance(atn :Attendance) : Observable<Attendance>{
    return this.http.put<Attendance>(this.updateAtnUrl+'/'+atn.id, atn);
  }

  deleteAttendance(atn : Attendance) : Observable<Attendance> {
    return this.http.delete<Attendance>(this.deleteAtnUrl+'/'+atn.id);
}
}

