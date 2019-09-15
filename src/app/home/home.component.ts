import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Post } from '../core/domain/post';
import { PostsService } from '../shared/services/posts.service';
import { MatDialog } from '@angular/material';
import { ModalityDetailComponent } from './modality-detail/modality-detail.component';
declare const Particles;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carrousel;
  items: Observable<Post[]>;
  currentSlide = 'slide0';

  constructor(private postService: PostsService, public dialog: MatDialog) {
    this.items = this.postService.getAll();
  }
  ngOnInit(): void {
    Particles.init({
      selector: '.background-elegant',
      connectParticles: true,
      color: ['#6dc9d5']
    });
  }
  select(slide: any): void {
    console.log(this.carrousel);
    this.carrousel.select(slide);
  }
  onSlide(slideAction) {
    this.currentSlide = slideAction.current;
  }
  openModalityDetail(kind: number, title: string) {
    this.dialog.open(ModalityDetailComponent, { data: { kind, title } });
  }


}
