import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemsServicesModule } from '../items-services.module';

@Injectable({
  providedIn: ItemsServicesModule
})
export class ItemService {
  private key = 'AIzaSyD3ZH1oZzmqh3cGD1gOjPgnnUeqYx76TLw';
  private query = 'Angular';
  private itemsUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=14&q=${this.query}`;
  private itemUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${this.key}`;
  constructor(
    private http: HttpClient
  ) {}

  getItems(): Observable<any> {
    return this.http.get(this.itemsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getItem(id: string): Observable<any> {
    return this.http.get(`${this.itemUrl}&id=${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
      }`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
