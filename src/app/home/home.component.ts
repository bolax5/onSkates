import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../core/domain/post';
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

  constructor(public dialog: MatDialog) {
    // this.items = this.postService.getAll();
  }
  ngOnInit(): void {
    Particles.init({
      selector: '.background-elegant',
      connectParticles: true,
      color: ['#6dc9d5'],
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 200
          }
        }, {
          breakpoint:
            425
          ,
          options: {
            maxParticles: 0,
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 0
          }
        }
      ]
    });
  }
  select(slide: any): void {
    this.carrousel.select(slide);
  }
  onSlide(slideAction) {
    this.currentSlide = slideAction.current;
  }
  openModalityDetail(kind: number, title: string) {
    this.dialog.open(ModalityDetailComponent, { data: { kind, title } });
  }


}
