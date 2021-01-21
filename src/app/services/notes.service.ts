import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {
  public bearerToken:any
  constructor(private http:HttpClient, private authh:AuthenticationService) {
   this.bearerToken=authh.getBearerToken();
  }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(`http://localhost:3000/api/v1/notes`,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.bearerToken}`)
    });
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post <Note>(`http://localhost:3000/api/v1/notes`,note,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.bearerToken}`)
    });
  }

}
