import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskToDO } from '../Models/task-to-do';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  

  public updateTask(data: TaskToDO, id: number) {
    return this.http.put(this.apiUrl + `/task/${id}`, data)
  }

  public deleteTask(id: number ) {
    return this.http.delete(this.apiUrl + `/task/${id}`)
  }
}
