import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-ng-for-trackby',
  templateUrl: './ng-for-trackby.component.html',
  styleUrls: ['./ng-for-trackby.component.css']
})
export class NgForTrackbyComponent implements OnInit
{


  public productss:any[] =[
    {Names: "TV", Prices:25400},
    {Names: "TV", Prices:25400}
  ];
  
  public procuts:FakestoreProductContract[] = [];
  ngOnInit(): void 
  {
    this.GetData();
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
