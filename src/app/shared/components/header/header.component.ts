import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _auth: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }
  logout() {
    this._auth.logout();
  }

}
