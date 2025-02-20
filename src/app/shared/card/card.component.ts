import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  dataArray:Array<any> =[]
  constructor(private _jsonService:JsonService){}
  ngOnInit(): void {
    this.getAllPhotos()
  }

  getAllPhotos(){
  this._jsonService.getPhotosApi().subscribe((data:any)=>{
    this.dataArray =data
  })
  }

}
