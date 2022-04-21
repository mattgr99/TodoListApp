import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from "src/app/Models/response-api";
import { Folder } from '../Models/folder';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public getFolders(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.apiUrl}/folder`);
  }

  public getFolder(id: number ): Observable<Folder> {
    return this.http.get<Folder>(`${this.apiUrl}/folder/${id}`);
  }

  public addFolder(data: Folder) {
    return this.http.post(this.apiUrl + '/folder', data)
  }

  public deleteFolder(id: number ) {
    return this.http.delete(this.apiUrl + `/folder/${id}`)
  }
}
