import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  photosUrl:string = `https://jsonplaceholder.typicode.com/photos`
  constructor(private _http:HttpClient) { }

  getPhotosApi(){
    return this._http.get(this.photosUrl)
  }
}
