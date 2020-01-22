import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// decorator tells angular that this service ia available anywhere
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  // short cut for constructor(http: HttpClient) {this.http = http;}
  // inject HttpClient into the class
  constructor(private http: HttpClient) {
  }

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }
}
