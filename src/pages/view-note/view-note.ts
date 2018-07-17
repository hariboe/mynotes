import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Note } from 'ionic-angular';
import { NoteService } from '../../providers/note-service/note-service';

/**
 * Generated class for the ViewNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
    this.note = this.navParams.get('note');
  }
  
  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
