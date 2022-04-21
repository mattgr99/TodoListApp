import { Component, Input, OnInit } from '@angular/core';
import { TaskToDO } from 'src/app/Models/task-to-do';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-app-add-edit-task',
  templateUrl: './app-add-edit-task.component.html',
  styleUrls: ['./app-add-edit-task.component.css']
})
export class AppAddEditTaskComponent implements OnInit {
  newTask: TaskToDO={
    id: 0,
    description: '',
    isDone: false
  }

  
  
  constructor(private serviceTask: TaskService) { }

  @Input() tasktoDO:any;
  @Input() id_folder:number=-1;
  ngOnInit(): void {

  }

  addTask(){
    

    this.serviceTask.updateTask(this.tasktoDO, this.id_folder).subscribe(res=>{
      var closeModalBtn= document.getElementById('add-edit-modal-task-close');
      if (closeModalBtn) {
        closeModalBtn.click();        
      }

      var showAddSuccess = document.getElementById("add-success-task-alert");
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }

      setTimeout(() => {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none";
        }
      }, 4000);
    });
  }

}
