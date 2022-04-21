import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFolderComponent } from './Components/show-folder/show-folder.component';
import { AppAddEditFolderComponent } from './Components/app-add-edit-folder/app-add-edit-folder.component';
import { ShowTaskComponent } from './Components/show-task/show-task.component';
import { AppAddEditTaskComponent } from './Components/app-add-edit-task/app-add-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowFolderComponent,
    AppAddEditFolderComponent,
    ShowTaskComponent,
    AppAddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
