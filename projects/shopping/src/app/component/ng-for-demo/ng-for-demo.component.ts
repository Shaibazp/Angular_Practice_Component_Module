import { Component, OnInit } from '@angular/core';
import { ProductContracts } from '../../contracts/ProductContracts';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit
{

  public categories:string[] = ["All", "Electronics", "Footware" ];
  public Menu:{Cate:string, Prod:string[]}[] = [
    {
      Cate: "Electronics",
      Prod: ["TV","Mobile"],
    },
    {
      Cate: "Footware",
      Prod: ["Sneakers","Boots"],
    }
  ]; 

  public Prods:{Name:string, Price:number}[] = [
    {
      Name: "TV",
      Price: 2545.25,
    },
    {
      Name: "Footware",
      Price: 2500,
    }
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

}
