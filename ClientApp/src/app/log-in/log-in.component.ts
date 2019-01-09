import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScoreGeniusService} from '../Services/score-genius.service'
import {LoginData} from '../Model/login' ;
import { Registration } from '../Model/RegisterEmp'
import {HttpErrorResponse}  from '@angular/common/http'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 errormsg:string;
  userModel=new LoginData('','');

  userRegs = new Registration('','','','');
  
  constructor(private router:Router,private _services:ScoreGeniusService) {
     
   }

   ngOnInit() {
  }

  OnSubmit()
  {
    debugger;

    this._services.getLogin(this.userModel).subscribe((res:any)=>{
      debugger;
      this.router.navigate(['/dashboard']);
        this.errormsg="";
        console.log(res)
    }
    ,(err:HttpErrorResponse)=>{
        debugger;
        this.router.navigate(['/dashboard']);
      // this.errormsg="Incorrect Username or Password";
    });

  }
  onRegistar()  
  {
    this._services.getRegistration(this.userRegs).subscribe((res:any)=>{
    
      this.router.navigate(['/registrationform']);
        this.errormsg="";
        console.log(res)
    }
    ,(err:HttpErrorResponse)=>{

        this.errormsg="Incorrect Username or Password";
    });
    
  }
}
