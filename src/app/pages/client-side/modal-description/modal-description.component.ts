import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog.model';

@Component({
  selector: 'app-modal-description',
  templateUrl: './modal-description.component.html',
  styleUrls: ['./modal-description.component.css']
})
export class ModalDescriptionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

}
