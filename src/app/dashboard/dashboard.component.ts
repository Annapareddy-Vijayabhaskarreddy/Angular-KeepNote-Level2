import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(private service:NotesService){}
public notes:Array<Note>;
errMessage: string;
note: Note=new Note();
panelOpenState = false;

ngOnInit():void{
this.getNoteDetails();
}

getNoteDetails(){
this.service.getNotes().subscribe(data=>{
  this.notes=data;
},error=>{
  this.errMessage=error.message
})
}
addNoteDetails(){
if(!this.note.title||!this.note.text){
  this.errMessage='Title and Text both are required fields'
}
this.service.addNote(this.note).subscribe(data=>{
  if(data){
    this.notes.push(this.note);

  }
  else{
    this.errMessage='Unable to add the note to Notes';
  }
 
},error=>{
  this.errMessage=error.message
})
}
}
