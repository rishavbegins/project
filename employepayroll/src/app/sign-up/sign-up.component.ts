import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm =  this.formBuilder.group({
      name:[''],
      mobile:[''],
      email:[''],
      gender:[''],
      dob:[''],
      doj:[''],
      password:[''],
      designation:['']
    })
  }

  signup(){
    this.http.post<any>("http://localhost:8080/user/add", this.signupForm.value)
    .subscribe(res=>{
      alert("signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("something went wrong")
    })
  }

  

}
