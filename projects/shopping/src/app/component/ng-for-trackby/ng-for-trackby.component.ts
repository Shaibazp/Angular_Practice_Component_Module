import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-ng-for-trackby',
  templateUrl: './ng-for-trackby.component.html',
  styleUrls: ['./ng-for-trackby.component.css']
})
export class NgForTrackbyComponent implements OnInit
{

  public marcObject:any = {};
  public productss:any[] =[
    {Names: "TV", Prices:25400},
    {Names: "TV", Prices:25400}
  ];
  
  public procuts:FakestoreProductContract[] = [];
  ngOnInit(): void 
  {
    this.GetData();
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY")
    .then(resp => resp.json())
    .then( resp =>{this.marcObject = resp});
  }
  public GetData():void
  {
    fetch("http://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(resp =>{ this.procuts = resp;});
  }

  updateClick() { 
    this.productss = [
      {Names: "TV", Prices:25400},
      {Names: "TV", Prices:25400},
      {Names: "TV", Prices:25400},
      {Names: "TV", Prices:25400}
    ];
  }

  public trackChanges(index:number)
  {
      return index;
  }

}
