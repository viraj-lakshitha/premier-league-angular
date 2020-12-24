import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  student = [
    {id:101,name:"Alex",description: "Alex Details", email:"alex@xyz.com"},
    {id:102,name:"John",description: "JOhn Details", email:"john@xyz.com"},
    {id:103,name:"Carlo",description: "Carlo Details", email:"carlo@xyz.com"},
    {id:104,name:"Sara",description: "Sara Details", email:"sara@xyz.com"},
    {id:105,name:"Lee",description: "Lee Details", email:"lee@xyz.com"}
  ]

  constructor() { }

  public getStudent() : Array<{id, name, description, email}> {
    return this.student;
  }

  public createStudent(student : {id, name, description, email}) {
    this.student.push(student);
  }
}
