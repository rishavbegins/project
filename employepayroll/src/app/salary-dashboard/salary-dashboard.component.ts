import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Salary } from './salary';
import { SalaryService } from './salary.service';

@Component({
  selector: 'app-salary-dashboard',
  templateUrl: './salary-dashboard.component.html',
  styleUrls: ['./salary-dashboard.component.css']
})
export class SalaryDashboardComponent implements OnInit {

  @ViewChild('content',{static:false }) el:ElementRef

  public salaryInfo:Salary[];
  
  edata:String;

  constructor(private http: HttpClient, private salaryService:SalaryService, private router: Router) { }

  ngOnInit(): void {
    let data=localStorage.getItem('empid');
    if(data!=null){
      this.edata=data.replace(/['"]+/g, '');
      console.log(this.edata);
      this.getInfo(this.edata);
    }
  }

  getInfo(employeeid:String):void{
    this.salaryService.getInfoByEmpId(employeeid).subscribe(
      (res:Salary[])=>{
      this.salaryInfo=res;
    },
    (error:HttpErrorResponse)=>{
      alert("Login First");
      this.router.navigate(['login']);
    }

    );
  }

  //  makePdf(){
  //   let pdf= new jsPDF('p','pt','a4');
  //   /*
  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf)=>{
  //       pdf.save("SalarySlip.pdf")
  //     }
  //   })*/
  //   autoTable(pdf,{html:'#content'})
  //   pdf.save('table.pdf')
  //  }


}


