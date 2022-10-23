import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = 'http://localhost:8080/user';


  constructor(private http: HttpClient){ }

  postData(data:any){
    return this.http.post<any>(this.url+"/add",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getData(){
    return this.http.get<any>(this.url+"/all").pipe(map((res:any)=>{
      return res;
    }))
  }

  getDataById(id:number){
    return this.http.get<any>(this.url+"/getid/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>(this.url+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(id :number){
    return this.http.delete<any>(this.url+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }


  //  public getUser(): Observable<User[]>{
  //      return this.http.get<User[]>(`${this.apiServerUrl}/all`);
  //  }

  public getUserById(userid: number): Observable<User[]>{
      return this.http.get<User[]>(`${this.url}/getid/${userid}`);
  }

  public adduser(user: User): Observable<User>{
      return this.http.post<User>(`${this.url}/add`, user);
  }

  // public updateEmpoyee(user: User,employeeid:string): Observable<User>{
  //     return this.http.put<User>(`${this.url}/update/${employeeid}`, user);
  // }

  // public deleteuser(userid: number): Observable<void>{
  //     return this.http.delete<void>(`${this.url}/delete/${userid}`);
  // }

}