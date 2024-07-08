import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent implements OnInit
{
  ngOnInit(): void 
  {
      fetch(`http://fakestoreapi.com/products`)
      .then(resp => resp.json())
      .then(resp =>{ this.prod = resp;})
  }

  public prod:FakestoreProductContract[] = [];

}
