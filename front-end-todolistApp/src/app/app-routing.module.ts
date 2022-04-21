import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFolderComponent } from './Components/show-folder/show-folder.component';
import { ShowTaskComponent } from './Components/show-task/show-task.component';

const routes: Routes = [
  {path: '', redirectTo: '/folder', pathMatch: 'full'},
  { path: 'folder', component: ShowFolderComponent },
  { path: 'tasks/:id', component: ShowTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
