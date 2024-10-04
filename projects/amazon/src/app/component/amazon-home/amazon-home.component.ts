import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from 'projects/shopping/src/app/contracts/FakestoreProductContract';
import { fakestore } from 'projects/shopping/src/app/service/fakestore.service';

@Component({
  selector: 'app-amazon-home',
  templateUrl: './amazon-home.component.html',
  styleUrls: ['./amazon-home.component.css']
})
export class AmazonHomeComponent implements OnInit
{
  constructor(private fakestore:fakestore){}
  ngOnInit(): void 
  {
      this.fakestore.getProducts()
      .subscribe(data => this.products = data);
  }  

  public products:FakestoreProductContract[] = [];

}


