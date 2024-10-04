import { Component, OnInit } from '@angular/core';
import { fakestore } from 'projects/shopping/src/app/service/fakestore.service';

@Component({
  selector: 'app-amazon-index',
  templateUrl: './amazon-index.component.html',
  styleUrls: ['./amazon-index.component.css']
})
export class AmazonIndexComponent implements OnInit
{
  menuList:any[] = [];
  constructor(private datasource:fakestore){}
  ngOnInit(): void 
  {
      this.menuList = this.datasource.MenuList;
  }
    

}
