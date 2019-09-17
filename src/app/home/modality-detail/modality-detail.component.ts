import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modality-detail',
  templateUrl: './modality-detail.component.html',
  styleUrls: ['./modality-detail.component.scss']
})
export class ModalityDetailComponent implements OnInit {
  location;
  constructor(
    public dialogRef: MatDialogRef<ModalityDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
