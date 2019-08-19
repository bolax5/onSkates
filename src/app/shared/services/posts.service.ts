import { Injectable, Injector } from '@angular/core';
import { HttpDataService } from 'src/app/core/services/http-data.service';
import { Post } from 'src/app/core/domain/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends HttpDataService<Post> {

  constructor(injector: Injector) {
    super(injector, 'posts');
   }

  getAll() {
    return this.get();
  }
}
