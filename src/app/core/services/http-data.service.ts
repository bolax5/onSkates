import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Post } from '../domain/post';
import { StaticInjector } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpDataService<T> {
  protected http: AngularFireDatabase;

  constructor(private injector: Injector, private collection: string) {
    this.http = this.injector.get(AngularFireDatabase);

  }

  get(): Observable<T[]> {
    return this.http.list<T>(this.collection).valueChanges();
  }

}
