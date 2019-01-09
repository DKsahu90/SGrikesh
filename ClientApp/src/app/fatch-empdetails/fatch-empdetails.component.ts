import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {ScoreGeniusService} from '../Services/score-genius.service'
import {HttpErrorResponse, HttpClient}  from '@angular/common/http'
import { Employee  } from '../Model/EmpDetail'

@Component({
  selector: 'app-fatch-empdetails',
  templateUrl: './fatch-empdetails.component.html',
  styleUrls: ['./fatch-empdetails.component.css']
})
export class FatchEmpdetailsComponent implements OnInit {

  public employeelist: Employee[];
  delete=false;
  constructor(private router:Router,private _services:ScoreGeniusService) { }
  ngOnInit() {
debugger
    this._services.getEmployee().subscribe((res:any)=>{
      debugger;
      this.employeelist=res;
        console.log(res)
    }
    ,(err:HttpErrorResponse)=>{
      
       
    });
  }
  


  OnDelete(empId)
  {
    this._services.DeleteEmployeeByID(empId).subscribe((res:any)=>{
      debugger;
      this.delete=true;
        console.log(res)
    }
    ,(err:HttpErrorResponse)=>{
      
       
    });
     
  }

  
}







