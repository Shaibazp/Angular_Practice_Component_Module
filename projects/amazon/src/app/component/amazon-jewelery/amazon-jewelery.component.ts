import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from 'projects/shopping/src/app/contracts/FakestoreProductContract';
import { fakestore } from 'projects/shopping/src/app/service/fakestore.service';

@Component({
  selector: 'app-amazon-jewelery',
  templateUrl: './amazon-jewelery.component.html',
  styleUrls: ['./amazon-jewelery.component.css']
})
export class AmazonJeweleryComponent implements OnInit
{
  constructor(private fakestore:fakestore){}
  ngOnInit(): void 
  {
      this.fakestore.GetSpecificCategory(`jewelery`)
      .subscribe(data => this.products = data);
  }  

  public products:FakestoreProductContract[] = [];

}
