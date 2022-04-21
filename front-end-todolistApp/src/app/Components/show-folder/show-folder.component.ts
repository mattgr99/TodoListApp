import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/Models/folder';
import { FolderService } from 'src/app/Services/folder.service';

@Component({
  selector: 'app-show-folder',
  templateUrl: './show-folder.component.html',
  styleUrls: ['./show-folder.component.css']
})
export class ShowFolderComponent implements OnInit {

  folders: Folder[] = []
  
  constructor(private service: FolderService) { }

  ngOnInit(): void {
    this.service.getFolders().subscribe(res => (this.folders = res.data));
    
  }

  modalTitle:string = '';
  activateAddEditFolderComponent:boolean = false;
  folder:Folder = {
    id: 0,
    name: ''
  };

  modalAdd(){
    this.modalTitle = 'New Folder';
    this.activateAddEditFolderComponent=true;
  }

  delete(item:any){
    if (confirm(`Are you sure you want to delete this folder?`)) {
      this.service.deleteFolder(item.id).subscribe(res=>{
            
          var showDeleteSuccess = document.getElementById("delete-success-alert");
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "block";
          }
    
          setTimeout(() => {
            if (showDeleteSuccess) {
              showDeleteSuccess.style.display = "none";
            }
          }, 4000);
          this.service.getFolders().subscribe(obj => (this.folders = obj.data));
      })
    }
  }

  modalClose(){
    this.activateAddEditFolderComponent = false;
    this.service.getFolders().subscribe(res => (this.folders = res.data));
    
  }




}
