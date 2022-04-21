import { Component, Input, OnInit } from '@angular/core';
import { Folder } from 'src/app/Models/folder';
import { FolderService } from 'src/app/Services/folder.service';

@Component({
  selector: 'app-app-add-edit-folder',
  templateUrl: './app-add-edit-folder.component.html',
  styleUrls: ['./app-add-edit-folder.component.css']
})
export class AppAddEditFolderComponent implements OnInit {
  newFolder: Folder={
    id: 0,
    name: ''
  }
  

  constructor(private service: FolderService) { }

  @Input() folder:any;
  id:number = 0;
  name:string = "";

  ngOnInit(): void {
    this.id = this.folder.id;
    this.name = this.folder.name;
    
    
  }

  addFolder(){
    this.newFolder.id = this.id;
    this.newFolder.name = this.name;

    this.service.addFolder(this.newFolder).subscribe(res=>{
      var closeModalBtn= document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();        
      }

      var showAddSuccess = document.getElementById("add-success-alert");
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
