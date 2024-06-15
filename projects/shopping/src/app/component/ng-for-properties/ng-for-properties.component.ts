import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-ng-for-properties',
  templateUrl: './ng-for-properties.component.html',
  styleUrls: ['./ng-for-properties.component.css']
})
export class NgForPropertiesComponent  implements OnInit
{
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
}
