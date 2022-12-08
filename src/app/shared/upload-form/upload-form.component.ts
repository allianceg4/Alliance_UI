import { Component, OnInit, VERSION} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from 'src/app/pages/client-side/dashboard/component/dashboard.component';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  name = "Angular " + VERSION.major;
  display: FormControl = new FormControl("", Validators.required);
  file_store!: FileList;
  file_list: Array<string> = [];

  constructor(public dialog: MatDialog) {}


  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }


  sendDialog() {
    this.dialog.open(SuccessfulDialogComponent);
  }
  ngOnInit(): void {
  }

}
