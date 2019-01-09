import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ScoreGeniusService} from '../Services/score-genius.service'
import {HttpErrorResponse}  from '@angular/common/http'
import { Employee  } from '../Model/EmpDetail'

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  dept=['Devloper','HR','IT','Admin','Account','Security'];
  
  public employeelist: Employee[];
  delete=false;
  empModel=new Employee(0,'','',0,'');
 success=false;

 buttonname="Submit";

  constructor(private router:Router, private _services:ScoreGeniusService) { 

  }
  ngOnInit() {
    
    debugger;
    this.loaddata();
       
      }

      loaddata()
      {
        this._services.getEmployee().subscribe((res:any)=>{
          debugger;
          this.employeelist=res;
            console.log(res)
        }
        ,(err:HttpErrorResponse)=>{
        });
      }
  Onsubmit()
  {
   debugger;
    if( this.buttonname=="Submit")
    {
      this._services.SaveEmployee(this.empModel).subscribe((res:any)=>{
    
        this.success=true;
  
          console.log(res)
         // this.empModel.empId=0;
          this.empModel.name ='';
          this.empModel.email ='';
          this.empModel.phone=0;
          this.empModel.dept='';
          this.loaddata();
      }
      ,(err:HttpErrorResponse)=>{
  
         // this.errormsg="Incorrect Username or Password";
      });
    }
    else
    {
      debugger;
      this._services.UpdateEmployeeByID(this.empModel).subscribe((res:any)=>{
        debugger;
        this.success=true;
  
          console.log(res)
         // this.empModel.empId=0;
          this.empModel.name ='';
          this.empModel.email ='';
          this.empModel.phone=0;
          this.empModel.dept='';

          this.loaddata();
      }
      ,(err:HttpErrorResponse)=>{
        debugger;
         // this.errormsg="Incorrect Username or Password";
      });

    }
    
  }

  OnEdit(empId)
  {
    this.buttonname="Update"
    this._services.GetEmployeeByID(empId).subscribe((res:any)=>{
    
        this.empModel.empId=res[0].empId;
        this.empModel.name =res[0].empName;
        this.empModel.email =res[0].empEmail;
        this.empModel.phone=res[0].empPhone;
        this.empModel.dept=res[0].empDept;
    console.log(res)
    }
    ,(err:HttpErrorResponse)=>{
      
       
    });

    
  }

  OnDelete(empId)
  {
    debugger;
    this._services.DeleteEmployeeByID(empId).subscribe((res:any)=>{
      debugger;
      this.delete=true;

      this.loaddata();

        console.log(res)
    }
    ,(err:HttpErrorResponse)=>{
      
       
    });

    //show data when record deleted
   
  }

 


}



