import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Post } from '../core/domain/post';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: Observable<Post[]>;

  constructor(private postService: PostsService) {
    this.items = this.postService.getAll();
  }


}
