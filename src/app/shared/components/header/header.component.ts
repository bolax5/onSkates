import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { JoinComponent } from 'src/app/join/join.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _auth: AuthService, private router: Router, public dialog: MatDialog) { }

  isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }
  logout() {
    this._auth.logout();
  }
  openModal() {
    this.dialog.open(JoinComponent);
  }
  goTo($element: string) {
    const yourElement = document.getElementById($element);
    const yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }

}
