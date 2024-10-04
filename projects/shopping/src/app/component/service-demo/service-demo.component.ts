import { Component, OnInit } from '@angular/core';
import { fakestore } from '../../service/fakestore.service';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit
{

  public categories:string[] = [];
  public Products:FakestoreProductContract[] = [];
  constructor(private fakestore:fakestore){}
  ngOnInit(): void 
  {
      this.fakestore.getCategories()
      .subscribe(resp => this.categories = resp);

      this.fakestore.getProducts()
      .subscribe(resp => this.Products = resp);
  }

}
