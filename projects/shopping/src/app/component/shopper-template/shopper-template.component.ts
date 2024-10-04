import { Attribute, Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { fakestore } from '../../service/fakestore.service';

@Component({
  selector: 'app-shopper-template',
  templateUrl: './shopper-template.component.html',
  styleUrls: ['./shopper-template.component.css']
})
export class ShopperTemplateComponent implements OnInit
{
  public categories:string[] = [];
  public Products:FakestoreProductContract[] = [];
  public CartItems:FakestoreProductContract[] = [];
  public cartItemsCount:number = 0;
  public cartVisible:boolean = false;
  public totals:number = 0;
  constructor(private fakestores:fakestore){}
  ngOnInit(): void 
  {
      this.loadCategories();
      // this.loadProducts(`https://fakestoreapi.com/products`);
      this.fakestores.getProducts().subscribe(resp => this.Products = resp);
  }

  public loadCategories():void
  {
      // fetch(`https://fakestoreapi.com/products/categories`)
      // .then(resp => resp.json())
      // .then(resp =>{ 
      //   resp.unshift("all");
      //   this.categories = resp;})
      this.fakestores.getCategories().subscribe(resp => this.categories = resp);
  }

  public loadProducts(url:string):void
  {
    fetch(url)
    .then(resp => resp.json())
    .then(resp =>{
      this.Products = resp;})
  }

  public categoryChange(menu:string):void
  {
    if(menu =="all")
      {
        this.loadProducts(`https://fakestoreapi.com/products`);
      }
      else
      {
        this.loadProducts(`https://fakestoreapi.com/products/category/${menu}`);
      }
  }

  public addItems(id:number):void
  {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(resp => resp.json())
    .then(resp =>{
      this.CartItems.push(resp);
      
      this.getCardItemCount();
    })
  }
  public getCardItemCount():void
  {
      this.cartItemsCount = this.CartItems.length;
      for(let itm of this.CartItems)
        {
          this.totals = this.totals +  itm.price;
        }
      
  }

  public changevisible():void
  {
      this.cartVisible = (this.cartVisible==false)?true:false;
  }

  public deleteFromcart(id:number):void
  {
    var flag = confirm(`Are you sure want to delete?`);
    if(flag==true)
    {
        this.CartItems.splice(id,1);
        this.getCardItemCount();
    }
  }
}
