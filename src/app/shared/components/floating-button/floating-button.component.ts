import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { JoinComponent } from 'src/app/join/join.component';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent {

  constructor(public dialog: MatDialog) { }

  openModal() {
    this.dialog.open(JoinComponent);
  }

}
