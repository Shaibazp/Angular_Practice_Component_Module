import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-product',
  templateUrl: './ng-switch-product.component.html',
  styleUrls: ['./ng-switch-product.component.css']
})
export class NgSwitchProductComponent implements OnInit
{

  public viewName:string = "BasicDetails";

  public viewChanges(viewNames:string):void
  {
      this.viewName = viewNames;
  }
  ngOnInit(): void 
  {
  }

}
