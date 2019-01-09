import { Injectable } from '@angular/core';
import  { HttpClient}  from '@angular/common/http'
import  {LoginData} from '../Model/login'
import {  Registration } from '../Model/RegisterEmp';
import { Employee } from '../Model/EmpDetail'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ScoreGeniusService {

  public employeelist: Employee[];

  constructor(private _http:HttpClient) { }

  getLogin(usermodel:LoginData)
  {
      return this._http.post('https://localhost:44364/api/Employee/Login' ,usermodel)
  }


  getRegistration(userReg:Registration)
  {
      return this._http.post<Registration>('https://localhost:44364/api/Employee/RegistrationDetails' ,userReg)
  }

  SaveEmployee(empmodel:Employee)
  {
      return this._http.post<Employee>('https://localhost:44364/api/Employee/SaveEmpDetails' ,empmodel)
  }

  getEmployee()
  {
      return this._http.get<Employee[]>('https://localhost:44364/api/Employee/GetEmployeeDetails')
  }
 
  DeleteEmployeeByID(empId)
  {
      return this._http.delete('https://localhost:44364/api/Employee/DeleteEmployee?empId='+empId)
  }

  UpdateEmployeeByID(empmodel:Employee)
  {
      return this._http.post('https://localhost:44364/api/Employee/EditEmployee',empmodel)
  }
  GetEmployeeByID(empId)
  {
    return this._http.get('https://localhost:44364/api/Employee/GetEmployeeByID?empId='+empId)
  }

}
