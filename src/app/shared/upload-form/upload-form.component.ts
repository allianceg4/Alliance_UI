import { Component, OnInit } from '@angular/core';
import { FileHandle } from './dnd.directive';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  constructor() { }

  /**
   * on file drop handler
   */
   files: FileHandle[] = [];

   filesDropped(files: FileHandle[]): void {
     this.files = files;
   }

   upload(){
    alert("Successfully Uploaded!");
   }
  ngOnInit(): void {
  }

}
