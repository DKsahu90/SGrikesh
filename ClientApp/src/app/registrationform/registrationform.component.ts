import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScoreGeniusService} from '../Services/score-genius.service'
import {HttpErrorResponse}  from '@angular/common/http'
import { Registration  } from '../Model/RegisterEmp'

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {


public employeelist: Registration[];
  
  empModel=new Registration('','','','');
 success=false;

 constructor(private router:Router, private _services:ScoreGeniusService) { 

}


Onsubmit()
{
 debugger;
 
    this._services.getRegistration(this.empModel).subscribe((res:any)=>{
  
      this.success=true;

        console.log(res)
       // this.empModel.empId=0;
        this.empModel.name ='';
        this.empModel.password ='';
        this.empModel.retypepassword='';
        this.empModel.email='';
    }
    ,(err:HttpErrorResponse)=>{

       // this.errormsg="Incorrect Username or Password";
    });

}
  
}



  