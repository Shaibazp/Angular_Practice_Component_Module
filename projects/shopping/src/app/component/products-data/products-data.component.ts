import { Component, OnInit } from '@angular/core';
import { FakestoreComponent } from '../fakestore/fakestore.component';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css']
})
export class ProductsDataComponent implements OnInit
{

  public products:FakestoreProductContract[] = [];
  public AllCount:number = 0;
  public ElectronicsCount:number = 0;
  public JewelarysCount:number = 0;
  public MenClothsCount:number = 0;
  public WomenClothsCount:number = 0;

  ngOnInit(): void 
  {
    fetch(`http://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data =>
      {
          this.products = data;
          this.AllCount = data.length;
          this.ElectronicsCount = data.filter((i:any) => i.category == 'electronics').length;
          this.JewelarysCount = data.filter((i:any) => i.category == 'jewelery').length;
          this.MenClothsCount = data.filter((i:any) => i.category == "men's clothing").length;
          this.WomenClothsCount = data.filter((i:any) => i.category == "women's clothing").length;
      });
  }

  public getCategoryName(e: any) 
  {
    if(e != 'all')
    {
      fetch(`http://fakestoreapi.com/products/category/${e}`)
      .then(response => response.json())
      .then(data =>
        {
            this.products = data;
        }
      );
    }
    else
    {
      fetch(`http://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data =>
        {
            this.products = data;
        }
      );
    }
  }

  public getProduct(e:any)
  {
    alert(JSON.stringify(e));
  }
}
