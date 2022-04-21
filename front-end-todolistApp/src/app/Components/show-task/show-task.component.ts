import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from 'src/app/Models/folder';
import { TaskToDO } from 'src/app/Models/task-to-do';
import { FolderService } from 'src/app/Services/folder.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  folder: Folder= {
    id: 0,
    name: '',
    taskList:[]
  };
  id_folder:number = -1;
  //tasks: TaskToDO[] = []
  

  constructor(private serviceFolder: FolderService, private serviceTask: TaskService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.id_folder= params['id'];
          this.serviceFolder.getFolder(params['id']).subscribe(
            result=>{
              this.folder = result;
              this.folder.taskList = this.folder.taskList?.sort((a, b) => {return b.id - a.id;});
              //this.tasks = result.taskList
              
            }
          )
        }
      }
    );
  }

  modalTitle:string = '';
  activateAddEditTaskComponent:boolean = false;
  tasktoDO:TaskToDO={
    id: 0,
    description: '',
    isDone: false
  }

  modalAdd(){
    this.tasktoDO={
      id: 0,
      description: '',
      isDone: false
    }
    this.modalTitle = 'New Task';
    this.activateAddEditTaskComponent=true;
  }

  modalEdit(item:any){
    this.tasktoDO = item;
    this.modalTitle = 'Editing Task "'+ this.tasktoDO.description + '"';
    this.activateAddEditTaskComponent=true;
  }

  delete(item:any){
    if (confirm(`Are you sure you want to delete this task?`)) {
      this.serviceTask.deleteTask(item.id).subscribe(res=>{
            
          var showDeleteSuccess = document.getElementById("delete-success-task-alert");
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "block";
          }
    
          setTimeout(() => {
            if (showDeleteSuccess) {
              showDeleteSuccess.style.display = "none";
            }
          }, 4000);
          this.serviceFolder.getFolder(this.id_folder).subscribe(
            result=>{
              this.folder = result;
              this.folder.taskList = this.folder.taskList?.sort((a, b) => {return b.id - a.id;});
              //this.tasks = result.taskList
              
            }
          )
      })
    }
  }

  completeTask(item:any){
    
    this.serviceTask.updateTask(item, this.id_folder).subscribe();
    

  }

  modalClose(){
    this.activateAddEditTaskComponent = false;
    this.serviceFolder.getFolder(this.id_folder).subscribe(
      result=>{
        this.folder = result;
        this.folder.taskList = this.folder.taskList?.sort((a, b) => {return b.id - a.id;});
        //this.tasks = result.taskList
        
      }
    )
    
  }
  

}
