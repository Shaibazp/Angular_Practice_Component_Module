import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit
{
    public Product:FakestoreProductContract = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0
      }
    };

    constructor(){}
    
  ngOnInit(): void 
  {
      this.loadProduct(1);
  }

  public loadProduct(id:number):void
  {
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data =>
      {
          this.Product = data;
      });
  }
  public cnt:number = 1;
  public nextClick():void
  {
      this.cnt++;
      this.loadProduct(this.cnt);
  }
  public previousClick():void
  {
      this.cnt--;
      this.loadProduct(this.cnt);
  }
}
