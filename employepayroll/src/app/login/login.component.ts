import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public currUserId: number;
  public currempId: number;
  public roleId: number;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }


  login()
  {
   //console.log(this.loginForm.value.email+" "+ this.loginForm.value.password);
    this.http.get<any>("http://localhost:8080/user/all")
    .subscribe(res=>{
      
      const userr = res.find((a:any)=>{
        if (a.email == this.loginForm.value.email && a.password == this.loginForm.value.password )
        {
          this.currUserId = a.id;
          this.currempId = a.employeeid;
          this.roleId = a.role;
          localStorage.setItem('userid',JSON.stringify(this.currUserId));
          localStorage.setItem('empid',JSON.stringify(this.currempId));
          console.log(this.currempId);
        }
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password ;
        
      });

      if(userr )
      {
        if(this.roleId==1)
        {
        
          alert("Login Success As Admin");
          this.loginForm.reset();
          this.router.navigate(['admindashboard']);
        }
        else
        {
          alert("Login Success As User");
          this.loginForm.reset();
          this.router.navigate(['userdashboard']);
        }
       
      }
      else{
        console.log(userr);
        alert("user not found");
      }
    }, err=>{
      alert("something went wrong!!");
    })
  }

}
